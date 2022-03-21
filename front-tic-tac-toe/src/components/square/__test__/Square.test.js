import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";
import ReactDom from "react-dom";
import React from "react";

import Square from "../Square";

//cleanup after each element rendering
afterEach(cleanup);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDom.render(<Square />, div);
});

it("renders Square correctly", () => {
  const { getByTestId } = render(<Square value="X" onClick={() => {}} />);
  expect(getByTestId("square")).toHaveTextContent("X");
});

it("matches snapshot", () => {
  const component = renderer.create(<Square value="X" onClick={() => {}} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onClick();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
