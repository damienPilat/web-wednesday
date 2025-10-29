import Pill from "../../ui/Pill.tsx";
import {MoveDown} from "lucide-react";
import CustomButton from "../../ui/CustomButton.tsx";
import TextCard from "../../ui/TextCard.tsx";
import "./IntroSection.css"

export default function IntroSection() {
    return (
        <section className="container">
            <div className="start">
                <Pill text="welcome"/>
                <div className="contact-container">
                    <div className="contact-text">
                        <p>Contact</p>
                    </div>
                    <div className="contact-arrow">
                        <MoveDown/>
                    </div>
                </div>
            </div>
            <div className="middle">
                <h1>Explore the world with us</h1>
                <CustomButton text="Learn more"/>
            </div>
            <div className="end">
                <TextCard
                    className="destination-card"
                    text="Explore our curated list of must-visit destinations around the globe."
                    subTextOne="First"
                    subTextTwo="Present"
                    numbered={1}
                    angled={true}
                />
            </div>
        </section>
    )
}
