import { useState, type ChangeEvent, type FormEvent, type ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { EchoSelect } from '@/components/ui/EchoSelect';
import { motion } from 'framer-motion';
import { PageShell } from '@/components/system';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/Button';
import nebulaDesktop from '@/assets/imagery/hero/contact-hero.png';
import nebulaMobile from '@/assets/imagery/hero/contact-hero-mobile.png';
import digitalNebulaBookSession from '@/assets/imagery/sections/book-session-bg.png';
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
      <a key="email" href="mailto:hello@echoin.ink" className="text-white/78 hover:text-white/95 transition-colors duration-500">
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

      <div className="relative z-10 pb-24 md:pb-32">
        <motion.section
          variants={staggerContainer(STAGGER.cinematic, 0)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT.loose}
          className="relative flex min-h-[48vh] items-center overflow-hidden pt-16 sm:pt-20 md:min-h-[78vh] md:pt-20 lg:min-h-[82vh]"
        >
          <picture className="absolute inset-0 z-0 block" aria-hidden="true">
            <source media="(min-width: 768px)" srcSet={nebulaDesktop} />
            <img
              src={nebulaMobile}
              alt=""
              className="h-full w-full object-cover object-center saturate-[0.84] md:object-[72%_50%]"
              fetchPriority="high"
            />
          </picture>

          <div
            aria-hidden="true"
            className="absolute inset-0 z-[1] pointer-events-none"
            style={{
              background:
                'linear-gradient(180deg, rgba(6, 8, 18, 0.15) 0%, rgba(6, 8, 18, 0.45) 100%)',
            }}
          />

          <div
            aria-hidden="true"
            className="absolute inset-0 z-[1] pointer-events-none"
            style={{
              background:
                'linear-gradient(90deg, transparent 0%, transparent 44%, rgb(var(--ei-void-black-rgb) / 0.16) 100%)',
            }}
          />

          <div
            aria-hidden="true"
            className="absolute inset-0 z-[2] pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse 54% 62% at 20% 48%, rgb(var(--ei-void-black-rgb) / 0.54) 0%, rgb(var(--ei-void-black-rgb) / 0.34) 42%, transparent 72%), linear-gradient(90deg, rgb(var(--ei-void-black-rgb) / 0.32) 0%, transparent 54%)',
            }}
          />

          <div
            aria-hidden="true"
            className="absolute bottom-0 left-0 right-0 z-[3] h-[20vh] pointer-events-none"
            style={{
              background:
                'linear-gradient(to bottom, transparent 0%, rgb(var(--ei-void-black-rgb) / 0.34) 70%, var(--ei-void-black) 100%)',
            }}
          />

          <Container size="xl" className="relative z-10">
            <div className="max-w-[680px]">
              <motion.div variants={driftUp} className="max-w-[680px] text-left md:pl-10 md:-translate-y-[2vh] lg:pl-14">
                <div className="mb-3 flex items-center gap-4 md:mb-5">
                  <span className="font-structural text-[11px] uppercase tracking-[0.2em] text-white/60">
                    Contact
                  </span>
                  <div
                    className="h-px w-10 shrink-0 rounded-full shadow-[0_0_12px_rgb(var(--ei-aurora-blue-rgb)/0.45)]"
                    style={{
                      background:
                        'linear-gradient(90deg, rgb(var(--ei-deep-indigo-rgb) / 0.15) 0%, rgb(var(--ei-aurora-blue-rgb) / 0.95) 100%)',
                    }}
                  />
                </div>

                <h1
                  className="font-editorial max-w-[680px] pt-8 text-[2.25rem] leading-[1.06] tracking-tight text-white/92 max--md:leading-[1.12] md:pt-12 md:text-[3.1rem] lg:text-[3.7rem]"
                  style={{
                    textShadow: '0 0 90px rgb(var(--ei-luxe-violet-rgb) / 0.08)',
                  }}
                >
                  Let's build <span className="inline-flex flex-wrap items-baseline gap-x-[0.14em] md:flex-nowrap md:whitespace-nowrap">something <em className="font-normal italic text-[rgb(var(--ei-soft-lavender-rgb)/0.9)]">meaningful.</em></span>
                </h1>

                <p
                  className="mt-5 max-w-[42ch] font-structural text-[14px] leading-[1.65] text-white/84 md:mt-6 md:max-w-[46ch] md:text-[15px]"
                  style={{ letterSpacing: '0.005em' }}
                >
                  Share a little about your project and I'll get back to you within two days.
                </p>
              </motion.div>
            </div>
          </Container>
        </motion.section>

        <Container size="xl" className="relative z-10">
        <motion.section
          variants={staggerContainer(STAGGER.cinematic, 0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT.loose}
          className="mx-auto mt-8 grid max-w-[1180px] gap-12 md:mt-16 md:grid-cols-[0.36fr_0.64fr] md:gap-16 lg:mt-20"
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
                    <div className="mt-5 space-y-2 font-structural text-[0.95rem] leading-[1.45] text-white/64">
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
                  <EchoSelect
  id="exploration"
  name="exploration"
  value={formData.exploration}
  onChange={handleChange}
  options={explorationOptions}
  placeholder="Select an option"
/>
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
                  <EchoSelect
  id="budget"
  name="budget"
  value={formData.budget}
  onChange={handleChange}
  options={budgetOptions}
  placeholder="Select an option"
/>
                </div>

                <div className="flex flex-col gap-6 pt-1 sm:flex-row sm:items-center">
                  <Button
                    type="submit"
                    variant="primary"
                    disabled={formState === 'submitting'}
                    className="min-h-[58px] w-full sm:w-auto border-white/[0.18] bg-[linear-gradient(to_bottom,rgb(var(--ei-deep-indigo-rgb)/0.9),rgb(var(--ei-void-black-rgb)/0.94))] text-white/96 hover:border-white/[0.28] hover:bg-[linear-gradient(to_bottom,rgb(var(--ei-deep-indigo-rgb)/0.92),rgb(var(--ei-void-black-rgb)/0.96))] focus-visible:ring-[rgb(var(--ei-aurora-blue-rgb)/0.36)] hover:shadow-[0_10px_40px_rgb(var(--ei-aurora-blue-rgb)/0.08)] disabled:opacity-80"
                  >
                    {formState === 'submitting' ? 'Sending...' : 'Send Message'}
                  </Button>

                  <p className="flex max-w-[260px] items-start gap-3 font-structural text-[0.82rem] leading-[1.65] text-white/60">
                    <span className="mt-0.5 text-white/65">
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
  className="relative mx-auto mt-12 min-h-[360px] max-w-[1180px] overflow-hidden rounded-[10px] border border-white/[0.08] bg-cover bg-center bg-no-repeat shadow-[inset_0_1px_0_rgb(var(--ei-ice-white-rgb)/0.05),0_24px_90px_rgb(var(--ei-void-black-rgb)/0.36)] md:mt-14 md:min-h-[390px]"
  style={{
    backgroundImage: `url(${digitalNebulaBookSession})`,
  }}
>
  <div
    aria-hidden="true"
    className="absolute inset-0"
    style={{
      background:
        'linear-gradient(90deg, rgba(6, 8, 18, 0.92) 0%, rgba(6, 8, 18, 0.80) 35%, rgba(6, 8, 18, 0.48) 100%)',
    }}
  />

  <div
    aria-hidden="true"
    className="absolute inset-0"
    style={{
      background:
        'radial-gradient(ellipse 54% 65% at 20% 50%, rgb(var(--ei-deep-indigo-rgb) / 0.18) 0%, transparent 70%), radial-gradient(ellipse 42% 48% at 72% 45%, rgb(var(--ei-luxe-violet-rgb) / 0.12) 0%, transparent 68%)',
    }}
  />

  <div className="relative z-10 flex min-h-[360px] flex-col justify-center gap-9 p-7 md:min-h-[390px] md:max-w-[620px] md:p-12 lg:p-14">
      <div>
        <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/75">
          Prefer a quick chat?
        </span>

        <h2 className="mt-4 font-editorial text-[clamp(2rem,3vw,3.1rem)] leading-tight text-white/92">
          Book a session
        </h2>

        <p className="mt-4 max-w-[430px] font-structural text-[0.98rem] leading-[1.75] text-white/86">
          Schedule a focused call to explore your project and see if we're a good fit.
        </p>
      </div>

      <Button
        to="/sessions"
        variant="secondary"
        className="min-h-[42px] gap-3 self-start px-5 py-3 border-white/[0.12] text-white/78 hover:text-white hover:border-white/[0.18]"
      >
        View session options
        <span aria-hidden="true">→</span>
      </Button>
  </div>
</motion.section>
        </Container>
      </div>
    </PageShell>
  );
}
