import {
  ContactSubmissionError,
  createEmptyContactFormData,
  submitContactForm,
} from "./contactForm";

export type StudioInquiryPayload = {
  kind: "contact" | "session-request";
  page: string;
  name: string;
  email: string;
  details: Record<string, string>;
};

export class StudioInquirySubmitError extends Error {
  code: "network" | "server" | "validation";
  fieldErrors?: ContactSubmissionError["fieldErrors"];

  constructor(
    code: "network" | "server" | "validation",
    message: string,
    fieldErrors?: ContactSubmissionError["fieldErrors"],
  ) {
    super(message);
    this.name = "StudioInquirySubmitError";
    this.code = code;
    this.fieldErrors = fieldErrors;
  }
}

function buildStudioInquiryMessage(payload: StudioInquiryPayload) {
  const detailLines = Object.entries(payload.details).map(
    ([label, value]) => `${label}: ${value || "Not specified"}`,
  );

  return [
    payload.kind === "session-request"
      ? "Echo Session request"
      : "Studio enquiry",
    "",
    ...detailLines,
    "",
    `Submitted from: ${payload.page}`,
  ].join("\n");
}

export async function submitStudioInquiry(
  payload: StudioInquiryPayload,
  options: { fetchImpl?: typeof fetch } = {},
) {
  try {
    await submitContactForm(
      createEmptyContactFormData({
        name: payload.name,
        email: payload.email,
        exploration:
          payload.kind === "session-request"
            ? "Echo Session Request"
            : "Project Inquiry",
        message: buildStudioInquiryMessage(payload),
      }),
      options,
    );
  } catch (error) {
    if (error instanceof ContactSubmissionError) {
      throw new StudioInquirySubmitError(
        error.fieldErrors ? "validation" : "server",
        error.message,
        error.fieldErrors,
      );
    }

    throw new StudioInquirySubmitError(
      "network",
      "The inquiry request could not reach the contact endpoint.",
    );
  }
}
