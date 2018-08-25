import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import rmwcTestPolyfill from "rmwc/Base/testPolyfill";
import Explore from "./Explore";

Enzyme.configure({ adapter: new Adapter() });
rmwcTestPolyfill();
it("renders without errors", () => {
  shallow(<Explore />);
});
