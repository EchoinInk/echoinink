import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform, useSpring } from 'framer-motion';
import {
  GlowField,
  EchoRing,
  GrainOverlay,
  VerticalBeam,
  ContourField,
  AtmosphericBloom,
} from './AtmosphericSystem';

import { EASE_CINEMATIC as EASE, DURATION, VIEWPORT, STAGGER } from '@/lib/motion-cinematic';

const vp = (margin = '-40px') => ({ once: true, margin });

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 5 },
  whileInView: { opacity: 1, y: 0 } as { opacity: number; y: number },
  viewport: VIEWPORT.normal,
  transition: { duration: DURATION.slower, ease: EASE, delay },
});

const envFade = (delay = 0) => ({
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: VIEWPORT.loose,
  transition: { duration: DURATION.slower, ease: EASE, delay },
});

const headFade = (delay = 0) => ({
  initial: { opacity: 0, y: 8 },
  whileInView: { opacity: 1, y: 0 },
  viewport: VIEWPORT.normal,
  transition: { duration: DURATION.slower, ease: EASE, delay },
});

const labelFade = (delay = 0) => ({
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: VIEWPORT.normal,
  transition: { duration: DURATION.normal, ease: EASE, delay },
});

function Separator() {
  return (
    <div
      className="w-full h-px"
      style={{
        background:
          'linear-gradient(90deg, transparent, rgb(var(--ei-ice-white-rgb) / 0.06) 25%, rgb(var(--ei-ice-white-rgb) / 0.06) 75%, transparent)',
      }}
    />
  );
}

const GRAIN = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23g)'/%3E%3C/svg%3E")`;

const TINTS = {
  violet:  'radial-gradient(ellipse 58% 55% at 36% 46%, rgb(113, 7, 234 / 0.20) 0%, transparent 68%)',
  aqua:    'radial-gradient(ellipse 55% 50% at 63% 37%, rgb(73, 133, 253 / 0.16) 0%, transparent 65%)',
  pink:    'radial-gradient(ellipse 50% 55% at 44% 52%, rgb(221, 18, 203 / 0.17) 0%, transparent 66%)',
  indigo:  'radial-gradient(ellipse 58% 52% at 52% 42%, rgb(11, 13, 42 / 0.18) 0%, transparent 70%)',
  neutral: 'radial-gradient(ellipse 50% 50% at 50% 45%, rgb(227, 216, 253 / 0.07) 0%, transparent 70%)',
} as const;

function ImagePlaceholder({
  aspect = 'aspect-[16/9]',
  label = '',
  tint = 'violet' as keyof typeof TINTS,
}: {
  aspect?: string;
  label?: string;
  tint?: keyof typeof TINTS;
}) {
  const prefersReduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const rawY = useTransform(scrollYProgress, [0, 1], prefersReduced ? [0, 0] : [14, -14]);
  const y = useSpring(rawY, { stiffness: 30, damping: 42, restDelta: 0.001 });

  return (
    <div ref={ref} className={`relative w-full ${aspect} overflow-hidden`} style={{ backgroundColor: 'var(--ei-void)' }}>
      {/* Parallax atmospheric layers */}
      <motion.div
        className="pointer-events-none"
        style={{ position: 'absolute', top: '-5%', left: '-3%', right: '-3%', bottom: '-5%', y }}
      >
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 85% 75% at 50% 58%, var(--ei-midnight) 0%, var(--ei-void) 55%, var(--ei-void) 100%)' }} />
        <div className="absolute inset-0" style={{ background: TINTS[tint] }} />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 30% 34% at 82% 16%, rgb(var(--ei-ice-white-rgb) / 0.03) 0%, transparent 62%)' }} />
        <div className="absolute inset-0" style={{ backgroundImage: GRAIN, backgroundRepeat: 'repeat', backgroundSize: '200px 200px', opacity: 0.055, mixBlendMode: 'overlay' }} />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 86% 82% at 50% 50%, transparent 30%, rgb(5, 3, 11 / 0.80) 100%)' }} />
        <div className="absolute bottom-0 left-0 right-0 h-2/5" style={{ background: 'linear-gradient(to top, rgb(11, 13, 42 / 0.55), transparent)' }} />
      </motion.div>
      {/* Label — fixed, outside parallax */}
      {label && (
        <div className="absolute bottom-0 left-0 p-4 md:p-5">
          <span className="font-structural text-[8px] tracking-[0.35em] uppercase text-white/30">{label}</span>
        </div>
      )}
    </div>
  );
}

