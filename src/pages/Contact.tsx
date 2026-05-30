import { useState, type ChangeEvent, type FormEvent, type ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PageShell } from '@/components/system';
import sessionImage from '@/assets/Sessions 2.png';
import {
  fadeSoft,
  driftUp,
  staggerContainer,
  STAGGER,
  VIEWPORT
} from '@/lib/motion-cinematic';

const explorationOptions = [
  'Identity System',
  'Website Experience',
  'Creative Direction',
  'Lumo',
  'Partnership',
  'Something Else',
];

const budgetOptions = [
  'Under $2k',
  '$2k-5k',
  '$5k-10k',
  '$10k-20k',
  '$20k+',
  'Not sure yet',
];

const contactBlocks = [
  {
    title: "Let's Connect",
    icon: 'send',
    lines: [
      <a key="email" href="mailto:hello@echoin.ink" className="hover:text-white/85 transition-colors duration-500">
        hello@echoin.ink
      </a>,
      'Auckland, New Zealand',
      'Responds within two days',
    ],
  },
  {
    title: 'Typical Response',
    icon: 'clock',
    lines: ['Within 48 hours', 'Mon-Fri, 9am-6pm NZST'],
  },
  {
    title: 'Good To Know',
    icon: 'spark',
    lines: ['The more context you share, the better I can understand how to help.'],
  },
] satisfies Array<{ title: string; icon: IconName; lines: ReactNode[] }>;

type IconName = 'send' | 'clock' | 'spark' | 'lock';

function ContactIcon({ name }: { name: IconName }) {
  const common = {
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.4,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
      {name === 'send' && (
        <>
          <path {...common} d="M5 12.5 20 5l-5.8 15-2.9-6.3L5 12.5Z" />
          <path {...common} d="m11.3 13.7 3.9-3.9" />
        </>
      )}
      {name === 'clock' && (
        <>
          <circle {...common} cx="12" cy="12" r="7.5" />
          <path {...common} d="M12 8.3V12l2.4 2.1" />
        </>
      )}
      {name === 'spark' && (
        <>
          <path {...common} d="M12 3.7v16.6M3.7 12h16.6M6.1 6.1l11.8 11.8M17.9 6.1 6.1 17.9" />
          <circle cx="12" cy="12" r="1.4" fill="currentColor" />
        </>
      )}
      {name === 'lock' && (
        <>
          <rect {...common} x="7" y="10.4" width="10" height="8" rx="1.2" />
          <path {...common} d="M9.2 10.4V8.2a2.8 2.8 0 0 1 5.6 0v2.2" />
        </>
      )}
    </svg>
  );
}

function ContactOrbital() {
  return (
    <div className="relative mx-auto h-[240px] w-[240px] md:h-[320px] md:w-[320px]" aria-hidden="true">
      <div className="absolute inset-0 rounded-full border border-white/[0.035]" />
      <div className="absolute inset-[14%] rounded-full border border-white/[0.045]" />
      <div className="absolute inset-[28%] rounded-full border border-[rgb(var(--ei-aurora-blue-rgb)/0.075)]" />
      <div className="absolute inset-[40%] rounded-full border border-[rgb(var(--ei-luxe-violet-rgb)/0.08)]" />
      <div
        className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[rgb(var(--ei-soft-lavender-rgb)/0.9)]"
        style={{
          boxShadow:
            '0 0 22px rgb(var(--ei-aurora-blue-rgb) / 0.38), 0 0 46px rgb(var(--ei-luxe-violet-rgb) / 0.18)',
        }}
      />
      <div
        className="absolute inset-[34%] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgb(var(--ei-aurora-blue-rgb) / 0.10) 0%, rgb(var(--ei-luxe-violet-rgb) / 0.045) 42%, transparent 70%)',
          filter: 'blur(18px)',
        }}
      />
    </div>
  );
}

