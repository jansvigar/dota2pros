import React from "react";
import { render } from "react-testing-library";

import LoadingIndicator from "../index";

describe("<LoadingIndicator />", () => {
  it("should render 8 divs", () => {
    const { container } = render(<LoadingIndicator />);
    expect(container.firstChild.querySelectorAll("div")).toHaveLength(8);
  });
});