function OriginPulseAtmosphere() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(155deg, rgb(11, 13, 42 / 0.45) 0%, rgb(5, 3, 11 / 0.22) 48%, transparent 80%)' }} />
      <GlowField
        style={{ top: '-8%', left: '-12%', width: 'clamp(560px, 74vw, 980px)', height: 'clamp(560px, 74vw, 980px)', transformOrigin: '40% 44%' }}
        gradient="radial-gradient(ellipse 50% 47% at 40% 44%, rgb(11, 13, 42 / 0.14) 0%, rgb(113, 7, 234 / 0.055) 44%, transparent 70%)"
        blur={65}
        anim={{ opacity: [0.68, 1, 0.68], scale: [1, 1.038, 1] }}
        duration={24}
      />
      <GlowField
        style={{ top: '-20%', left: '-20%', width: 'clamp(700px, 96vw, 1280px)', height: 'clamp(700px, 96vw, 1280px)', transformOrigin: '42% 44%' }}
        gradient="radial-gradient(ellipse 46% 44% at 42% 44%, transparent 40%, rgb(11, 13, 42 / 0.065) 57%, transparent 72%)"
        blur={55}
        anim={{ opacity: [0.45, 0.85, 0.45], scale: [0.97, 1.025, 0.97] }}
        duration={32} delay={6}
      />
      <VerticalBeam
        left="calc(30% - 44px)"
        width={88}
        gradient="linear-gradient(180deg, transparent 0%, rgb(113, 7, 234 / 0.055) 18%, rgb(113, 7, 234 / 0.095) 50%, rgb(113, 7, 234 / 0.055) 82%, transparent 100%)"
      />
      <GrainOverlay range={[0.016, 0.040]} duration={9} delay={2} />
    </div>
  );
}

function CognitiveLandscapeAtmosphere() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(138deg, rgb(11, 13, 42 / 0.42) 0%, rgb(5, 3, 11 / 0.16) 52%, rgb(11, 13, 42 / 0.10) 100%)' }} />
      <GlowField
        style={{ inset: 0 }}
        gradient="radial-gradient(ellipse 52% 58% at 78% 54%, rgb(113, 7, 234 / 0.065) 0%, transparent 68%)"
        blur={40}
      />
      <ContourField
        viewBox="0 0 1000 600"
        paths={[
          { d: 'M -40 228 Q 240 196 490 238 T 1040 212', stroke: 'rgb(227, 216, 253 / 0.052)', sw: 1 },
          { d: 'M -40 332 Q 300 290 558 334 T 1040 314', stroke: 'rgb(227, 216, 253 / 0.042)', sw: 0.7 },
          { d: 'M -40 418 Q 185 388 448 430 T 1040 408', stroke: 'rgb(227, 216, 253 / 0.040)', sw: 0.6 },
        ]}
      />
      <GlowField
        style={{ top: '20%', right: '8%', width: 'clamp(200px, 26vw, 360px)', height: 'clamp(200px, 26vw, 360px)' }}
        gradient="radial-gradient(ellipse 55% 55% at 50% 50%, rgb(113, 7, 234 / 0.075) 0%, rgb(11, 13, 42 / 0.03) 55%, transparent 72%)"
        blur={44}
        anim={{ opacity: [0.65, 1, 0.65] }}
        duration={28}
      />
      <GlowField
        style={{ top: '48%', left: '15%', width: 'clamp(160px, 20vw, 280px)', height: 'clamp(160px, 20vw, 280px)' }}
        gradient="radial-gradient(ellipse 55% 55% at 50% 50%, rgb(11, 13, 42 / 0.058) 0%, transparent 70%)"
        blur={38}
        anim={{ opacity: [0.45, 0.82, 0.45] }}
        duration={36} delay={9}
      />
      <EchoRing
        style={{ top: '10%', right: '4%', width: 'clamp(260px, 34vw, 500px)', height: 'clamp(220px, 28vw, 420px)', transformOrigin: '50% 50%' }}
        viewBox="0 0 400 320"
        rings={[
          { cx: 200, cy: 160, rx: 185, ry: 145, stroke: 'rgb(227, 216, 253 / 0.042)', sw: 0.8 },
          { cx: 200, cy: 160, rx: 145, ry: 112, stroke: 'rgb(227, 216, 253 / 0.032)', sw: 0.6 },
          { cx: 200, cy: 160, rx: 105, ry: 80,  stroke: 'rgb(227, 216, 253 / 0.024)', sw: 0.5 },
        ]}
        anim={{ opacity: [0.55, 0.95, 0.55], scale: [0.975, 1.028, 0.975] }}
        duration={34} delay={5}
        preserveAspect
      />
    </div>
  );
}

