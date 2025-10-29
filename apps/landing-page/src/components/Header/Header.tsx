import "./Header.css"
import logo from '../../assets/flashback-logo.png'
import {Album, Menu, ShoppingCart, UserPen} from "lucide-react";

export default function Header() {
    return (
        <header id="top">
            <div className="logo">
                <img src={logo} alt="Page logo"/>
            </div>
            <div className="time-location">
                <p className="time">11:32:02</p>
                <p className="location">London</p>
            </div>
            <div className="localisation">
                <p>EN / FR</p>
            </div>
            <div className="actions">
                <div className="bookmark">
                    <Album size={18} />
                </div>
                <div className="cart">
                    <ShoppingCart size={18} />
                </div>
                <div className="profile">
                    <Menu size={18} />
                    <UserPen size={18} />
                </div>
            </div>
        </header>
    )
}
