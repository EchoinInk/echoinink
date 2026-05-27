import { Button } from '../Button';

export function HeroCTA() {
  return (
    <div className="mt-8 md:mt-12 flex flex-wrap items-center gap-3 md:gap-6">
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
        View Our Work
      </Button>
    </div>
  );
}
