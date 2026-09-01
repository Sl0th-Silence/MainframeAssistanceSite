export default function Cobol({ header }) {
  return (
    <div className="info">
      {header}
      <h1>What is COBOL ?</h1>
      <h3>COBOL stands for 'CO'mmon 'B'usiness 'O'riented 'L'anguage</h3>

      <p>
        If anyone has looked into COBOL in our current industry today, you might
        see that it is still a staple for most banks and healthcare systems.
        There's a good reason for that. It's fast.
      </p>

      <p>
        You can use Java, C and C++ on z/OS but why hasn't that completely taken
        over? Honestly? Probably because of the sole amount of COBOL programs
        that are keeping the industry afloat. The why isn't important but the
        how is what I'm here to do.
      </p>
      <br />

      <h2>A Basic Refresher</h2>
      <hr />
      {/* SECTIONS */}
      <h1 style={{ textAlign: "left", padding: "2%" }}>Sections:</h1>
      <p>
        There are multiple chunks that make up a COBOL program. These are broken
        down into the following: <br />
        Divisions, Sections, Paragraphs, Sentences and Verbs (Statements).{" "}
        <br />
        <img
          className="cob-structure"
          src="public/COBOL-images/cobol-structure.png"
          title="It can be scary at first but we are scarier!"
        />
      </p>
      <hr />
      {/* VARIABLES */}
      <h1 style={{ textAlign: "left", padding: "2%" }}>Variables:</h1>
      <p>
        The different variables in cobol are defined using a PIC clause. An
        example of this is:
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
        get padded with spaces as a PIC X and zeros as a PIC 9. <br />
      </p>

      <h3 className="warning-header">Important note about PIC clauses!</h3>

      <p>
        There are different PIC usage clauses. This is basically how the
        characters or values are stored in memory. The three main ones I will
        talk about are DISPLAY, COMP and COMP-3. Below they are grouped, however
        these can be defined before the PIC or <br /> before / after the VALUE.
      </p>
      <ol className="list-info">
        <li>
          <strong>DISPLAY:</strong> This is the default. If you do not specify,
          it makes your usage clause 'DISPLAY'.
          <br />
          DISPLAY holds one character per byte of space. The below example uses
          9 bytes to hold the value whether it has that much data or not. The
          remaining gets padded with spaces. <br />
          <img
            className="img-container"
            src="public\COBOL-images\basic-pic-x.png"
            title="Basic PIC clause defaults to DISPLAY"
          />
        </li>

        <li>
          <strong>COMP (COMP-utation):</strong> This is mostly for counters and
          general math. It is stored as binary which allows for fast
          computation. This can also be signed and be either a positive or
          negative. You can also group declare a PIC usage clause: <br />
          <img
            className="img-container"
            src="public\COBOL-images\PIC-whole-group.png"
            title="Giving whole group a COMP usage clause"
          />
        </li>

        <li>
          <strong>COMP-3</strong> Stored as 2 decimal digits per byte and a sign
          in the last nibble of the last byte. This is best for financial
          calculation as you can avoid binary rounding error this way. When
          performing math calculations, make sure to keep your decimals as
          'implied' and not 'literal'. If you want to store a literal, you need
          to use a numeric-edited field. (More on this later)
          <br />
          <img
            className="img-container"
            src="public\COBOL-images\comp-3-v99.png"
            title="With a signed comp-3, you can declare value as positive or negative"
          />
        </li>
      </ol>
      <hr />
      <h1 style={{ textAlign: "left", padding: "2%" }}>Variables:</h1>
    </div>
  );
}
