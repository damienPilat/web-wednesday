import ReactLogo from '../../assets/technology/react.svg';
import TypescriptLogo from '../../assets/technology/typescript.svg';
import FetchApiLogo from '../../assets/technology/fetchAPI.png';
import LucideLogo from '../../assets/technology/lucide.svg';
import type {Project, Tech} from "../../types/type";
import './TechSection.css';

export default function TechSection({tech}: { tech: NonNullable<Project['tech']> }) {

    const buildIcon = (tech: Tech) => {
        switch (tech) {
            case "react":
                return (
                    <a href="https://react.dev/" target="_blank">
                        <img src={ReactLogo} alt="technology icon" />
                    </a>
                )
            case "typescript":
                return (
                    <a href="https://www.typescriptlang.org/" target="_blank">
                        <img src={TypescriptLogo} alt="technology icon" />
                    </a>
                )
            case "bikeApi":
                return (
                    <a href="https://api.citybik.es/v2/" target="_blank">
                        <img src={FetchApiLogo} alt="technology icon" />
                    </a>
                )
            case "lucide":
                return (
                    <a href="https://lucide.dev/" target="_blank">
                        <img src={LucideLogo} alt="technology icon" />
                    </a>
                )
            default:
                return;
        }
    }

    return (
        <div className="tech-section">
            {tech.map((tech) => (
                buildIcon(tech)
            )
            )}
        </div>
    )
}
