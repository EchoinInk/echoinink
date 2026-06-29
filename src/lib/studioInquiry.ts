export type StudioInquiryPayload = {
  kind: "contact" | "session-request";
  page: string;
  name: string;
  email: string;
  details: Record<string, string>;
};

export class StudioInquirySubmitError extends Error {
  code: "not_configured" | "network" | "server";

  constructor(
    code: "not_configured" | "network" | "server",
    message: string,
  ) {
    super(message);
    this.name = "StudioInquirySubmitError";
    this.code = code;
  }
}

export async function submitStudioInquiry(payload: StudioInquiryPayload) {
  const endpoint = import.meta.env.VITE_STUDIO_INQUIRY_ENDPOINT?.trim();

  if (!endpoint) {
    throw new StudioInquirySubmitError(
      "not_configured",
      "VITE_STUDIO_INQUIRY_ENDPOINT is not configured.",
    );
  }

  let response: Response;

  try {
    response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        ...payload,
        submittedAt: new Date().toISOString(),
        path: window.location.pathname,
      }),
    });
  } catch {
    throw new StudioInquirySubmitError(
      "network",
      "The inquiry request could not reach the configured endpoint.",
    );
  }

  if (!response.ok) {
    throw new StudioInquirySubmitError(
      "server",
      "The inquiry endpoint rejected the request.",
    );
  }
}
