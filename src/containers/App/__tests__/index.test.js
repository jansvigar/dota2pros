import React from "react";
import { render, cleanup } from "react-testing-library";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import reducer from "../../../rootReducer";

import App from "../index";

const renderWithRedux = (
  ui,
  {
    initialState,
    store = createStore(reducer, initialState, applyMiddleware(thunk))
  } = {}
) => {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store
  };
};

afterEach(cleanup);

describe("<App />", () => {
  it("should render the header", () => {
    const { getByText } = renderWithRedux(<App />);
    expect(getByText("Dota 2 Pros")).toBeDefined();
  });

  it("should render the loading indicator when fetching data", () => {
    const { getByTestId } = renderWithRedux(<App loading={true} />);
    expect(getByTestId("loading-indicator")).toBeDefined();
  });
});
