import WebWedLogo from "../../assets/webWed-logo.svg";

import "./Heading.css"

export default function Heading () {
    return (
        <div className="heading">
            <img src={WebWedLogo} alt="Web Wednesday Logo" style={{width: "200px"}} />
            <h1>Web Wednesdays</h1>
        </div>
    )
}
