import { Button } from "../ui/Button";

export function HeroCTA() {
  return (
<div className="mt-9 mb-10 flex w-full flex-col items-stretch gap-3 sm:mb-12 sm:flex-row sm:items-center md:mt-12 md:mb-0 md:gap-5">      <Button
        to="/contact"
        variant="primary"
        className="w-full shadow-[0_0_42px_rgb(var(--ei-halo-blue-rgb)/0.16)] sm:w-auto"
      >
        Start a Conversation
      </Button>

      <Button
        to="/works"
        variant="secondary"
        className="w-full border-[rgb(var(--ei-moonlit-rgb)/0.16)] bg-[rgb(var(--ei-ice-white-rgb)/0.035)] sm:w-auto"
      >
        View the Work
      </Button>
    </div>
  );
}