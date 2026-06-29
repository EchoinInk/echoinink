import { handleContactRequest } from "../src/lib/contactServer.ts";

export default {
  async fetch(request: Request) {
    return handleContactRequest(request);
  },
};