function BreathingIdentityAtmosphere() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      <GlowField
        style={{ top: '-5%', right: '-14%', width: 'clamp(420px, 58vw, 800px)', height: 'clamp(420px, 58vw, 800px)', transformOrigin: '60% 44%' }}
        gradient="radial-gradient(ellipse 54% 52% at 60% 44%, rgb(113, 7, 234 / 0.13) 0%, rgb(113, 7, 234 / 0.07) 35%, rgb(11, 13, 42 / 0.03) 60%, transparent 75%)"
        blur={55}
        anim={{ opacity: [0.72, 1, 0.72], scale: [1, 1.022, 1] }}
        duration={26}
      />
      <EchoRing
        style={{ top: '-12%', right: '-22%', width: 'clamp(580px, 78vw, 1060px)', height: 'clamp(580px, 78vw, 1060px)', transformOrigin: '60% 44%' }}
        viewBox="0 0 600 600"
        rings={[{ cx: 300, cy: 300, rx: 270, ry: 252, stroke: 'rgb(227, 216, 253 / 0.042)', sw: 0.8 }]}
        anim={{ opacity: [0.45, 0.82, 0.45], scale: [0.98, 1.018, 0.98] }}
        duration={38} delay={7}
      />
      <ContourField
        viewBox="0 0 1000 700"
        blur={0.8}
        paths={[
          { d: 'M 720 48 Q 850 42 930 118',  stroke: 'rgb(227, 216, 253 / 0.048)', sw: 0.7, cap: 'round' },
          { d: 'M 958 210 Q 985 310 920 408', stroke: 'rgb(227, 216, 253 / 0.040)', sw: 0.6, cap: 'round' },
          { d: 'M 640 30 Q 679 16 718 28',   stroke: 'rgb(227, 216, 253 / 0.040)', sw: 0.5, cap: 'round' },
        ]}
      />
    </div>
  );
}

function HumaneFrameworkAtmosphere() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(145deg, rgb(11, 13, 42 / 0.38) 0%, rgb(5, 3, 11 / 0.16) 55%, transparent 85%)' }} />
      <GlowField
        style={{ top: '5%', left: '-4%', width: 'clamp(200px, 28vw, 380px)', height: 'clamp(200px, 28vw, 380px)' }}
        gradient="radial-gradient(ellipse 55% 55% at 50% 50%, rgb(11, 13, 42 / 0.078) 0%, rgb(11, 13, 42 / 0.030) 55%, transparent 72%)"
        blur={48}
        anim={{ opacity: [0.60, 1, 0.60] }}
        duration={24}
      />
      <GlowField
        style={{ top: '8%', right: '-2%', width: 'clamp(200px, 26vw, 360px)', height: 'clamp(200px, 26vw, 360px)' }}
        gradient="radial-gradient(ellipse 55% 55% at 50% 50%, rgb(11, 13, 42 / 0.070) 0%, rgb(11, 13, 42 / 0.026) 55%, transparent 72%)"
        blur={44}
        anim={{ opacity: [0.45, 0.88, 0.45] }}
        duration={31} delay={6}
      />
      <GlowField
        style={{ bottom: '8%', right: '4%', width: 'clamp(180px, 24vw, 340px)', height: 'clamp(180px, 24vw, 340px)' }}
        gradient="radial-gradient(ellipse 55% 55% at 50% 50%, rgb(11, 13, 42 / 0.072) 0%, rgb(11, 13, 42 / 0.026) 55%, transparent 72%)"
        blur={46}
        anim={{ opacity: [0.55, 0.90, 0.55] }}
        duration={28} delay={16}
      />
      <ContourField
        viewBox="0 0 1000 700"
        blur={1.2}
        paths={[
          { d: 'M 220 195 Q 500 140 760 178', stroke: 'rgb(227, 216, 253 / 0.048)', sw: 0.8, cap: 'round' },
          { d: 'M 214 248 Q 148 420 218 568', stroke: 'rgb(227, 216, 253 / 0.040)', sw: 0.7, cap: 'round' },
          { d: 'M 768 228 Q 840 390 752 548', stroke: 'rgb(227, 216, 253 / 0.040)', sw: 0.7, cap: 'round' },
          { d: 'M 268 572 Q 500 620 748 554', stroke: 'rgb(227, 216, 253 / 0.044)', sw: 0.6, cap: 'round' },
        ]}
      />
    </div>
  );
}

function FragmentsAtmosphere() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      <GlowField
        style={{ top: '-5%', left: '-10%', width: 'clamp(500px, 68vw, 900px)', height: 'clamp(500px, 68vw, 900px)' }}
        gradient="radial-gradient(ellipse 55% 52% at 40% 46%, rgb(113, 7, 234 / 0.080) 0%, rgb(11, 13, 42 / 0.033) 52%, transparent 72%)"
        blur={68}
        anim={{ opacity: [0.60, 0.94, 0.60] }}
        duration={32}
      />
      <GlowField
        style={{ bottom: '15%', right: '-6%', width: 'clamp(280px, 38vw, 560px)', height: 'clamp(280px, 38vw, 560px)' }}
        gradient="radial-gradient(ellipse 55% 52% at 50% 50%, rgb(11, 13, 42 / 0.068) 0%, rgb(11, 13, 42 / 0.028) 52%, transparent 72%)"
        blur={62}
        anim={{ opacity: [0.48, 0.80, 0.48] }}
        duration={38} delay={10}
      />
      <div style={{ position: 'absolute', top: '46%', left: 0, right: 0, height: '12%', background: 'linear-gradient(180deg, transparent 0%, rgb(5, 3, 11 / 0.10) 50%, transparent 100%)', filter: 'blur(18px)' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 80% 72% at 50% 48%, transparent 40%, rgb(5, 3, 11 / 0.10) 72%, rgb(5, 3, 11 / 0.15) 100%)' }} />
      <GrainOverlay range={[0.016, 0.040]} duration={28} delay={5} size={180} />
    </div>
  );
}

