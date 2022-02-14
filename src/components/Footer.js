import React, { Component } from "react";
function Footer(props) {
  return (
    <div className="footer">
      Completed: {props.data.filter((item) => item.checked).length} /{" "}
      {props.data.length}
    </div>
  );
}

export default Footer;
