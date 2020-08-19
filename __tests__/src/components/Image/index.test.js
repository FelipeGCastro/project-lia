// __tests__/CheckboxWithLabel-test.js

import "@testing-library/jest-dom";
// NOTE: jest-dom adds handy assertions to Jest and is recommended, but not required

import React from "react";
import { cleanup, fireEvent, render } from "@testing-library/react";
import Image from "../../../../src/components/Image";
import renderer from "react-test-renderer";

describe("Link changes the class when hovered", () => {
  const component = renderer.create(<Image src="src" alt="alt" />);

  it("Snapshot", () => {
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Snapshot", () => {
    const testInstance = component.root;

    expect(testInstance.findByType(Image).props.alt).toBe("alt");
    expect(testInstance.findByType(Image).props.src).toBe("src");
  });
});
