import {Monoco} from "@monokai/monoco-react";
import "./Card.css";
import type {Project} from "../../types/type";
import TechSection from "../TechSection/TechSection";

import CycleMapThumbnail from "../../assets/thumbnail/london-cycle-stations.png"
import LandingPageThumbnail from "../../assets/thumbnail/landing-page.png"
import ProjectPortfolioThumbnail from "../../assets/thumbnail/webWed-portfolio.png"
import DesignSystemThumbnail from "../../assets/thumbnail/design-system.png"

const lightColor = 'rgba(219, 216, 253, 80%)';
const darkColor = '#080345';

export default function Card({
                                 number,
                                 date,
                                 codeName,
                                 title,
                                 desc,
                                 url,
                                 variant = "primary",
                                 tech
                             }: Project) {

    const paddedNumber = (number: number) => (Math.floor(number).toString().padStart(2, "0"))

    const backgroundColor = () => {
        switch (variant) {
            case "primary":
                return lightColor;
            case "secondary":
                return darkColor;
        }
    }

    const projectImage = () => {
        switch (codeName) {
            case "cycleMap":
                return CycleMapThumbnail;
            case "landingPage":
                return LandingPageThumbnail;
            case "projectPortfolio":
                return ProjectPortfolioThumbnail;
            case "designSystem":
                return DesignSystemThumbnail;
        }
    }

    return (
        <div className={`card ${variant}`}>
            <Monoco
                className="card-element"
                borderRadius={55}
                smoothing={1}
                background={backgroundColor()}
                clip={true}
            >
                <div className="inner-card">
                    <div className="top">
                        <div className="number">{`{ ww${paddedNumber(number)} }`}</div>
                        <div className="date">{date}</div>
                    </div>
                    <a className="image" href={url} target="_blank">
                        <img src={projectImage()} alt="Thumbnail of project"/>
                    </a>
                    <div className="bottom">
                        <h3 className="title">{title}</h3>
                        <p className="desc">{desc}</p>
                        {tech && <TechSection tech={tech}/>}
                    </div>
                </div>
            </Monoco>
        </div>
    )
}