function BecomingAtmosphere() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 28%, rgb(5, 3, 11 / 0.10) 100%)' }} />
      <AtmosphericBloom
        size="clamp(640px, 92vw, 1240px)"
        gradient="radial-gradient(ellipse 54% 50% at 50% 50%, rgb(113, 7, 234 / 0.092) 0%, rgb(11, 13, 42 / 0.036) 48%, transparent 72%)"
        blur={70}
        anim={{ opacity: [0.60, 1, 0.60], scale: [1, 1.024, 1] }}
        duration={30}
      />
      <GlowField
        style={{ bottom: '-8%', left: '-15%', right: '-15%', height: 'clamp(320px, 44vw, 640px)' }}
        gradient="radial-gradient(ellipse 88% 48% at 50% 82%, rgb(113, 7, 234 / 0.075) 0%, rgb(11, 13, 42 / 0.030) 50%, transparent 74%)"
        blur={68}
        anim={{ opacity: [0.50, 0.82, 0.50] }}
        duration={38} delay={8}
      />
      <EchoRing
        style={{ top: '50%', left: '50%', width: 'clamp(380px, 54vw, 760px)', height: 'clamp(380px, 54vw, 760px)', transform: 'translate(-50%, -50%)', transformOrigin: 'center center' }}
        viewBox="0 0 600 600"
        rings={[
          { cx: 300, cy: 300, rx: 268, ry: 268, stroke: 'rgb(227, 216, 253 / 0.042)', sw: 0.8 },
          { cx: 300, cy: 300, rx: 210, ry: 210, stroke: 'rgb(227, 216, 253 / 0.032)', sw: 0.6 },
          { cx: 300, cy: 300, rx: 152, ry: 152, stroke: 'rgb(227, 216, 253 / 0.024)', sw: 0.5 },
        ]}
        anim={{ opacity: [0.48, 0.88, 0.48], scale: [0.974, 1.022, 0.974] }}
        duration={36} delay={5}
      />
      <GrainOverlay range={[0.018, 0.042]} duration={26} delay={3} size={120} />
    </div>
  );
}

function HeldAtmosphere() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgb(11, 13, 42 / 0.28) 0%, transparent 62%)' }} />
      <GlowField
        style={{ top: '-2%', left: '-8%', width: 'clamp(500px, 65vw, 880px)', height: 'clamp(500px, 65vw, 880px)' }}
        gradient="radial-gradient(ellipse 52% 50% at 44% 46%, rgb(113, 7, 234 / 0.068) 0%, rgb(11, 13, 42 / 0.028) 50%, transparent 72%)"
        blur={75}
        anim={{ opacity: [0.65, 1, 0.65] }}
        duration={38}
      />
      <GlowField
        style={{ top: '20%', left: '5%', width: 'clamp(380px, 52vw, 720px)', height: 'clamp(380px, 52vw, 720px)' }}
        gradient="radial-gradient(ellipse 55% 52% at 48% 50%, rgb(11, 13, 42 / 0.048) 0%, rgb(11, 13, 42 / 0.018) 52%, transparent 72%)"
        blur={62}
        anim={{ opacity: [0.55, 0.85, 0.55] }}
        duration={40} delay={12}
      />
      <EchoRing
        style={{ inset: 0 }}
        viewBox="0 0 1000 800"
        rings={[{ cx: 360, cy: 360, rx: 310, ry: 288, stroke: 'rgb(227, 216, 253 / 0.040)', sw: 0.7 }]}
        blur={2}
        preserveAspect
      />
      <GrainOverlay range={[0.014, 0.032]} duration={40} delay={7} size={220} />
    </div>
  );
}

function ExhaleAtmosphere() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      <div style={{ position: 'absolute', top: '50%', left: '50%', width: 'clamp(480px, 65vw, 860px)', height: 'clamp(480px, 65vw, 860px)', transform: 'translate(-50%, -55%)' }}>
        <GlowField
          style={{ inset: 0 }}
          gradient="radial-gradient(ellipse 54% 50% at 50% 50%, rgb(113, 7, 234 / 0.075) 0%, rgb(11, 13, 42 / 0.030) 48%, transparent 72%)"
          blur={90}
          anim={{ opacity: [0.58, 0.92, 0.58] }}
          duration={40}
        />
      </div>
      <VerticalBeam
        left="calc(50% - 50px)"
        width={100}
        gradient="linear-gradient(180deg, transparent 0%, rgb(113, 7, 234 / 0.052) 22%, rgb(113, 7, 234 / 0.088) 50%, rgb(113, 7, 234 / 0.052) 78%, transparent 100%)"
        blur={40}
      />
      <EchoRing
        style={{ inset: 0 }}
        viewBox="0 0 1000 600"
        rings={[{ cx: 500, cy: 288, rx: 300, ry: 220, stroke: 'rgb(227, 216, 253 / 0.040)', sw: 0.6 }]}
        blur={1}
        preserveAspect
      />
      <GrainOverlay range={[0.012, 0.030]} duration={40} delay={9} size={220} />
    </div>
  );
}

