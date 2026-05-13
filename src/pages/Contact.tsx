import Layout from "@/components/Layout";
import Section from "@/components/Section";
import { motion } from "framer-motion";
import { useState } from "react";

const Contact = () => {
  const [sent, setSent] = useState(false);

  return (
    <Layout>
      <Section width="reading" className="pt-12">
        <p className="eyebrow mb-8">Contact</p>
        <h1 className="font-serif-display text-5xl md:text-6xl leading-[1.05]">
          Say hello.
        </h1>
        <p className="lede mt-10">
          We read every note personally. A short message is enough — a sentence about
          what you're making, and we'll write back within a few days.
        </p>
      </Section>

      <Section width="reading">
        <div className="grid md:grid-cols-[1fr_1fr] gap-12">
          <div className="space-y-8">
            <div>
              <p className="eyebrow mb-3">Email</p>
              <a href="mailto:alex@echoin.ink" className="font-serif-display text-2xl md:text-3xl hover:gradient-text transition">
                alex@echoin.ink
              </a>
            </div>
            <div>
              <p className="eyebrow mb-3">Studio hours</p>
              <p className="body-prose">Monday — Thursday<br />A quiet inbox on Fridays.</p>
            </div>
            <div>
              <p className="eyebrow mb-3">Elsewhere</p>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li><a href="#" className="hover:text-foreground transition">Read.cv / echoinink</a></li>
                <li><a href="#" className="hover:text-foreground transition">Are.na / echoinink</a></li>
                <li><a href="#" className="hover:text-foreground transition">Instagram / @echoinink</a></li>
              </ul>
            </div>
          </div>

          <motion.form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="space-y-8"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Field label="Your name" name="name" />
            <Field label="Email" name="email" type="email" />
            <Field label="A few words about your project" name="message" textarea />
            <button type="submit" className="btn-quiet" disabled={sent}>
              {sent ? "Thank you — we'll be in touch." : "Send a note →"}
            </button>
          </motion.form>
        </div>
      </Section>

      <Section width="reading" className="text-center">
        <div className="hairline mb-12" />
        <p className="font-serif-display italic text-xl text-foreground/65">
          "Where ink meets light."
        </p>
      </Section>
    </Layout>
  );
};

const Field = ({ label, name, type = "text", textarea = false }: { label: string; name: string; type?: string; textarea?: boolean }) => {
  const cls = "w-full bg-transparent border-0 border-b border-foreground/15 focus:border-foreground/50 focus:outline-none py-3 text-base font-light placeholder:text-foreground/30 transition-colors duration-500";
  return (
    <label className="block">
      <span className="eyebrow block mb-2">{label}</span>
      {textarea ? (
        <textarea name={name} rows={4} className={cls} placeholder="…" />
      ) : (
        <input name={name} type={type} className={cls} placeholder="…" />
      )}
    </label>
  );
};

export default Contact;
