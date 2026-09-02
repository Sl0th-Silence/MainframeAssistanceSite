export default function Cobol({ header, ISPFSearch }) {
  return (
    <div className="info">
      {header}
      {ISPFSearch}
      <h1>What is COBOL ?</h1>
      <h3>COBOL stands for 'CO'mmon 'B'usiness 'O'riented 'L'anguage</h3>

      <p>
        If anyone has looked into COBOL in our current industry today, you might
        see that it is still a staple for most banks and healthcare systems.
        There's a good reason for that. It's exceptionally fast at business
        transactions.
      </p>
      <br />
      <p>
        COBOL is for fast transactions and commonly used in batch processing via{" "}
        <span id="keyword">JCL</span>. It is a compiled, english-like
        programming language designed for business use. It is considered
        'High-level' and despite being released in 1960, it's still just as
        common in todays world as COBOL systems process roughly $3 trillion in
        daily financial transactions.
      </p>
      <br />

      <h2>A Basic Refresher</h2>
      <hr />
      {/* SECTIONS */}
      <h1 style={{ textAlign: "left", padding: "2%" }}>The COBOL Program:</h1>
      <p>
        There are multiple chunks that make up a COBOL program. These are broken
        down into the following: <br />
        <span id="keyword">DIVISIONS</span>, <span id="keyword">SECTIONS</span>,{" "}
        <span id="keyword">PARAGRAPHS</span>,{" "}
        <span id="keyword">SENTENCES</span>, and{" "}
        <span id="keyword">VERBS (STATEMENTS)</span>
        <br />
        <img
          className="cob-structure"
          src="public/COBOL-images/cobol-structure.png"
          title="It can be scary at first but we are scarier!"
        />
      </p>
      <p style={{ textAlign: "left" }}>
        {/* Identification division */}
        <span id="keyword-ul">Identification Division</span> is used to hold all
        of your program information. The <span id="keyword">PROGRAM-ID</span> is
        important as it is how a 'Link Card' (More on this later) can find your
        program when compiling. <br /> <br />
        {/* Environment division */}
        <span id="keyword-ul">Environment Division</span> is for all of your
        input / output definitions. This is where you will define the input /
        output files and assign them to the appropriate DD name (JCL). <br />{" "}
        <br />
        {/* Data division */}
        <span id="keyword-ul">Data Division</span> is one of the 2 most used
        divisions. Firstly, the <span id="keyword">FILE SECTION</span> is how
        you further define the input / output files by giving each file a size,
        format and then breaking it down into variables that can be used in your
        program. <br />
        Next we have the <span id="keyword">WORKING-STORAGE SECTION</span> This
        is for declaring all of your variables to be used in your program. You
        can also pull in <span id="keyword">COPYBOOKS</span> here. (More on that
        later). We also have the <span id="keyword">LOCAL-STORAGE SECTION</span>{" "}
        but that's not as common as the{" "}
        <span id="keyword">WORKING-STORAGE SECTION</span>. Lastly for the{" "}
        <span id="keyword">DATA DIVISION</span> is the
        <span id="keyword"> LINKAGE SECTION</span>. This is for passing
        parameters from your JCL job into COBOL without having to rely on input
        / output files. Think passing parameters to a function. <br /> <br />
        <span id="keyword-ul">PROCEDURE DIVISION</span> This is where the magic
        happens. This is where all of your program logic will go. You can have{" "}
        <span id="keyword">PARAGRAPHS</span>, <span id="keyword">SECTIONS</span>
        ,<span id="keyword"> VERBS</span> and much more to put together a
        working project.
      </p>
      <hr />
      {/* VARIABLES */}
      <h1 style={{ textAlign: "left", padding: "2%" }}>Variables:</h1>
      <ul style={{ textAlign: "left" }}>
        <li>
          <span id="keyword">PIC</span> X &nbsp;- Alphanumeric
        </li>
        <li>
          <span id="keyword">PIC</span> 9 &nbsp;- Numeric
        </li>
        <li>
          <span id="keyword">PIC</span> S9 - Signed Numeric
        </li>
        <li>
          <span id="keyword">PIC</span> A &nbsp;- Alphabetic (not commonly used)
        </li>
      </ul>
      <p>
        The different variables in cobol are defined using a{" "}
        <span id="keyword">PIC</span> clause. An example of this is:
        <img
          className="img-container"
          src="public\COBOL-images\basic-pic-x.png"
          title="Basic alphanumeric variable"
        />
        <br />
        This declares a variable called 'WS-FILE-IN-ERR', reserves 9 characters
        in memory for the variable and the 'X' means it's alphanumeric data,
        which can be numeric or alphabet. Just because it reserves the 25
        characters doesn't mean you need to fill them all. Anything unused will
        get padded with spaces as a <span id="keyword">PIC</span> X and zeros as
        a <span id="keyword">PIC</span> 9. <br />
      </p>

      <h3 className="warning-header">Important note about PIC clauses!</h3>
      <div className="list-info">
        <p>
          There are different <span id="keyword">PIC</span> usage clauses. This
          is basically how the characters or values are stored in memory. The
          three main ones I will talk about are DISPLAY, COMP and COMP-3. Below
          they are grouped, however these can be defined before the{" "}
          <span id="keyword">PIC</span> or <br /> before / after the VALUE.
        </p>
        <ol>
          <li>
            <strong id="keyword">DISPLAY:</strong> This is the default. If you
            do not specify, it makes your usage clause 'DISPLAY'.
            <br />
            DISPLAY holds one character per byte of space. The below example
            uses 9 bytes to hold the value whether it has that much data or not.
            The remaining gets padded with spaces. <br />
            <img
              className="img-container"
              src="public\COBOL-images\basic-pic-x.png"
              title="Basic PIC clause defaults to DISPLAY"
            />
          </li>

          <li>
            <strong id="keyword">COMP (COMP-utation):</strong> This is mostly
            for counters and general math. It is stored as binary which allows
            for fast computation. You can group declare a{" "}
            <span id="keyword">PIC</span> usage clause by adding the usage
            clause at the ennd of the high-level group item as seen in the image
            below. <br />
            This can also be signed and be either a positive or negative. You
            may also note the 'S' in front of the '9'. This is what actually
            signs the value and makes it a signed numeric value. <br />
            <img
              className="img-container"
              src="public\COBOL-images\PIC-whole-group.png"
              title="Giving whole group a COMP usage clause"
            />
          </li>

          <li>
            <strong id="keyword">COMP-3</strong> Stored as 2 decimal digits per
            byte and a sign in the last nibble of the last byte. This is best
            for financial calculation as you can avoid binary rounding errors
            this way. When performing math calculations, make sure to keep your
            decimals as 'implied' and not 'literal'. If you want to store a
            literal, you need to use a numeric-edited field. (More on this
            later)
            <br />
            <img
              className="img-container"
              src="public\COBOL-images\comp-3-v99.png"
              title="With a signed comp-3, you can declare value as positive or negative"
            />
          </li>
        </ol>
      </div>

      <hr />
      <h1 style={{ textAlign: "left", padding: "2%" }}>Variables:</h1>
    </div>
  );
}
