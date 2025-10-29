import "./FooterSection.css";
import {ArrowUp, Send} from "lucide-react";
import logo from '../../assets/flashback-logo.png'

export default function FooterSection() {
    return (
        <footer>
            <div className="description">
                <p>Here for whatever you want in life</p>
            </div>
            <div className="links">
                <ul>
                    <li>Home</li>
                    <li>Services</li>
                    <li>About</li>
                    <li>Product</li>
                </ul>
            </div>
            <div className="to-top">
                <div className="button">
                    <a href="#top"><ArrowUp /></a>
                </div>
            </div>
            <div className="contact">
                <input type="email" />
                <Send />
            </div>
            <div className="logo">
                <img src={logo} alt="logo"/>
            </div>
        </footer>
    )
}
