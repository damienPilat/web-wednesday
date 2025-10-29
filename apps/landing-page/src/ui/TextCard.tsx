import {ArrowRight} from "lucide-react";
import "./TextCard.css";

interface TextCardProps {
    text: string;
    subTextOne: string;
    subTextTwo: string;
    numbered?: number;
    angled?: boolean;
    className?: string;
}

export default function TextCard({
    text,
    subTextOne,
    subTextTwo,
    numbered,
    angled,
    className
}: TextCardProps) {
    return (
        <div className={`text-card-container ${angled && 'angled'} ${className && className}`}>
            <div className="button">
                <ArrowRight size={16} />
            </div>
            <p>{text}</p>
            <footer>
                <p>({subTextOne})</p>
                <p>({subTextTwo})</p>
                {numbered && <p>0{numbered}</p>}
            </footer>
        </div>
    )

}
