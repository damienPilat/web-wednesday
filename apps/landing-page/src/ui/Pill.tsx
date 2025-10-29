import "./Pill.css"

export default function Pill({text}: { text: string }) {
    return (
        <div className="pill">
            {text}
        </div>
    )
}
