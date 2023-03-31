import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Die } from "./Die";

// test suite for the Die component
describe("Die component", () => {
  // define default props to be used by the tests
  const defaultProps = {
    value: 3,
    isHeld: false,
    holdDice: jest.fn(),
  };

  // test if the component is rendering the correct value
  it("renders the correct value", () => {
    // render the Die component with the defaultProps
    render(<Die {...defaultProps} />);
    // expect that the text "3" is present in the document
    expect(screen.getByText("3")).toBeInTheDocument();
  });

  // test if the component is applying the correct styles when isHeld is true
  it("applies the correct styles if isHeld is true", () => {
    // render the Die component with isHeld set to true
    render(<Die {...defaultProps} isHeld={true} />);
    // get the element with the test id "die-face"
    const dieFace = screen.getByTestId("die-face");
    // expect that the die face has the background color of #FEC601
    expect(dieFace).toHaveStyle("background-color: #FEC601");
  });

  // test if the holdDice function is being called when the die face is clicked
  it("calls the holdDice function when clicked", () => {
    // render Die component
    render(<Die {...defaultProps} />);
    // get the element with the test id "die-face"
    const dieFace = screen.getByTestId("die-face");
    // fire click event when die face is clicked
    fireEvent.click(dieFace);
    // expect that the holdDice function has been called
    expect(defaultProps.holdDice).toHaveBeenCalled();
  });
});
