import type {Project, Tech} from "../../types/type";
import './TechSection.css';

export default function TechSection({tech}: { tech: NonNullable<Project['tech']> }) {

    const buildIcon = (tech: Tech) => {
        switch (tech) {
            case "react":
                return (
                    <a href="https://react.dev/" target="_blank">
                        <img src="./src/assets/technology/react.svg" alt="technology icon" />
                    </a>
                )
            case "typescript":
                return (
                    <a href="https://www.typescriptlang.org/" target="_blank">
                        <img src="./src/assets/technology/typescript.svg" alt="technology icon" />
                    </a>
                )
            case "bikeApi":
                return (
                    <a href="https://api.citybik.es/v2/" target="_blank">
                        <img src="./src/assets/technology/fetchAPI.png" alt="technology icon" />
                    </a>
                )
            case "lucide":
                return (
                    <a href="https://lucide.dev/" target="_blank">
                        <img src="./src/assets/technology/lucide.svg" alt="technology icon" />
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
