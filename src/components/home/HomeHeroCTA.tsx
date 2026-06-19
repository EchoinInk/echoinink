import { Button } from "../ui/Button";

export function HeroCTA() {
  return (
<div className="ei-home-hero-actions ei-page-section-hero-actions mt-8 mb-10 flex w-full flex-col items-stretch gap-3 sm:mb-12 sm:flex-row sm:items-center md:mt-10 md:mb-0 md:gap-4">
        <Button
  to="/contact"
  variant="primary"
  className="ei-page-section-hero-button ei-page-section-hero-button-primary self-stretch sm:self-start"
>
  Start a Project
</Button>

<Button
  to="/works#selected-works"
  variant="secondary"
  className="ei-page-section-hero-button ei-page-section-hero-button-secondary self-stretch sm:self-start"
>
  View Selected Work
  <span aria-hidden="true">→</span>
</Button>
    </div>
  );
}