const systemCards = [
  {
    title: 'The Adaptive Behavioral System',
    points: [
      'Learns from inaction as much as action',
      'Surfaces gentle nudges, never demands',
      'Responds to emotional patterns over time',
    ],
  },
  {
    title: 'The Interaction Language',
    points: [
      'Minimal affordances, maximum clarity',
      'Language that soothes rather than instructs',
      'Touch interactions designed to feel human',
    ],
  },
  {
    title: 'The Visual Atmosphere',
    points: [
      'A palette of fog, dusk, and soft dawn',
      'No hard edges, no loud assertions',
      'Light deployed as a functional element',
    ],
  },
  {
    title: 'The UX Spine',
    points: [
      'Information density calibrated to capacity',
      'Always one step ahead of overwhelm',
      'Exits as important as entrances',
    ],
  },
] as const;

const snapshots = [
  {
    title: 'Identity System',
    desc: 'Mark, palette, and typographic system. Quiet confidence at every scale.',
  },
  {
    title: 'Mobile Experience',
    desc: 'Gesture-led navigation, ambient interaction design, intentional empty space.',
  },
  {
    title: 'Narrative Architecture',
    desc: 'Onboarding as ritual. Language as atmosphere. The app as a world.',
  },
  {
    title: 'Design System',
    desc: 'Token-based, emotionally calibrated. Built to remain calm under pressure.',
  },
] as const;

