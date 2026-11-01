import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ISPFSearch() {
  //Search
  const [pageText, setPageText] = useState("");
  const [value, setValue] = useState("");
  const [targetPage, setTargetPage] = useState("");
  const navigate = useNavigate();
  const [isHidden, setIsHidden] = useState(true);
  const [isHiddenCommand, setIsHiddenCommand] = useState(true);
  const [currentCommand, setCurrentCommand] = useState("");
  const [curText, setCurText] = useState("");
  const pages = [
    "cobol",
    "ispf",
    "advancedcobol",
    "mainframebasics",
    "jcl",
    "terms",
  ];
  //Text Change
  const handleTextChange = (e) => {
    setCurText(e.target.value.toUpperCase());
  };

  //Is Text Hidden?
  const handleIsHidden = (state) => {
    setIsHidden(state);
  };

  //Is the command hidden?
  const handleIsHiddenCommand = (state) => {
    setIsHiddenCommand(state);
  };

  //Handle submitting of the command
  const handleSubmit = (e) => {
    console.log("Submitted")
    e.preventDefault();
    setCurText("");
    
    let targetPageClean = curText.replace(/\s/g, "");
    targetPageClean = targetPageClean.toLowerCase().trim();

    console.log(targetPageClean)
    setCurrentCommand(curText);
    
    if (targetPageClean.trim() !== "") {
      if (pages.includes(targetPageClean)) {
        handleIsHidden(true);
        navigate(`/${targetPageClean}`);

      } else if (targetPageClean === "home") {
        handleIsHidden(true);
        navigate("/");

      } else if (targetPageClean === "help") {
        handleIsHiddenCommand(false);
        handleIsHidden(false);

      } else if (targetPageClean[0] === "f") {
        if (pageText.includes(targetPageClean.slice(1))) {
          console.log(targetPageClean + "found");

        } else {
          console.log(targetPageClean + "not found");
        }

      } else if (targetPageClean === "cls") {
        handleIsHiddenCommand(false);
        handleIsHidden(true);
        setCurrentCommand("");

      } else {
        handleIsHiddenCommand(false);
        setCurrentCommand(
          curText.toUpperCase() +
            " is not a valid command. Type 'HELP' for more information",
        );
      }
    } else {
      setCurrentCommand("Please enter a command");
    }
  };

  return (
<div>
  <div className="ispf-input-container">
    <label id="input-label" htmlFor="ispf-search">
      COMMAND ==&gt;
    </label>

    <div className="input-wrapper">
      <form onSubmit={handleSubmit} autoComplete="off">
        <input
          value={curText}
          onChange={handleTextChange}
          type="text"
          id="ispf-search"
          autoFocus
          autoComplete="off"
        />
      </form>

      <div className="text-display">
        {curText.split("").map((char, index) => {
          const isLastChar = index === curText.length - 1;

          return (
            <span
              key={index}
              className={isLastChar ? "current-char" : "normal-char"}
            >
              {char === " " ? "\u00a0" : char}
            </span>
          );
        })}
        <span className="caret">|</span>
      </div>
    </div>
  </div>
    <div className="info-box">
      <p style={{textAlign: "left", padding: "0% 2% 0% 2%"}}>
        <span hidden={isHiddenCommand}>{currentCommand}</span> <br />
        <span hidden={isHidden}>
          ==&gt; ALL COMMANDS ARE CASE-INSENSITIVE
        </span>

        <br />

        <span hidden={isHidden}>==&gt; Commands: 'HELP', 'CLS'</span> <br />
        <span hidden={isHidden}>
          ==&gt; Pages: 'HOME, ISPF, COBOL, ADVANCEDCOBOL, JCL, TERMS'
        </span>
        <br />
      </p>
    </div>

</div>
  );
}
