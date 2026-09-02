export default function MainframeBasics({ header, ISPFSearch }) {
  return (
    <div className="info">
      {header}
      {ISPFSearch}
      <h1>General Mainframe Information</h1>
      <h2>Connection to the mainframe</h2>
      <h3 style={{ color: "red" }}>
        This will be updated once we know which connection system we are using!
      </h3>
      <hr />
    </div>
  );
}
