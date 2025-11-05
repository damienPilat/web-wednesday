import ReactLogo from '../../assets/technology/react.svg';
import TypescriptLogo from '../../assets/technology/typescript.svg';
import VercelLogo from '../../assets/technology/vercel.svg';
import "./TagLine.css";

export default function TagLine () {
    return (
        <div className="tagline-container">
            <h2>Weekly learning, tinkering, and deploying</h2>
            <div className="technologies">
                <a href="https://www.typescriptlang.org/" target="_blank">
                    <img src={TypescriptLogo} alt="Typescript Logo"/>
                    <p>TypeScript</p>
                </a>
                <a href="https://react.dev/" target="_blank">
                    <img src={ReactLogo} alt="React Logo"/>
                    <p>React</p>
                </a>
                <a href="https://www.vercel.com/" target="_blank">
                    <img src={VercelLogo} alt="Vercel Logo"/>
                    <p>Vercel</p>
                </a>
            </div>
        </div>
    )
}
