import React from "react";
import "./Societies.css";
import Card from "../../components/Card/Card";

const data = [
  {
    id: 1,
    name: "Nibble Computer Society",
    dist: "Technical",
    type: "Department of Computer Science",
    desc:
      "See a movie at the drive-in. Eat a whole lobster with your hands. Buy a Creamsicle from the neighborhood ice cream truck. Catch fireflies at night. Eat corn on the cob. Eat a soft-serve vanilla ice cream cone with rainbow sprinkles. Watch the sun set from a beach. Get caught in a summer rainstorm",
    link: "//goo.gl/maps/yeo8mzvDkgG2"
  },
  {
    id: 2,
    name: "Impetus Cultural Society",
    dist: "Cultural",
    type: "Department of Chemistry",
    desc:
      "Catch fireflies at night. Eat corn on the cob. Eat a soft-serve vanilla ice cream cone with rainbow sprinkles. Watch the sun set from a beach. Get caught in a summer rainstorm",
    link: "#"
  },
  {
    id: 3,
    name: "Microsoft Mobile Innovation Lab",
    dist: "Technical",
    type: "Department of Information Technology",
    desc: "With your hands.",
    link: "//goo.gl/maps/XGy6xYxBzA12"
  },
  {
    id: 4,
    name: "Nibble Computer Society",
    dist: "Technical",
    type: "Department of Computer Science",
    desc:
      "Buy a Creamsicle from the neighborhood ice cream truck. Catch fireflies at night. Eat corn on the cob. Eat a soft-serve vanilla ice cream cone with rainbow sprinkles. Watch the sun set from a beach. Get caught in a summer rainstorm",
    link: "//goo.gl/maps/yeo8mzvDkgG2"
  },
  {
    id: 5,
    name: "Impetus Cultural Society",
    dist: "Cultural",
    type: "Department of Chemistry",
    desc:
      "Catch fireflies at night. Watch the sun set from a beach. Get caught in a summer rainstorm",
    link: "#"
  },
  {
    id: 6,
    name: "Microsoft Mobile Innovation Lab",
    dist: "Technical",
    type: "Department of Information Technology",
    desc:
      "Read a trashy novel. Smell freshly-cut grass. Dum dum,eat some gum-gum. See a movie at the drive-in. Eat a whole lobster with your hands.",
    link: "//goo.gl/maps/XGy6xYxBzA12"
  },
  {
    id: 7,
    name: "Impetus Cultural Society",
    dist: "Cultural",
    type: "Department of Chemistry",
    desc:
      "Eat a soft-serve vanilla ice cream cone with rainbow sprinkles. Watch the sun set from a beach. Get caught in a summer rainstorm",
    link: "#"
  },
  {
    id: 8,
    name: "Microsoft Mobile Innovation Lab",
    dist: "Technical",
    type: "Department of Information Technology",
    desc:
      "Read a trashy novel. Smell freshly-cut grass. Dum dum,eat some gum-gum. See a movie at the drive-in. Eat a whole lobster with your hands.",
    link: "//goo.gl/maps/XGy6xYxBzA12"
  },
  {
    id: 9,
    name: "Nibble Computer Society",
    dist: "Technical",
    type: "Department of Computer Science",
    desc:
      "Buy a Creamsicle from the neighborhood ice cream truck. Catch fireflies at night. Eat corn on the cob. Eat a soft-serve vanilla ice cream cone with rainbow sprinkles. Watch the sun set from a beach. Get caught in a summer rainstorm",
    link: "//goo.gl/maps/yeo8mzvDkgG2"
  },
  {
    id: 10,
    name: "Impetus Cultural Society",
    dist: "Cultural",
    type: "Department of Chemistry",
    desc:
      "Catch fireflies at night. Watch the sun set from a beach. Get caught in a summer rainstorm",
    link: "#"
  },
  {
    id: 11,
    name: "Microsoft Mobile Innovation Lab",
    dist: "Technical",
    type: "Department of Information Technology",
    desc:
      "Read a trashy novel. Smell freshly-cut grass. Dum dum,eat some gum-gum. See a movie at the drive-in. Eat a whole lobster with your hands.",
    link: "//goo.gl/maps/XGy6xYxBzA12"
  },
  {
    id: 12,
    name: "Impetus Cultural Society",
    dist: "Cultural",
    type: "Department of Chemistry",
    desc:
      "Eat a soft-serve vanilla ice cream cone with rainbow sprinkles. Watch the sun set from a beach. Get caught in a summer rainstorm",
    link: "#"
  },
  {
    id: 13,
    name: "Microsoft Mobile Innovation Lab",
    dist: "Technical",
    type: "Department of Information Technology",
    desc:
      "Read a trashy novel. Smell freshly-cut grass. Dum dum,eat some gum-gum. See a movie at the drive-in. Eat a whole lobster with your hands.",
    link: "//goo.gl/maps/XGy6xYxBzA12"
  }
];
const Societies = () => (
  <div className="nearby" id="container">
    <div className="nearby-content" id="myContent">
      {data.map(p => (
        <Card
          name={p.name}
          dist={p.dist}
          type={p.type}
          desc={p.desc}
          link={p.link}
          key={p.id}
        />
      ))}
    </div>
  </div>
);
export default Societies;
