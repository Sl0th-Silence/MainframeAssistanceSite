export default function ISPFBasics({ header, ISPFSearch }) {
  return (
    <div className="info">
      {header}
      {ISPFSearch}
      <h1>ISPF Basics</h1>
      <h2>ISPF Main Screen</h2>
      <p>
        {" "}
        Mainframe navigation can be weird at first. From MVS to z/OS, it can
        take awhile to feel confident in navigation and ease of use. There are a
        few commands we will go over to make more sense of everything and
        whatever you do, do NOT change your keymapping or this will make no
        sense! <br /> <br />
      </p>
      <h2>Primary Commands</h2>
      <p>
        The primary commands are anything written to the main command line at
        the top of the screen. This can be either a selector for the options
        below, such as the 'ISPF Primary Option Menu', or it could be a command
        line while adding or editing files, or even inside of a COBOL program.
      </p>
      <br />
      <div className="img-container">
        <img
          src="public/ISPF-images/select-option.png"
          title="Select Option on main ISPF"
          width="20%"
        />
        <img
          src="public/ISPF-images/Command-option.png"
          title="Command Option in Dataset or Program"
          width="40%"
        />
        <img
          src="public/ISPF-images/Command-Cobol.png"
          title="Command Option inside Cobol program"
          width="20%"
        />
      </div>
      <hr />
      <p>
        The differences between the two option lines depend on which screen you
        are on. When working on a COBOL program or searching a dataset, you can
        use the 'F' or 'FIND' command with a like of text to search the current
        data stream for results. You can either write one word or define a
        specific string by using quotes.
      </p>
      <img
        className="img-container"
        src="public/F-WS-PAGE-NUM.png"
        title="F WS-PAGE-NUM"
        width="50%"
      />

      <p>They also are not case sensitive for searching.</p>

      <img
        className="img-container"
        src="public/f-string.png"
        title="f 'string'"
        width="50%"
      />
    </div>
  );
}
