import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import { MemoryRouter } from "react-router-dom";

import { BookingPage } from "@/pages/BookingPage";

vi.mock("framer-motion", async () => {
  const React = await import("react");

  const motion = new Proxy(
    {},
    {
      get: (_, tag: string) =>
        function MotionElement({
          children,
          ...props
        }: React.HTMLAttributes<HTMLElement>) {
          return React.createElement(tag, props, children);
        },
    },
  );

  return { motion };
});

function renderBookingPage() {
  return render(
    <HelmetProvider>
      <MemoryRouter>
        <BookingPage />
      </MemoryRouter>
    </HelmetProvider>,
  );
}

async function moveToReviewStep() {
  fireEvent.click(
    screen.getByRole("button", { name: /continue with request/i }),
  );

  fireEvent.change(screen.getByLabelText(/preferred week/i), {
    target: { value: "Week of 6 July" },
  });
  fireEvent.change(screen.getByLabelText(/^timezone/i), {
    target: { value: "America/Los_Angeles" },
  });
  fireEvent.change(screen.getByLabelText(/preferred contact method/i), {
    target: { value: "Email reply is fine" },
  });
  fireEvent.click(screen.getByRole("button", { name: /add your details/i }));

  fireEvent.change(screen.getByLabelText(/^name/i), {
    target: { value: "Ari Example" },
  });
  fireEvent.change(screen.getByLabelText(/^email/i), {
    target: { value: "ari@example.com" },
  });
  fireEvent.change(screen.getByLabelText(/session topic/i), {
    target: { value: "Naming direction" },
  });
  fireEvent.change(screen.getByLabelText(/short context/i), {
    target: {
      value: "The offer feels clear in feeling, but not yet in language.",
    },
  });
  fireEvent.click(screen.getByRole("button", { name: /review request/i }));

  await screen.findByText(/review the request before you send it/i);
}

describe("BookingPage", () => {
  beforeEach(() => {
    (
      import.meta.env as Record<string, string | undefined>
    ).VITE_STUDIO_INQUIRY_ENDPOINT = "https://forms.example.test/inquiries";
    vi.stubGlobal("fetch", vi.fn());
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("shows validation feedback before advancing past timing details", async () => {
    renderBookingPage();

    fireEvent.click(
      screen.getByRole("button", { name: /continue with request/i }),
    );
    fireEvent.click(screen.getByRole("button", { name: /add your details/i }));

    expect(await screen.findByRole("alert")).toHaveTextContent(
      "Please correct the highlighted timing details.",
    );
    expect(
      screen.getByText(
        "Name the week that feels most workable, or say that you are flexible.",
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Add the timezone you want the reply to use."),
    ).toBeInTheDocument();
  });

  it("supports failure and retry before showing the request-sent state", async () => {
    const fetchMock = vi.mocked(fetch);

    fetchMock
      .mockResolvedValueOnce(new Response("failed", { status: 503 }))
      .mockResolvedValueOnce(new Response(null, { status: 200 }));

    renderBookingPage();
    await moveToReviewStep();

    fireEvent.click(screen.getByRole("button", { name: /send request/i }));

    expect(await screen.findByRole("alert")).toHaveTextContent(
      "The session request service did not accept the request.",
    );

    fireEvent.click(screen.getByRole("button", { name: /try again/i }));

    await waitFor(() => {
      expect(screen.getByText("Your session request is on its way.")).toBeInTheDocument();
    });

    expect(
      screen.getByText(
        "Echo in Ink will reply with available times and a suggested next step.",
      ),
    ).toBeInTheDocument();
    expect(fetchMock).toHaveBeenCalledTimes(2);
  });
});
