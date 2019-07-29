import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Error from "./Error";

Enzyme.configure({ adapter: new Adapter() });
it("renders without errors", () => {
  shallow(<Error />);
});
