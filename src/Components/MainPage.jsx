import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function MainPage({ header }) {
  const navigate = useNavigate();
  const location = useLocation();

  const [selectedPage, setSelectedPage] = useState(location.pathname);

  const handleChange = (e) => {
    setSelectedPage(e.target.value);
    navigate(e.target.value);
  };

  return (
    <div className="mainPage">
      {header}
      <h2>
        "I became insane, with long intervals of horrible sanity." - Edgar Allan
        Poe
      </h2>
      <h3>Welcome to Mainframe</h3>
      <hr />
      <p>
        Due to the difficult nature of mainframe learning and navigation, I am
        creating this course as a cookbook of assistance.
        <br />
        This if for students who want to learn COBOL, JCL, ISPF, DB2, etc.
        without all of the baggage that comes with it. I am going to add in what
        I feel is important but this will act as a more comprehesible guide then
        that of IBM's site.
      </p>
      <hr />
      <br />
      <br />
      <h1>Getting Started</h1>
      <h3>
        Select one of the options from the drop down menu in the top left or
        select an option below to get started!
      </h3>

      <div>
        <select
          name="PageSelectHome"
          id="PageSelectHome"
          onChange={handleChange}
          value={selectedPage}
        >
          <option value="/">Home</option>
          <option value="/mainframeBasics">Mainframe Basics</option>
          <option value="/ispf">ISPF</option>
          <option value="/cobol">COBOL</option>
          <option value="/advancedCobol">Advanced COBOL</option>
          <option value="/jcl">JCL</option>
          <option value="/terms">Termonology</option>
        </select>
      </div>
    </div>
  );
}
