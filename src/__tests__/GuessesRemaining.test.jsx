import { describe, expect, it, test } from "vitest";
import { render, screen } from "@testing-library/react";
import GuessesRemaining from "../GuessesRemaining";

describe("GuessRemaining component", () => {
  it("shows correct text when no guesses have been made", () => {
    render(<GuessesRemaining counter={0} />);

    expect(screen.getByText(/5 guesses/));
  });

  it("shows correct text when 1 guess has been made", () => {
    render(<GuessesRemaining counter={1} />);

    expect(screen.getByText(/4 guesses/));
  });

  it("shows correct text when 4 guesses have been made", () => {
    render(<GuessesRemaining counter={4} />);

    expect(screen.getByText(/1 guess left/));
  });
});
