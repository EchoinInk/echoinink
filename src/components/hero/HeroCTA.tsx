import { Button } from '../Button';

export function HeroCTA() {
  return (
    <div className="mt-10 md:mt-14 flex flex-wrap items-center gap-4 md:gap-6">
      {/* ═══════════════════════════════════════════════════════════════
          PRIMARY CTA — Start a Project
          Stronger contrast, confident border, clearer hover response
          ═══════════════════════════════════════════════════════════════ */}
      <Button to="/contact" variant="primary">
        Start a Project
      </Button>

      {/* ═══════════════════════════════════════════════════════════════
          SECONDARY CTA — View Work
          Softer presence, editorial invitation
          ═══════════════════════════════════════════════════════════════ */}
      <Button to="/works" variant="secondary">
        View Work
      </Button>
    </div>
  );
}
