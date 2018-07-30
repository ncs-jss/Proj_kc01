import React from "react";

const DialogField = props => {
  const { title, superscript, desc } = props;
  return (
    <div className="dialogField">
      <h1 className="dialogFieldTitle">
        {title}
        <span className="dialogFieldSuper">{superscript}</span>
      </h1>
      <p className="dialogFieldDesc">{desc}</p>
    </div>
  );
};
export default DialogField;
