import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";
import ReactDom from "react-dom";
import React from "react";

import Board from "../Board";

//cleanup after each element rendering
afterEach(cleanup);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDom.render(
    <Board squares={["", "X", "O", "", "X", "X", "O", ""]} />,
    div
  );
});

it("matches snapshot", () => {
  const component = renderer.create(
    <Board squares={["", "X", "O", "", "X", "X", "O", ""]} onClick={() => {}} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
