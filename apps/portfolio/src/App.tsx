import projects from "./data/projects";
import Heading from './components/Heading/Heading';
import TagLine from "./components/TagLine/TagLine";
import Projects from "./components/Projects/Projects";
import './App.css'


function App() {
    return (
        <>
            <Heading/>
            <TagLine/>

            <Projects projects={projects} />
        </>
    )
}
export default App;
