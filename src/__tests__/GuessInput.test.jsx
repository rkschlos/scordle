import { expect, describe, it } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import GuessInput from "../GuessInput";

describe("GuessInput component", () => {
  const mockOnClick = vi.fn(() => null);
  const mockSetCurrentGuess = vi.fn(() => null);
  render(
    <GuessInput
      setCurrentGuess={mockSetCurrentGuess}
      currentGuess={""}
      onClick={mockOnClick}
    />
  );
  // render the component
  it("Shows placeholder text", () => {
    expect(screen.getByText(/Guess\/Next Hint/));
  });

  it("Sets current guess on change", () => {
    const input = screen.getByLabelText("guess-input");
    fireEvent.change(input, { target: { value: "test input" } });

    expect(mockSetCurrentGuess).toHaveBeenCalledTimes(1);
    expect(mockSetCurrentGuess).toHaveBeenCalledWith("test input");
  });

  it("Runs onClick when button is clicked", () => {
    const button = screen.getByLabelText("submit-guess");
    fireEvent.click(button);

    expect(mockSetCurrentGuess).toHaveBeenCalledTimes(1);
  });
  //
});
