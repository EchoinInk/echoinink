import { handleContactRequest } from "../src/lib/contactServer.ts";

export const config = {
  runtime: "edge",
};

export default function handler(request: Request) {
  return handleContactRequest(request);
}
