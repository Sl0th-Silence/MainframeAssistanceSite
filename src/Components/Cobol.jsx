export default function Cobol({header})
{   
    return (
    <div className="info">
        {header}
        <h1>COBOL . Josh tried didn't he..?</h1>
        <h2>What is COBOL ?</h2>
        <h3>COBOL stands for 'CO'mmon 'B'usiness 'O'riented 'L'anguage</h3>

        <p>If anyone has looked into COBOL in our current industry today, you might
           see that it is still a staple for most banks and healthcare systems. Theres
           a good reason for that. It's fast. 
        </p>
        <p>You can use Java, C and C++ on z/OS but why hasn't that completely taken
           over? Honestly? Probably because of the sole amount of COBOL programs that are
           keeping the industry afloat. The why isn't important but the how is what I'm here 
           to do.
        </p>
        <br />
        <h2>A Basic Refresher</h2>
        <hr />
        <h2 style={{textAlign:"left", padding:"2%"}}>Variables:</h2>
        <p>The different variables in cobol are defined using a PIC clause. An example 
           of this is: 'WS-FIRST-NAME     PIC X(25).' <br/>
           This declares a variable called 'WS-FIRST-NAME', reserves 25 characters in memory 
           for the variable and the 'X' means it's alphanumeric data. Just because it reserves 
           the 25 characters doesn't mean you need to fill them all. Anything unused will get padded 
           with spaces as an 'X' and zeros as a '9' (numeric). <br/>
        </p>
        <h3 style={{color: "red"}}>Important note about PIC clauses!</h3>
        <p>There are different PIC usage clauses. This is basically how the characters or values are stored
            in memory. The three main ones I will talk about are DISPLAY, COMP and COMP-3.
        </p>
        <ol>
            <li>
                DISPLAY: This is the default. If you do not specify, it makes your usage clause 'DISPLAY'.<br/>
                DISPLAY holds one character per byte of space. <br/> So for WS-NAME PIC X(03) DISPLAY VALUE 'JAY'. <br /> it
                is held in 3 bytes: 'J', 'A', 'Y'.
            </li>
            <li>
                COMP (COMP-utation): This is mostly for counters and general math. It is stored as binary
                which allows for fast computation. This can also be signed and be either a positive or negative.
            </li>
            <li>
                COMP-3: Stored as 2 decimal digits per byte and a sign in the last nibble of the last byte. This is best for 
                financial calculation as you can avoid binary rounding error this way.
            </li>
        </ol>
        
    </div>
    )
}