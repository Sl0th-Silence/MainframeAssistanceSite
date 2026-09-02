import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ISPFSearch() {
  const [value, setValue] = useState("");
  const [targetPage, setTargetPage] = useState("");
  const navigate = useNavigate();
  const [isHidden, setIsHidden] = useState(true);
  const [isHiddenCommand, setIsHiddenCommand] = useState(true);
  const [currentCommand, setCurrentCommand] = useState("");
  const pages = [
    "home",
    "cobol",
    "ispf",
    "advancedcobol",
    "mainframebasics",
    "jcl",
    "terms",
  ];
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
    e.preventDefault();
    setValue("");
    const targetPageClean = targetPage.replace(/\s/g, "");
    setCurrentCommand(targetPage.toUpperCase());
    if (targetPageClean.trim() !== "") {
      if (pages.includes(targetPageClean.toLowerCase().trim())) {
        handleIsHidden(true);
        navigate(`/${targetPageClean.toLowerCase().trim()}`);
      } else if (targetPageClean.toLowerCase().trim() === "help") {
        handleIsHiddenCommand(false);
        handleIsHidden(false);
      } else if (targetPageClean.toLowerCase().trim() === "cls") {
        handleIsHiddenCommand(false);
        handleIsHidden(true);
        setCurrentCommand("");
      } else {
        handleIsHiddenCommand(false);
        setCurrentCommand(
          targetPage.toUpperCase() +
            " is not a valid command. Type 'HELP' for more information",
        );
      }
    } else {
      setCurrentCommand("Please enter a command");
    }
  };
  //Handle changing the value to uppercase
  const handleChange = (e) => {
    setValue(e.target.value.toUpperCase());
    setTargetPage(e.target.value);
  };

  return (
    <div>
      <div id="ispf-search-div">
        <form action="" onSubmit={handleSubmit}>
          <label id="input-label" htmlFor="ispf-search">
            COMMAND ==&gt;
          </label>
          <input
            value={value}
            onChange={handleChange}
            type="text"
            id="ispf-search"
            autoFocus
          />
        </form>
      </div>
      <div>
        <p
          style={{
            textAlign: "left",
            padding: "0% 2% 0% 2%",
          }}
        >
          ==&gt; <span hidden={isHiddenCommand}>{currentCommand}</span> <br />
          <span hidden={isHidden}>
            ==&gt; ALL COMMANDS ARE CASE-INSENSITIVE
          </span>
          <br />
          <span hidden={isHidden}>==&gt; Commands: 'HELP', 'CLS'</span> <br />
          <span style={{ display: `${isHidden} ? 'none' : 'block` }}>
            ==&gt; Pages: 'HOME, ISPF, COBOL, ADVANCEDCOBOL, JCL, TERMS'
          </span>
          <br />
        </p>
      </div>
    </div>
  );
}
