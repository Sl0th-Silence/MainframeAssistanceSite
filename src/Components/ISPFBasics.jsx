export default function ISPFBasics({header})
{   
    return (
    <div className="info">
        {header}
        <h1>ISPF Basics</h1>
        <h2>ISPF Main Screen</h2>
        <p> Mainframe navigation can be weird at first. From MVS to z/OS, it can take awhile to feel confident in navigation 
            and ease of use. There are a few commands we will go over to make more sense of everything and whatever you do,
            do NOT change your keymapping or this will make no sense! <br /> <br />
        </p>
        <h4>Primary Commands</h4>
        <p>The primary commands are anything written to the main command line at the top of the screen. This can be either a 
           selector for the options below, such as the 'ISPF Primary Option Menu', or it could be a command line while adding
           or editing files, or even inside of a COBOL program.
        </p>
        <img src="public/select-option.png" alt="selectOption" width="150px" height="50px"/>
        <img src="public/Command-option.png" alt="commandOption" width="150px" height="50px"/>
        <img src="public/Command-Cobol.png" alt="CobolOption" width="150px" height="150px"/>
        <hr />
        <p>The differences between the two option lines depend on which screen you are on. When working on a COBOL program or 
           searching a dataset, you can use the 'F' or 'FIND' command with a like of text to search the current data stream 
           for results. You can either write one word or define a specific string by using quotes.
        </p>
        <img src="public/F-WS-PAGE-NUM.png" alt="F-WS-PAGE-NUM" width="150px" height="30px"/>

        <p>They also are not case sensitive for searching.</p>
        
        <img src="public/f-string.png" alt="f-string" width="150px" height="50px"/>
    </div>
    )
}