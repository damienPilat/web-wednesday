import {ArrowUpRight} from "lucide-react";
import "./CustomButton.css"

export default function CustomButton({text}: { text: string }) {
    return (
        <div className="custom-button">
            <p>{text}</p>
            <div className="icon-container">
                <ArrowUpRight className="icon" />
            </div>
        </div>
    )
}