export function Contact() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    exploration: '',
    message: '',
    budget: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormState('submitting');

    window.setTimeout(() => {
      setFormState('success');
    }, 1200);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <PageShell atmosphere="default" withTopSpacing={false}>
      <Helmet>
        <title>Contact — Echo in Ink</title>
        <meta name="description" content="Share a little about your project and start a considered conversation with Echo in Ink." />
      </Helmet>

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-70"
          style={{
            background:
              'radial-gradient(ellipse 42% 34% at 28% 18%, rgb(var(--ei-deep-indigo-rgb) / 0.22) 0%, transparent 68%), radial-gradient(ellipse 34% 28% at 77% 16%, rgb(var(--ei-luxe-violet-rgb) / 0.07) 0%, transparent 72%), radial-gradient(ellipse 52% 38% at 50% 58%, rgb(var(--ei-aurora-blue-rgb) / 0.035) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute inset-y-0 left-[14%] w-px opacity-40"
          style={{ background: 'linear-gradient(to bottom, transparent, rgb(var(--ei-deep-indigo-rgb) / 0.22), transparent)' }}
        />
        <div
          className="absolute inset-y-0 right-[22%] w-[18vw] opacity-25"
          style={{ background: 'linear-gradient(90deg, transparent, rgb(var(--ei-deep-indigo-rgb) / 0.18), transparent)' }}
        />
      </div>

      <div className="relative z-10 ei-container max-w-[1480px] pt-36 md:pt-44 pb-24 md:pb-32">
        <motion.section
          variants={staggerContainer(STAGGER.cinematic, 0)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT.loose}
          className="grid items-center gap-14 md:grid-cols-[1.05fr_0.95fr] md:gap-20"
        >
          <motion.div variants={driftUp} className="max-w-[520px]">
            <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/45">
              Contact
            </span>
            <h1 className="mt-9 font-editorial text-[clamp(3.15rem,7vw,5.9rem)] leading-[0.95] tracking-normal text-white/92">
              Let's build something{' '}
              <em className="font-normal italic text-[rgb(var(--ei-soft-lavender-rgb)/0.9)]">
                meaningful.
              </em>
            </h1>
            <p className="mt-8 max-w-[430px] font-structural text-[1rem] leading-[1.85] text-white/58 md:text-[1.05rem]">
              Share a little about your project and I'll get back to you within two days.
            </p>
          </motion.div>

          <motion.div variants={fadeSoft} className="hidden justify-center md:flex">
            <ContactOrbital />
          </motion.div>
        </motion.section>

        <motion.section
          variants={staggerContainer(STAGGER.cinematic, 0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT.loose}
          className="mt-24 grid gap-12 md:mt-28 md:grid-cols-[0.36fr_0.64fr] md:gap-16"
        >
          <motion.aside variants={fadeSoft} className="md:border-r md:border-white/[0.08] md:pr-9 lg:pr-12">
            <div className="space-y-9 md:space-y-0">
              {contactBlocks.map((block, index) => (
                <div
                  key={block.title}
                  className="grid grid-cols-[56px_1fr] gap-5 border-white/[0.08] pb-9 md:border-b md:pt-9 first:md:pt-2 last:md:border-b-0"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[rgb(var(--ei-soft-lavender-rgb)/0.18)] text-[rgb(var(--ei-soft-lavender-rgb)/0.82)] shadow-[inset_0_0_24px_rgb(var(--ei-aurora-blue-rgb)/0.035)] transition-colors duration-500 hover:border-white/25 hover:text-white">
                    <ContactIcon name={block.icon} />
                  </span>
                  <div>
                    <h2 className="font-mono text-[10px] font-medium uppercase tracking-[0.24em] text-white/78">
                      {block.title}
                    </h2>
                    <div className="mt-5 space-y-2 font-structural text-[0.95rem] leading-[1.45] text-white/58">
                      {block.lines.map((line, lineIndex) => (
                        <p key={`${block.title}-${lineIndex}`} className={index === 2 ? 'max-w-[26ch] leading-[1.7]' : ''}>
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.aside>

          <motion.div variants={fadeSoft}>
            {formState === 'success' ? (
              <div className="min-h-[420px] border border-white/[0.08] bg-white/[0.015] px-8 py-16 text-center backdrop-blur-sm md:px-14">
                <p className="font-editorial text-[clamp(2rem,4vw,3.4rem)] leading-tight text-white/88">
                  Thank you. Your message has been received.
                </p>
                <p className="mx-auto mt-6 max-w-[360px] font-structural text-[0.98rem] leading-[1.8] text-white/55">
                  I will be in touch shortly with a considered response.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-9">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-3">
                    <label htmlFor="name" className="ei-form-label">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="ei-form-input"
                      placeholder="Your name"
                    />
                  </div>

                  <div className="space-y-3">
                    <label htmlFor="email" className="ei-form-label">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="ei-form-input"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label htmlFor="exploration" className="ei-form-label">What are you exploring?</label>
                  <select
                    id="exploration"
                    name="exploration"
                    value={formData.exploration}
                    onChange={handleChange}
                    className="ei-form-select"
                  >
                    <option value="">Select an option</option>
                    {explorationOptions.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-3">
                  <label htmlFor="message" className="ei-form-label">Tell me about what you are trying to express</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="ei-form-textarea"
                    placeholder="Describe your project, your questions, or what feels unclear..."
                  />
                </div>

                <div className="space-y-3">
                  <label htmlFor="budget" className="ei-form-label">Budget Range (optional)</label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="ei-form-select"
                  >
                    <option value="">Select an option</option>
                    {budgetOptions.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-6 pt-1 sm:flex-row sm:items-center">
                  <button
                    type="submit"
                    disabled={formState === 'submitting'}
                    className="ei-gradient-border-btn-refined min-h-[58px] w-full bg-[linear-gradient(to_bottom,rgb(var(--ei-deep-indigo-rgb)/0.30),rgb(var(--ei-void-black-rgb)/0.78))] px-10 py-5 font-structural text-[11px] font-medium uppercase tracking-[0.22em] text-white/86 transition-all duration-700 hover:-translate-y-px hover:text-white disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
                  >
                    {formState === 'submitting' ? 'Sending...' : 'Send Message'}
                  </button>

                  <p className="flex max-w-[260px] items-start gap-3 font-structural text-[0.82rem] leading-[1.65] text-white/48">
                    <span className="mt-0.5 text-white/52">
                      <ContactIcon name="lock" />
                    </span>
                    Your information is kept private and never shared.
                  </p>
                </div>
              </form>
            )}
          </motion.div>
        </motion.section>

        <motion.section
          variants={fadeSoft}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT.loose}
          className="mt-20 overflow-hidden border border-white/[0.08] bg-[linear-gradient(135deg,rgb(var(--ei-deep-indigo-rgb)/0.18),rgb(var(--ei-void-black-rgb)/0.62)_48%,rgb(var(--ei-luxe-violet-rgb)/0.055))] shadow-[0_24px_90px_rgb(var(--ei-void-black-rgb)/0.36)] backdrop-blur-sm"
        >
          <div className="grid gap-8 p-7 md:grid-cols-[0.34fr_0.66fr] md:items-center md:p-9 lg:p-10">
            <div className="relative min-h-[160px] overflow-hidden rounded-[10px] md:min-h-[150px]">
              <img
                src={sessionImage}
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-72"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgb(var(--ei-void-black-rgb)/0.10),rgb(var(--ei-void-black-rgb)/0.58))]" />
            </div>

            <div className="grid gap-7 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/48">
                  Prefer a quick chat?
                </span>
                <h2 className="mt-4 font-editorial text-[clamp(2rem,3vw,3.1rem)] leading-tight text-white/88">
                  Book a session
                </h2>
                <p className="mt-4 max-w-[430px] font-structural text-[0.98rem] leading-[1.75] text-white/56">
                  Schedule a focused call to explore your project and see if we're a good fit.
                </p>
              </div>

              <Link
                to="/sessions"
                className="group inline-flex items-center gap-3 font-mono text-[10px] font-medium uppercase tracking-[0.22em] text-white/78 transition-colors duration-500 hover:text-white"
              >
                View session options
                <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </motion.section>
      </div>
    </PageShell>
  );
}
