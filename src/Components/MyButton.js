import React from "react";

const MyButton = props => {
  return (
    <a
      className="link-button"
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
      data-gtm={props.id}
    >
      {props.linkName}
    </a>
  );
};

export default MyButton;
