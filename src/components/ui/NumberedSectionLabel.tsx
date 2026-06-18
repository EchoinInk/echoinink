import { SectionLabel } from "@/components/ui/SectionLabel";

interface NumberedSectionLabelProps {
  number: string;
  label: string;
}

export function NumberedSectionLabel({ number, label }: NumberedSectionLabelProps) {
  return <SectionLabel label={label} index={number} />;
}
