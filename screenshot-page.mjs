import { chromium } from "playwright";

const BASE_URL = process.argv[2] || "http://localhost:8080";

const pages = [
  { name: "home", path: "/" },
  { name: "sessions", path: "/sessions" },
  { name: "works", path: "/works" },
  { name: "systems", path: "/systems" },
  { name: "worlds", path: "/worlds" },
  { name: "archive", path: "/archive" },
  { name: "archive-index", path: "/archive/index" },
  { name: "notes", path: "/archive/notes" },
  { name: "essay-atmosphere-is-information", path: "/archive/atmosphere-is-information" },
  { name: "identity", path: "/identity" },
  { name: "lumo", path: "/works/lumo" },
  { name: "booking", path: "/booking" },
  { name: "contact", path: "/contact" },
];

const viewports = [
  {
    label: "desktop",
    width: 1440,
    height: 1800,
  },
  {
    label: "mobile",
    width: 390,
    height: 1200,
  },
];

async function scrollFullPage(page) {
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let lastScrollHeight = 0;
      let stableCount = 0;

      const scrollStep = 500;
      const delay = 180;

      const timer = setInterval(() => {
        window.scrollBy(0, scrollStep);

        const currentScrollHeight = document.body.scrollHeight;
        const bottom =
          window.innerHeight + window.scrollY >= currentScrollHeight - 10;

        if (currentScrollHeight === lastScrollHeight) {
          stableCount++;
        } else {
          stableCount = 0;
          lastScrollHeight = currentScrollHeight;
        }

        if (bottom && stableCount >= 3) {
          clearInterval(timer);
          resolve();
        }
      }, delay);
    });
  });

  await page.waitForTimeout(800);
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(800);
}

async function waitForImages(page) {
  await page.evaluate(async () => {
    const images = Array.from(document.images);

    await Promise.all(
      images.map(async (img) => {
        if (img.complete) return;

        await new Promise((resolve) => {
          img.addEventListener("load", resolve, { once: true });
          img.addEventListener("error", resolve, { once: true });
        });
      })
    );

    await Promise.all(images.map((img) => img.decode?.().catch(() => {})));
  });
}

async function preparePage(page, url) {
  await page.goto(url, {
    waitUntil: "networkidle",
    timeout: 60000,
  });

  await page.evaluate(async () => {
    if (document.fonts) {
      await document.fonts.ready;
    }
  });

  await scrollFullPage(page);
  await waitForImages(page);

  await page.waitForTimeout(1000);
}

const browser = await chromium.launch({
  headless: true,
});

for (const viewport of viewports) {
  for (const pageInfo of pages) {
    const page = await browser.newPage({
      viewport: {
        width: viewport.width,
        height: viewport.height,
      },
      deviceScaleFactor: 1,
    });

    const url = `${BASE_URL}${pageInfo.path}`;
const output = `screenshots/${pageInfo.name}-0${viewport.label}.png`;
    console.log(`Capturing ${viewport.label}: ${url}`);

    try {
      await preparePage(page, url);

      await page.screenshot({
        path: output,
        fullPage: true,
      });

      console.log(`Saved ${output}`);
    } catch (error) {
      console.error(`Failed ${viewport.label} ${pageInfo.name}:`, error.message);
    }

    await page.close();
  }
}

await browser.close();

console.log("Done.");