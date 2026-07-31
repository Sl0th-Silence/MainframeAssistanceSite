import React, { useState } from "react"
import { useNavigate, useLocation } from "react-router-dom";

export default function HeaderDiv() {

    const navigate = useNavigate();
    const location = useLocation();

    const [selectedPage, setSelectedPage] = useState(location.pathname);
     
    const handleChange = (e) => {
        setSelectedPage(e.target.value)
        navigate(e.target.value)
    }

    return (
        <div className="header">
            <select name="navigation" className="navigation" onChange={handleChange} value={selectedPage}>
                <option value="/">Home</option>
                <option value="/mainframeBasics">Mainframe Basics</option>
                <option value="/ispf">ISPF</option>
                <option value="/cobol">COBOL</option>
                <option value="/advancedCobol">Advanced COBOL</option>
                <option value="/jcl">JCL</option>
                <option value="/terms">Termonology</option>
            </select>

            <h1 className="title">Mainframe for Dummies<br/>& College Students</h1>
            <img className='ibmlogo' src="ibm-logo-two.jpg" alt="IBM Logo" />

        </div>
    )
}