export function SignatureCaseStudy() {
  return (
    <article className="relative overflow-hidden">
      {/* Global film-grain layer */}
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: GRAIN, backgroundRepeat: 'repeat', backgroundSize: '200px 200px', opacity: 0.02, mixBlendMode: 'overlay', zIndex: 10 }} />
      {/* Header ambient bloom — violet, upper right */}
      <div className="absolute pointer-events-none" style={{ top: '-8%', right: '-10%', width: 'clamp(380px, 52vw, 720px)', height: 'clamp(380px, 52vw, 720px)', background: 'radial-gradient(ellipse 60% 60% at 64% 36%, rgb(113, 7, 234 / 0.055) 0%, transparent 70%)', filter: 'blur(60px)' }} />

      {/* ── SECTION HEADER ──────────────────────────────────────────── */}
      <div className="ei-container py-16 md:py-28">
        <Separator />
        <div className="pt-16 md:pt-24 max-w-4xl">
          <motion.span
            {...labelFade(0)}
            className="block font-structural text-[10px] tracking-[0.38em] uppercase text-white/50 mb-10 md:mb-14"
          >
            Signature Case Study
          </motion.span>
          <motion.h2
            {...headFade(0.15)}
            className="font-editorial text-[2rem] md:text-[3rem] lg:text-[3.8rem] text-[var(--ei-soft-lavender)]/85 leading-[1.18] mb-6"
            style={{ letterSpacing: '-0.015em' }}
          >
            LUMO — A World Built
            <br className="hidden md:block" />
            for Overwhelmed Humans
          </motion.h2>
          <motion.p
            {...fade(0.2)}
            className="font-structural text-[13px] md:text-[14px] text-white/50 leading-[1.95] max-w-[52ch]"
          >
            A complete creative and product identity — from feeling to form.
          </motion.p>
        </div>
      </div>

      {/* ── 01 — THE BEGINNING ──────────────────────────────────────── */}
      <section className="relative overflow-hidden pb-20 md:pb-32">
        <OriginPulseAtmosphere />
        <motion.div {...envFade(0)}>
          <ImagePlaceholder aspect="aspect-[21/9]" label="Lumo — Opening Visual" tint="violet" />
        </motion.div>

        <div className="ei-container pt-14 md:pt-20">
          <div className="max-w-3xl">
            <motion.span
              {...labelFade(0)}
              className="block font-structural text-[10px] tracking-[0.38em] uppercase text-white/60 mb-10"
            >
              01 — The Beginning: A Feeling, Not a Brief
            </motion.span>
            <motion.p
              {...headFade(0.12)}
              className="font-editorial text-[1.35rem] md:text-[1.75rem] text-[var(--ei-soft-lavender)]/80 leading-[1.4] mb-8"
              style={{ letterSpacing: '-0.01em' }}
            >
              LUMO began not with a brief but with a feeling — something between
              overwhelm and the quiet wish for a different way to move through the day.
            </motion.p>
            <motion.p
              {...fade(0.18)}
              className="font-structural text-[13px] md:text-[14px] text-white/55 leading-[1.95] max-w-[58ch] mb-5"
            >
              The founders came to us not with a product spec, but with a question: what
              would it feel like if your phone actually cared about your nervous system?
              Everything else followed from that single, honest ask.
            </motion.p>
            <motion.p
              {...fade(0.26)}
              className="font-structural text-[13px] md:text-[14px] text-white/55 leading-[1.95] max-w-[52ch]"
            >
              We were not hired to design an app. We were invited to build a world.
            </motion.p>
          </div>
        </div>

        <div className="ei-container mt-16 md:mt-24">
          <Separator />
        </div>
      </section>

      {/* ── 02 — THE WORLD WE FOUND ─────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <CognitiveLandscapeAtmosphere />
        <div className="ei-container py-16 md:py-28">
        <motion.span
          {...labelFade(0)}
          className="block font-structural text-[10px] tracking-[0.38em] uppercase text-white/60 mb-12 md:mb-16"
        >
          02 — The World We Found
        </motion.span>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-start">
          {/* Left */}
          <div>
            <motion.p
              {...fade(0.08)}
              className="font-editorial text-[1.2rem] md:text-[1.45rem] text-[var(--ei-soft-lavender)]/70 leading-[1.52] mb-6"
              style={{ letterSpacing: '-0.006em' }}
            >
              In the early discovery phase, we found a user base that wasn't looking
              for productivity. They were looking for permission.
            </motion.p>
            <motion.p
              {...fade(0.16)}
              className="font-structural text-[13px] md:text-[14px] text-white/55 leading-[1.95] max-w-[48ch]"
            >
              Permission to slow down. To breathe. To exist without the low-grade
              pressure of constant optimisation. Calm wasn't a design preference —
              it was a product requirement.
            </motion.p>
          </div>

          {/* Right — bullet list */}
          <motion.ul
            className="space-y-5 pt-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-30px' }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } } }}
          >
            {[
              'Users described existing apps as demanding and loud',
              'Mental load was the primary barrier — not feature gaps',
              'Calm was a product requirement, not a visual preference',
              'The brand had to feel like a presence, not a tool',
              'Emotional safety was the first UX principle',
            ].map((item) => (
              <motion.li
                key={item}
                variants={{ hidden: { opacity: 0, y: 4 }, visible: { opacity: 1, y: 0, transition: { duration: 1.4, ease: EASE } } }}
                className="flex items-start gap-4"
              >
                <span className="mt-[7px] shrink-0 w-1 h-1 rounded-full bg-white/20" />
                <span className="font-structural text-[13px] md:text-[14px] text-white/55 leading-[1.85]">
                  {item}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
        </div>
      </section>

      {/* ── 03 — THE IDENTITY BENEATH THE IDENTITY ──────────────────── */}
      <section className="relative overflow-hidden pb-16 md:pb-28">
        <BreathingIdentityAtmosphere />
        <motion.div {...envFade(0)}>
          <ImagePlaceholder aspect="aspect-[21/9]" label="Identity Exploration" tint="indigo" />
        </motion.div>

        <div className="ei-container pt-14 md:pt-20">
          <motion.span
            {...labelFade(0)}
            className="block font-structural text-[10px] tracking-[0.38em] uppercase text-white/60 mb-12 text-center"
          >
            03 — The Identity Beneath the Identity
          </motion.span>

          <div className="max-w-2xl mx-auto">
            <motion.ul
              className="space-y-4 mb-14 md:mb-20"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-30px' }}
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.11, delayChildren: 0.1 } } }}
            >
              {[
                'A visual system built from restraint, not decoration',
                'Typography that whispers rather than announces',
                'Colour as emotional weather — muted, shifting, alive',
                'Motion as breath — never jarring, always intentional',
                'Silence as a design element with its own weight',
              ].map((item) => (
                <motion.li
                  key={item}
                  variants={{ hidden: { opacity: 0, y: 4 }, visible: { opacity: 1, y: 0, transition: { duration: 1.4, ease: EASE } } }}
                  className="flex items-start gap-4"
                >
                  <span className="mt-[7px] shrink-0 w-1 h-1 rounded-full bg-white/20" />
                  <span className="font-structural text-[13px] md:text-[14px] text-white/55 leading-[1.85]">
                    {item}
                  </span>
                </motion.li>
              ))}
            </motion.ul>

            {/* Pull-quote — cinematic isolation */}
            <motion.blockquote
              {...headFade(0.1)}
              className="text-center font-editorial text-[1.55rem] md:text-[2.1rem] lg:text-[2.5rem] text-[var(--ei-soft-lavender)]/65 leading-[1.38] mt-16 md:mt-24 pt-12 md:pt-16"
              style={{
                letterSpacing: '-0.012em',
                fontStyle: 'italic',
                borderTop: '1px solid rgb(var(--ei-ice-white-rgb) / 0.05)',
              }}
            >
              "Design as emotional architecture."
            </motion.blockquote>
          </div>
        </div>

        <div className="ei-container mt-16 md:mt-24">
          <Separator />
        </div>
      </section>

      {/* ── 04 — THE SYSTEM WE BUILT ──────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <HumaneFrameworkAtmosphere />
        <div className="ei-container py-16 md:py-28">
        <motion.span
          {...labelFade(0)}
          className="block font-structural text-[10px] tracking-[0.38em] uppercase text-white/60 mb-12 md:mb-16"
        >
          04 — The System We Built
        </motion.span>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-14 md:gap-x-24 md:gap-y-16 mb-16 md:mb-24">
          {systemCards.map((card, i) => (
            <motion.div
              key={card.title}
              {...fade(0.07 * i)}
              className="pt-7"
              style={{ borderTop: '1px solid rgb(var(--ei-ice-white-rgb) / 0.07)' }}
            >
              <span className="block font-structural text-[9px] tracking-[0.28em] uppercase text-white/60 mb-5">
                0{i + 1}
              </span>
              <h3
                className="font-editorial text-[1.1rem] md:text-[1.3rem] text-[var(--ei-soft-lavender)]/75 leading-[1.24] mb-6"
                style={{ letterSpacing: '-0.006em' }}
              >
                {card.title}
              </h3>
              <ul className="space-y-3">
                {card.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-3">
                    <span className="mt-[7px] shrink-0 w-1 h-1 rounded-full bg-white/20" />
                    <span className="font-structural text-[12px] md:text-[13px] text-white/55 leading-[1.85]">
                      {pt}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.p
          {...envFade(0.2)}
          className="font-editorial text-[1.15rem] md:text-[1.35rem] text-[var(--ei-soft-lavender)]/55 leading-[1.5] pt-14 md:pt-20"
          style={{
            letterSpacing: '-0.005em',
            fontStyle: 'italic',
            borderTop: '1px solid rgb(var(--ei-ice-white-rgb) / 0.05)',
          }}
        >
          This wasn't a feature set. It was a feeling set.
        </motion.p>
        </div>
      </section>

      {/* ── 05 — THE WORK (SELECTED SNAPSHOTS) ──────────────────────── */}
      <section className="relative overflow-hidden pb-16 md:pb-28">
        <FragmentsAtmosphere />
        <div className="ei-container mb-12 md:mb-16">
          <Separator />
          <div className="pt-14 md:pt-20">
            <motion.span
              {...labelFade(0)}
              className="block font-structural text-[10px] tracking-[0.38em] uppercase text-white/60 mb-12"
            >
              05 — The Work (Selected Snapshots)
            </motion.span>
          </div>
        </div>

        <div className="ei-container">
          {/* Row 1: Identity System (wide landscape) + Mobile Experience (portrait) */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-5 md:gap-6 mb-20 md:mb-28 items-start">
            <motion.div className="md:col-span-3" {...envFade(0)}>
              <ImagePlaceholder aspect="aspect-[3/2]" label={snapshots[0].title} tint="violet" />
              <div className="pt-5 pb-2">
                <h3
                  className="font-editorial text-[1.1rem] md:text-[1.3rem] text-[var(--ei-soft-lavender)]/75 leading-[1.2] mb-2"
                  style={{ letterSpacing: '-0.006em' }}
                >
                  {snapshots[0].title}
                </h3>
                <p className="font-structural text-[12px] md:text-[13px] text-white/50 leading-[1.85]">
                  {snapshots[0].desc}
                </p>
              </div>
            </motion.div>
            <motion.div className="md:col-span-2" {...envFade(0.07)}>
              <ImagePlaceholder aspect="aspect-[2/3]" label={snapshots[1].title} tint="aqua" />
              <div className="pt-5 pb-2">
                <h3
                  className="font-editorial text-[1.1rem] md:text-[1.3rem] text-[var(--ei-soft-lavender)]/75 leading-[1.2] mb-2"
                  style={{ letterSpacing: '-0.006em' }}
                >
                  {snapshots[1].title}
                </h3>
                <p className="font-structural text-[12px] md:text-[13px] text-white/50 leading-[1.85]">
                  {snapshots[1].desc}
                </p>
              </div>
            </motion.div>
          </div>
          {/* Row 2: Narrative Architecture (portrait) + Design System (wide landscape) */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-5 md:gap-6 items-start">
            <motion.div className="md:col-span-2" {...envFade(0.07)}>
              <ImagePlaceholder aspect="aspect-[3/4]" label={snapshots[2].title} tint="pink" />
              <div className="pt-5 pb-2">
                <h3
                  className="font-editorial text-[1.1rem] md:text-[1.3rem] text-[var(--ei-soft-lavender)]/75 leading-[1.2] mb-2"
                  style={{ letterSpacing: '-0.006em' }}
                >
                  {snapshots[2].title}
                </h3>
                <p className="font-structural text-[12px] md:text-[13px] text-white/50 leading-[1.85]">
                  {snapshots[2].desc}
                </p>
              </div>
            </motion.div>
            <motion.div className="md:col-span-3" {...envFade(0.14)}>
              <ImagePlaceholder aspect="aspect-[3/2]" label={snapshots[3].title} tint="neutral" />
              <div className="pt-5 pb-2">
                <h3
                  className="font-editorial text-[1.1rem] md:text-[1.3rem] text-[var(--ei-soft-lavender)]/75 leading-[1.2] mb-2"
                  style={{ letterSpacing: '-0.006em' }}
                >
                  {snapshots[3].title}
                </h3>
                <p className="font-structural text-[12px] md:text-[13px] text-white/50 leading-[1.85]">
                  {snapshots[3].desc}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 06 — THE TRANSFORMATION ─────────────────────────────────── */}
      <section
        className="relative overflow-hidden py-24 md:py-48"
        style={{ background: 'linear-gradient(180deg, var(--ei-void) 0%, var(--ei-midnight) 50%, var(--ei-void) 100%)' }}
      >
        <BecomingAtmosphere />
        <div className="ei-container">
          <motion.span
            {...labelFade(0)}
            className="block font-structural text-[10px] tracking-[0.38em] uppercase text-white/60 mb-14 text-center"
          >
            06 — The Transformation
          </motion.span>

          <motion.ul
            className="flex flex-col items-center gap-6 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.20, delayChildren: 0.15 } } }}
          >
            {[
              'From tool to companion',
              'From interface to atmosphere',
              'From feature-set to feeling',
              'From downloading to belonging',
              'From overwhelm to presence',
            ].map((item) => (
              <motion.li
                key={item}
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 2.2, ease: EASE } } }}
                className="font-editorial text-[1.2rem] md:text-[1.6rem] text-[var(--ei-soft-lavender)]/60 leading-[1.35]"
                style={{ letterSpacing: '-0.008em' }}
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* ── 07 — THE OUTCOME ────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <HeldAtmosphere />
        <div className="ei-container py-16 md:py-28">
        <Separator />
        <div className="pt-14 md:pt-20 max-w-2xl">
          <motion.span
            {...labelFade(0)}
            className="block font-structural text-[10px] tracking-[0.38em] uppercase text-white/60 mb-12"
          >
            07 — The Outcome
          </motion.span>

          <motion.ul
            className="space-y-5 mb-14 md:mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } } }}
          >
            {[
              '87% of early users described the experience as calming within seconds',
              'Retention at 90 days was 3x the industry average',
              'Net Promoter Score: 74 — across a notoriously sceptical user base',
              'Zero negative reviews citing confusion or overwhelm in the first year',
              'The design system was adopted by the internal team without a single revision request',
            ].map((item) => (
              <motion.li
                key={item}
                variants={{ hidden: { opacity: 0, y: 5 }, visible: { opacity: 1, y: 0, transition: { duration: 1.4, ease: EASE } } }}
                className="flex items-start gap-5"
              >
                <span className="mt-[8px] shrink-0 w-1 h-1 rounded-full bg-white/20" />
                <span className="font-structural text-[13px] md:text-[14px] text-white/55 leading-[1.95]">
                  {item}
                </span>
              </motion.li>
            ))}
          </motion.ul>

          <motion.p
            {...envFade(0.2)}
            className="font-editorial text-[1.2rem] md:text-[1.6rem] text-[var(--ei-soft-lavender)]/75 leading-[1.38] pt-14 md:pt-20"
            style={{
              letterSpacing: '-0.008em',
              fontStyle: 'italic',
              borderTop: '1px solid rgb(var(--ei-ice-white-rgb) / 0.06)',
            }}
          >
            The product didn't just work. It held people.
          </motion.p>
        </div>
        </div>
      </section>

      {/* ── 08 — THE ECHO IN INK SIGNATURE ──────────────────────────── */}
      <section
        className="relative py-24 md:py-40 text-center overflow-hidden"
        style={{ background: 'linear-gradient(180deg, var(--ei-void) 0%, var(--ei-midnight) 45%, var(--ei-void) 100%)' }}
      >
        <ExhaleAtmosphere />
        <div className="ei-container max-w-xl mx-auto">
          <motion.span
            {...labelFade(0)}
            className="block font-structural text-[10px] tracking-[0.38em] uppercase text-white/60 mb-14"
          >
            08 — The Echo in Ink Signature
          </motion.span>

          <motion.p
            {...headFade(0.2)}
            className="font-editorial text-[1.3rem] md:text-[1.7rem] text-[var(--ei-soft-lavender)]/70 leading-[1.52] mb-7"
            style={{ letterSpacing: '-0.01em' }}
          >
            LUMO was not a design project. It was an act of care.
          </motion.p>
          <motion.p
            {...fade(0.55)}
            className="font-structural text-[13px] md:text-[14px] text-white/60 leading-[1.95] mb-5"
          >
            Echo in Ink built a world where overwhelmed humans could finally breathe.
          </motion.p>
          <motion.p
            {...fade(0.85)}
            className="font-structural text-[12px] md:text-[13px] text-white/60 leading-[1.95]"
          >
            This is what we mean when we say design is emotional architecture.
          </motion.p>
        </div>
      </section>

    </article>
  );
}
