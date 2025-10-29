import "./ExperienceSection.css";
import waterScene from '../../assets/water-topdown.png'
import TextCard from "../../ui/TextCard.tsx";

export default function ExperienceSection () {
    return (
        <div className="experience-container">
            <div className="photo-section">
                <img src={waterScene} alt="Water scene"/>
            </div>
            <div className="text-section">
                <h2>Hassle-free experience</h2>
                <p>Cherish your special day with stunning visuals.</p>
            </div>
            <div className="card-section">
                <TextCard text="Paris" subTextOne="here" subTextTwo="now" />
            </div>
        </div>
    )
}
