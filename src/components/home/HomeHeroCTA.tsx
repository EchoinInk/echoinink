import { Button } from "../ui/Button";

export function HeroCTA() {
  return (
    <div className="mt-8 flex w-full flex-col items-stretch gap-3 sm:flex-row sm:items-center md:mt-12 md:gap-6">
      <Button to="/contact" variant="primary" className="w-full sm:w-auto">
        Start a Conversation
      </Button>

      <Button to="/works" variant="secondary" className="w-full sm:w-auto">
        View the Work
      </Button>
    </div>
  );
}