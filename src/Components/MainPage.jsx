import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function MainPage({ header, ISPFSearch }) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="mainPage">
      {header}
      <h2>
        "I became insane, with long intervals of horrible sanity." - Edgar Allan
        Poe
      </h2>
      <h3>Welcome to Mainframe</h3>
      <br />
      <p>
        Due to the difficult nature of mainframe learning and navigation, I am
        creating this course as a cookbook of assistance.
        <br />
        This if for students who want to learn COBOL, JCL, ISPF, DB2, etc.
        without all of the baggage that comes with it. I am going to add in what
        I feel is important but this will act as a more comprehesible guide then
        that of IBM's site.
      </p>
      <br />
      <br />
      <h3>
        Type a page name below to get started or 'help' for a list of commands
        and pages.
      </h3>
      {ISPFSearch}
      <div style={{ fontSize: "10px" }}>
        Font made from{" "}
        <a href="http://www.onlinewebfonts.com/fonts">Web Fonts</a> is licensed
        by CC BY 4.0
      </div>
    </div>
  );
}
