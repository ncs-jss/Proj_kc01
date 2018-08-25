import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import rmwcTestPolyfill from "rmwc/Base/testPolyfill";
import Societies from "./Societies";

const data = [
  {
    _id: "5b46fb9082075c15c08c45aa",
    name: "NCS",
    dist: "500m",
    type: "office",
    desc: "req.body.desc",
    link: "req.body.link",
    _creator: "5b46fb7182075c15c08c45a8",
    __v: 0
  }
];
Enzyme.configure({ adapter: new Adapter() });
rmwcTestPolyfill();
it("renders without errors", () => {
  shallow(<Societies data={data} />);
});
