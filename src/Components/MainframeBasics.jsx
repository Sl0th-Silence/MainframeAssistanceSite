export default function MainframeBasics({ header, ISPFSearch }) {
  return (
    <div className="info">
      {header}
      {ISPFSearch}
      <h1 style={{textDecoration: "underline"}}>General Mainframe Information</h1>
      <h1 id="header-h1">Accessing a Mainframe</h1>
      <p>
        The act of connecting to a Mainframe is pretty simple. There needs to be a 
        physical mainframe system running somewhere in the world that you have 
        been given access to. You can connect using an app such as Host Explorer
        or another type of "PC to Host" product. For COMP52, we will use 
        <span id="keyword"> Vista TN3270</span>.
      </p>

        <h1 id="header-h1">Security</h1>
        <h2>RACF</h2>
        <br />
        <p>
          <span id="keyword">Resource Access Control Facility</span>, or <span id="keyword">RACF</span>, 
          is IBM's security component for z/OS that identifies users, 
          authenticates them, and controls their access to mainframe resources 
          using profiles stored in a central security database.
        </p>
        <br />
        <p>
          There are many procedures put in place by users with the <span id="keyword">SPECIAL </span>
          attribute and permissions are usually administered at a Group Level.
          This simplifies the Administration of access rights and maintains security.
        </p>

        <h1 id="header-h1">Connecting to Marist Mainframe</h1>
        <h2>Vista TN3270</h2>
        For our "PC to Host" for our course, we connect to Marist College Mainframe
        using <span id="keyword">Vista TN3270. </span> We use version 1.27 and you 
        can find it <a href="https://www.tombrennansoftware.com/download.html">here.</a>
    </div>
  );
}
