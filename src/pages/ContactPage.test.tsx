import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import { MemoryRouter } from "react-router-dom";

import { ContactPage } from "@/pages/ContactPage";

function renderContactPage() {
  return render(
    <HelmetProvider>
      <MemoryRouter initialEntries={["/contact"]}>
        <ContactPage />
      </MemoryRouter>
    </HelmetProvider>,
  );
}

function fillRequiredFields() {
  fireEvent.change(screen.getByLabelText(/^Name/), {
    target: { value: "Avery Reed" },
  });
  fireEvent.change(screen.getByLabelText(/^Email/), {
    target: { value: "avery@example.com" },
  });
  fireEvent.change(
    screen.getByLabelText(/^Tell me about what you are trying to express/),
    {
      target: {
        value:
          "We are building a more considered studio presence and need help clarifying the identity and direction.",
      },
    },
  );
}

describe("ContactPage", () => {
  const fetchMock = vi.fn();

  beforeAll(() => {
    vi.stubGlobal("fetch", fetchMock);
  });

  beforeEach(() => {
    fetchMock.mockReset();
  });

  it("shows inline validation errors before submitting", async () => {
    renderContactPage();

    fireEvent.click(screen.getByRole("button", { name: "Send enquiry" }));

    expect(fetchMock).not.toHaveBeenCalled();
    expect(
      await screen.findByText("Please enter your name."),
    ).toBeInTheDocument();
    expect(screen.getByText("Please enter your email address.")).toBeInTheDocument();
    expect(
      screen.getByText("Please tell us what you are building."),
    ).toBeInTheDocument();
    expect(screen.getByLabelText(/^Name/)).toHaveFocus();
  });

  it("renders the confirmed success state after a real response", async () => {
    fetchMock.mockResolvedValue(
      new Response(JSON.stringify({ ok: true }), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }),
    );

    renderContactPage();
    fillRequiredFields();

    fireEvent.click(screen.getByRole("button", { name: "Send enquiry" }));

    await waitFor(() =>
      expect(fetchMock).toHaveBeenCalledWith(
        "/api/contact",
        expect.objectContaining({
          method: "POST",
        }),
      ),
    );

    await waitFor(() =>
      expect(screen.getByRole("status")).toHaveTextContent(
        "Thank you. Your message is on its way.",
      ),
    );
    expect(screen.getByRole("status")).toHaveTextContent(
      "Echo in Ink will reply within two working days.",
    );
  });

  it("shows a retryable error state and can recover on the next submit", async () => {
    fetchMock
      .mockRejectedValueOnce(new Error("network down"))
      .mockResolvedValueOnce(
        new Response(JSON.stringify({ ok: true }), {
          status: 200,
          headers: {
            "Content-Type": "application/json",
          },
        }),
      );

    renderContactPage();
    fillRequiredFields();

    fireEvent.click(screen.getByRole("button", { name: "Send enquiry" }));

    expect(await screen.findByRole("alert")).toHaveTextContent(
      "Your message could not be sent just yet. Please try again, or email directly.",
    );
    expect(
      screen.getByRole("button", { name: "Try Again" }),
    ).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Try Again" }));

    await waitFor(() =>
      expect(screen.getByRole("status")).toHaveTextContent(
        "Thank you. Your message is on its way.",
      ),
    );
    expect(screen.getByRole("status")).toHaveTextContent(
      "Echo in Ink will reply within two working days.",
    );
  });
});
