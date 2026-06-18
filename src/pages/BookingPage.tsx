import {
  useMemo,
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

import { Container } from "@/components/layout/Container";
import { PageShell } from "@/components/layout/PageShell";
import { Section } from "@/components/layout/Section";
import { CTASection } from "@/components/sections/CTASection";
import { Button } from "@/components/ui/Button";
import { EchoCard } from "@/components/ui/EchoCard";
import { EchoFormField } from "@/components/ui/EchoFormField";
import { EchoFormPanel } from "@/components/ui/EchoFormPanel";
import { EchoSelect } from "@/components/ui/EchoSelect";
import { EchoTextarea } from "@/components/ui/EchoTextarea";
import { IconWell } from "@/components/ui/IconWell";
import {
  OrbitalVisual,
  type OrbitalVariant,
} from "@/components/ui/OrbitalVisual";
import { SectionLabel } from "@/components/ui/SectionLabel";
import {
  blurEmergence,
  driftUp,
  fadeSoft,
  staggerContainer,
  STAGGER,
  VIEWPORT,
} from "@/lib/motion-cinematic";

const steps = ["Session", "Time", "Details", "Confirm"] as const;

const timeSlots = ["9:30 am", "11:00 am", "1:30 pm", "3:00 pm"];

const contextOptions = [
  "Naming or language",
  "Identity direction",
  "Website or experience",
  "Offer or positioning",
  "Worldbuilding",
  "Something still taking shape",
];

const sessionFacts = [
  { label: "Duration", value: "60 minutes" },
  { label: "Format", value: "Private video session" },
  { label: "Recording", value: "Included for review" },
  { label: "Follow-up", value: "Written clarity notes" },
];

const afterBooking: Array<{
  title: string;
  description: string;
  icon: OrbitalVariant;
}> = [
  {
    title: "Confirm",
    description: "Your time and session details are gathered in one clear note.",
    icon: "haloGate",
  },
  {
    title: "Prepare",
    description: "Bring the question, tension, or fragment that needs attention.",
    icon: "threadBeacon",
  },
  {
    title: "Session",
    description: "We listen for the pattern and shape a direction you can trust.",
    icon: "focusDial",
  },
  {
    title: "Follow-up",
    description: "You receive the recording and a concise set of clarity notes.",
    icon: "signalBridge",
  },
];

type BookingFormData = {
  name: string;
  email: string;
  context: string;
  project: string;
  notes: string;
};

type BookingFieldEvent =
  | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  | {
      target: {
        name: string;
        value: string;
      };
    };

function getUpcomingWeekdays(count: number) {
  const days: Date[] = [];
  const cursor = new Date();
  cursor.setHours(12, 0, 0, 0);

  while (days.length < count) {
    cursor.setDate(cursor.getDate() + 1);
    const weekday = cursor.getDay();

    if (weekday !== 0 && weekday !== 6) {
      days.push(new Date(cursor));
    }
  }

  return days;
}

function formatDay(date: Date) {
  return new Intl.DateTimeFormat("en-NZ", {
    weekday: "short",
    day: "numeric",
    month: "short",
  }).format(date);
}

function formatLongDate(date: Date) {
  return new Intl.DateTimeFormat("en-NZ", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

export function BookingPage() {
  const availableDays = useMemo(() => getUpcomingWeekdays(5), []);
  const [activeStep, setActiveStep] = useState(0);
  const [selectedDay, setSelectedDay] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [formData, setFormData] = useState<BookingFormData>({
    name: "",
    email: "",
    context: "",
    project: "",
    notes: "",
  });

  const selectedDateLabel = selectedDay ? formatLongDate(selectedDay) : "";
  const hasDetails = Boolean(
    formData.name.trim() &&
      formData.email.trim() &&
      formData.context &&
      formData.project.trim(),
  );

  function handleChange(event: BookingFieldEvent) {
    setFormData((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  }

  function advanceStep() {
    setActiveStep((current) => Math.min(current + 1, steps.length - 1));
  }

  function returnToStep(step: number) {
    setActiveStep(step);
    document
      .getElementById("booking-flow")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function handleDetailsSubmit(event: FormEvent) {
    event.preventDefault();

    if (hasDetails) {
      advanceStep();
    }
  }

  function handlePrototypeConfirmation() {
    setIsConfirmed(true);
    document
      .getElementById("booking-flow")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <PageShell
      atmosphere="sessions"
      withTopSpacing={false}
      className="ei-booking-page"
    >
      <Helmet>
        <title>Book an Echo Session — Echo in Ink</title>
        <meta
          name="description"
          content="Choose a time for a private Echo Session: a calm, one-to-one creative direction room for clearer language, identity, and next steps."
        />
      </Helmet>

      <Section spacing="none" className="ei-booking-intro">
        <Container size="xl" className="relative z-10">
          <motion.div
            variants={staggerContainer(STAGGER.loose, 0)}
            initial="hidden"
            animate="visible"
            className="mx-auto max-w-[1180px] ei-booking-intro-grid"
          >
            <motion.div variants={driftUp}>
              <SectionLabel label="Echo Session booking" />
              <motion.h1 variants={blurEmergence}>
                Choose a time to clarify the signal.
              </motion.h1>
              <motion.p variants={fadeSoft}>
                A private working session for the idea, question, or creative
                direction that needs a quieter room.
              </motion.p>
            </motion.div>

            <motion.dl variants={fadeSoft} className="ei-booking-meta">
              <div>
                <dt>Duration</dt>
                <dd>60 minutes</dd>
              </div>
              <div>
                <dt>Session</dt>
                <dd>Recorded for review</dd>
              </div>
              <div>
                <dt>Afterward</dt>
                <dd>Follow-up notes included</dd>
              </div>
            </motion.dl>
          </motion.div>
        </Container>
      </Section>

      <Section
        id="booking-flow"
        spacing="none"
        className="ei-booking-flow-section"
      >
        <Container size="xl" className="relative z-10">
          <motion.div
            variants={staggerContainer(STAGGER.loose, 0)}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT.normal}
            className="mx-auto max-w-[1180px] ei-booking-layout"
          >
            <motion.aside variants={driftUp}>
              <EchoCard
                variant="offer"
                padding="lg"
                className="ei-booking-summary"
              >
                <IconWell size="lg" tone="violet" orbital glow>
                  <OrbitalVisual variant="synthesisStar" size={56} />
                </IconWell>
                <span className="ei-booking-summary-kicker">
                  One-to-one creative direction
                </span>
                <h2>Echo Session</h2>
                <p>
                  For founders, artists, writers, and makers who need clearer
                  language, structure, or emotional direction.
                </p>

                <dl>
                  {sessionFacts.map((fact) => (
                    <div key={fact.label}>
                      <dt>{fact.label}</dt>
                      <dd>{fact.value}</dd>
                    </div>
                  ))}
                </dl>

                <div className="ei-booking-summary-note">
                  <span>Best for</span>
                  <p>
                    A live project, unresolved creative question, naming
                    decision, or direction that feels difficult to articulate.
                  </p>
                </div>
              </EchoCard>
            </motion.aside>

            <motion.div variants={fadeSoft} className="ei-booking-workspace">
              <nav aria-label="Booking progress" className="ei-booking-stepper">
                <ol>
                  {steps.map((step, index) => (
                    <li
                      key={step}
                      data-active={activeStep === index ? "true" : "false"}
                      data-complete={
                        activeStep > index || isConfirmed ? "true" : "false"
                      }
                    >
                      <button
                        type="button"
                        onClick={() =>
                          index < activeStep && !isConfirmed
                            ? returnToStep(index)
                            : undefined
                        }
                        disabled={index > activeStep || isConfirmed}
                        aria-current={activeStep === index ? "step" : undefined}
                      >
                        <span>{String(index + 1).padStart(2, "0")}</span>
                        {step}
                      </button>
                    </li>
                  ))}
                </ol>
              </nav>

              <div className="ei-booking-step-region" aria-live="polite">
                {isConfirmed ? (
                  <div className="ei-booking-confirmed">
                    <IconWell size="lg" tone="blue" orbital glow>
                      <OrbitalVisual variant="haloGate" size={56} />
                    </IconWell>
                    <SectionLabel
                      label="Prototype confirmation"
                      align="center"
                      rule="none"
                    />
                    <h2>Your session is held in the signal.</h2>
                    <p>
                      This front-end preview has saved nothing and has not sent
                      an email. Once scheduling is connected, this state will
                      confirm the booking and deliver the preparation note.
                    </p>
                    <div className="ei-booking-confirmed-summary">
                      <span>{selectedDateLabel}</span>
                      <strong>{selectedTime} · Auckland time</strong>
                    </div>
                    <Button
                      type="button"
                      variant="secondary"
                      onClick={() => {
                        setIsConfirmed(false);
                        setActiveStep(0);
                      }}
                    >
                      Start again
                    </Button>
                  </div>
                ) : (
                  <>
                    {activeStep === 0 ? (
                      <div className="ei-booking-step">
                        <SectionLabel label="Step one" rule="none" />
                        <h2>Begin with the focused session.</h2>
                        <p>
                          The 60-minute Echo Session is the clearest starting
                          point. The conversation follows the work you bring,
                          without requiring a polished brief.
                        </p>

                        <button
                          type="button"
                          className="ei-booking-session-choice"
                          data-selected="true"
                          aria-pressed="true"
                        >
                          <span>
                            <strong>Echo Session</strong>
                            <small>60 minutes · Private video room</small>
                          </span>
                          <span>Selected</span>
                        </button>

                        <div className="ei-booking-step-actions">
                          <Button type="button" onClick={advanceStep}>
                            Choose a time
                          </Button>
                        </div>
                      </div>
                    ) : null}

                    {activeStep === 1 ? (
                      <div className="ei-booking-step">
                        <SectionLabel label="Step two" rule="none" />
                        <h2>Find a calm point in the week.</h2>
                        <p>
                          Preview availability is shown in Auckland time. Live
                          availability will replace these sample slots when the
                          scheduling service is connected.
                        </p>

                        <div className="ei-booking-time-layout">
                          <div>
                            <span className="ei-booking-field-label">
                              Available days
                            </span>
                            <div className="ei-booking-day-grid">
                              {availableDays.map((day) => {
                                const isSelected =
                                  selectedDay?.toDateString() ===
                                  day.toDateString();

                                return (
                                  <button
                                    key={day.toISOString()}
                                    type="button"
                                    aria-pressed={isSelected}
                                    data-selected={
                                      isSelected ? "true" : "false"
                                    }
                                    onClick={() => {
                                      setSelectedDay(day);
                                      setSelectedTime("");
                                    }}
                                  >
                                    {formatDay(day)}
                                  </button>
                                );
                              })}
                            </div>
                          </div>

                          <div>
                            <span className="ei-booking-field-label">
                              Available times
                            </span>
                            {selectedDay ? (
                              <div className="ei-booking-slot-grid">
                                {timeSlots.map((time) => (
                                  <button
                                    key={time}
                                    type="button"
                                    aria-pressed={selectedTime === time}
                                    data-selected={
                                      selectedTime === time ? "true" : "false"
                                    }
                                    onClick={() => setSelectedTime(time)}
                                  >
                                    {time}
                                  </button>
                                ))}
                              </div>
                            ) : (
                              <div className="ei-booking-empty-slots">
                                Choose a day to reveal its sample times.
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="ei-booking-step-actions">
                          <Button
                            type="button"
                            variant="tertiary"
                            onClick={() => returnToStep(0)}
                          >
                            Back
                          </Button>
                          <Button
                            type="button"
                            disabled={!selectedDay || !selectedTime}
                            onClick={advanceStep}
                          >
                            Add your details
                          </Button>
                        </div>
                      </div>
                    ) : null}

                    {activeStep === 2 ? (
                      <div className="ei-booking-step">
                        <SectionLabel label="Step three" rule="none" />
                        <h2>Tell me what is arriving with you.</h2>
                        <p>
                          A little context makes the room more useful. Fragments
                          are welcome; you do not need to solve the question
                          before the session.
                        </p>

                        <form
                          onSubmit={handleDetailsSubmit}
                          className="ei-booking-details-form"
                        >
                          <div className="ei-booking-form-row">
                            <EchoFormField
                              type="text"
                              id="booking-name"
                              name="name"
                              label="Name"
                              value={formData.name}
                              onChange={handleChange}
                              required
                              autoComplete="name"
                              placeholder="Your name"
                            />
                            <EchoFormField
                              type="email"
                              id="booking-email"
                              name="email"
                              label="Email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                              autoComplete="email"
                              placeholder="your@email.com"
                            />
                          </div>

                          <EchoSelect
                            id="booking-context"
                            name="context"
                            label="What would you like to clarify?"
                            value={formData.context}
                            onChange={handleChange}
                            options={contextOptions}
                            placeholder="Choose the closest signal"
                            required
                          />

                          <EchoFormField
                            type="text"
                            id="booking-project"
                            name="project"
                            label="Project or context"
                            value={formData.project}
                            onChange={handleChange}
                            required
                            placeholder="A short name or description"
                          />

                          <EchoTextarea
                            id="booking-notes"
                            name="notes"
                            label="Question, tension, or useful notes"
                            value={formData.notes}
                            onChange={handleChange}
                            rows={5}
                            placeholder="What feels unresolved, alive, or difficult to name?"
                            hint="Optional. References and preparation material can be shared after booking."
                          />

                          <div className="ei-booking-step-actions">
                            <Button
                              type="button"
                              variant="tertiary"
                              onClick={() => returnToStep(1)}
                            >
                              Back
                            </Button>
                            <Button type="submit" disabled={!hasDetails}>
                              Review booking
                            </Button>
                          </div>
                        </form>
                      </div>
                    ) : null}

                    {activeStep === 3 ? (
                      <div className="ei-booking-step">
                        <SectionLabel label="Step four" rule="none" />
                        <h2>Review the shape of the session.</h2>
                        <p>
                          Nothing is charged or sent from this prototype. This
                          is the final review state that a scheduling
                          integration can later submit.
                        </p>

                        <dl className="ei-booking-review">
                          <div>
                            <dt>Session</dt>
                            <dd>Echo Session · 60 minutes</dd>
                          </div>
                          <div>
                            <dt>Time</dt>
                            <dd>
                              {selectedDateLabel}
                              <span>{selectedTime} · Auckland time</span>
                            </dd>
                          </div>
                          <div>
                            <dt>For</dt>
                            <dd>
                              {formData.name}
                              <span>{formData.email}</span>
                            </dd>
                          </div>
                          <div>
                            <dt>Focus</dt>
                            <dd>
                              {formData.context}
                              <span>{formData.project}</span>
                            </dd>
                          </div>
                        </dl>

                        <div className="ei-booking-prototype-note">
                          <OrbitalVisual variant="haloGate" size={26} />
                          <p>
                            Prototype only: confirming below does not reserve a
                            real time, process payment, or send email.
                          </p>
                        </div>

                        <div className="ei-booking-step-actions">
                          <Button
                            type="button"
                            variant="tertiary"
                            onClick={() => returnToStep(2)}
                          >
                            Edit details
                          </Button>
                          <Button
                            type="button"
                            onClick={handlePrototypeConfirmation}
                          >
                            Preview confirmation
                          </Button>
                        </div>
                      </div>
                    ) : null}
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      <Section spacing="none" className="ei-booking-after">
        <Container size="xl" className="relative z-10">
          <motion.div
            variants={staggerContainer(STAGGER.normal, 0)}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT.normal}
            className="mx-auto max-w-[1180px]"
          >
            <motion.div variants={driftUp} className="ei-booking-section-heading">
              <SectionLabel label="What happens next" index="01" />
              <h2>A considered path from booking to clarity.</h2>
            </motion.div>

            <div className="ei-booking-after-grid">
              {afterBooking.map((item, index) => (
                <motion.div key={item.title} variants={driftUp}>
                  <EchoCard
                    variant="index"
                    padding="md"
                    className="ei-booking-after-card"
                  >
                    <IconWell
                      size="sm"
                      tone={index === 3 ? "blue" : "violet"}
                    >
                      <OrbitalVisual variant={item.icon} size={28} />
                    </IconWell>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </EchoCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </Section>

      <Section spacing="none" className="ei-booking-preparation">
        <Container size="xl" className="relative z-10">
          <motion.div className="mx-auto max-w-[1180px]">
            <EchoFormPanel
              tone="quiet"
              splitAt="md"
              aside={
                <div className="ei-booking-preparation-quote">
                  <IconWell size="lg" tone="magenta" orbital glow>
                    <OrbitalVisual variant="innerTide" size={56} />
                  </IconWell>
                  <SectionLabel label="Preparation note" rule="none" />
                  <blockquote>
                    Arrive with the question,
                    <br />
                    not the answer.
                  </blockquote>
                </div>
              }
            >
              <div className="ei-booking-included">
                <SectionLabel label="Included with every session" rule="none" />
                <h2>The conversation stays useful after the room closes.</h2>
                <ul>
                  <li>Recorded for your private review</li>
                  <li>Follow-up notes with the clearest signals and next steps</li>
                  <li>A focused format designed for clarity, not performance</li>
                </ul>
              </div>
            </EchoFormPanel>
          </motion.div>
        </Container>
      </Section>

      <CTASection
        variant="editorialInvitation"
        eyebrow="Before you choose"
        heading="Need more context on the room?"
        body="Explore the full Echo Sessions offer, process, and fit before returning to book."
        actions={
          <Button to="/sessions" variant="secondary">
            View Echo Sessions
          </Button>
        }
        className="ei-booking-closing"
      />
    </PageShell>
  );
}
