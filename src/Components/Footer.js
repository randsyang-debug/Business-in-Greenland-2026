import React from "react";
import { getYear } from "../utils";

const Footer = () => {
  return (
    <footer>
      {getYear()} Business in Greenland - All Rights Reserved.
      <br />
      Danish Trade Council
    </footer>
  );
};

export default Footer;
