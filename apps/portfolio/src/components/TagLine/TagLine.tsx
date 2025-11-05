import "./TagLine.css";

export default function TagLine () {
    return (
        <div className="tagline-container">
            <h2>Weekly learning, tinkering, and deploying</h2>
            <div className="technologies">
                <a href="https://www.typescriptlang.org/" target="_blank">
                    <img src="./src/assets/technology/typescript.svg" alt="technology icon"/>
                    <p>TypeScript</p>
                </a>
                <a href="https://react.dev/" target="_blank">
                    <img src="./src/assets/technology/react.svg" alt="technology icon"/>
                    <p>React</p>
                </a>
                <a href="https://www.vercel.com/" target="_blank">
                    <img src="./src/assets/technology/vercel-circle.png" alt="technology icon"/>
                    <p>Vercel</p>
                </a>
            </div>
        </div>
    )
}
