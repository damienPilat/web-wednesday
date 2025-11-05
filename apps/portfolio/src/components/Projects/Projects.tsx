import Card from "../Card/Card";
import type {Project} from "../../types/type";
import "./Projects.css"

export default function Projects ({projects}: {projects: Project[]}) {
    return (
        <div className="projects-container">
            {projects && projects.reverse().map((project) =>
                <Card
                    key={project.number}
                    number={project.number}
                    codeName={project.codeName}
                    date={project.date}
                    title={project.title}
                    desc={project.desc}
                    imgPath={project.imgPath}
                    variant={project.variant}
                    tech={project.tech}
                />
            )}
        </div>
    )
}
