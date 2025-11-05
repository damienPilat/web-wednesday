import './App.css'
import Heading from './components/Heading/Heading';
import TagLine from "./components/TagLine/TagLine";
import Projects from "./components/Projects/Projects";
import type {Project} from "./types/type";

const projects : Project[] = [
    {
        number: 4,
        date: '12 nov 2025',
        title: 'Design System [Coming Soon]',
        desc: 'Exploring modern design system builds',
        url: '',
        imgPath: './src/assets/thumbnail/design-system.png',
        variant: "secondary",
    },
    {
        number: 3,
        date: '5 nov 2025',
        title: 'Project blog page',
        desc: 'Compilation of all websites done for this project',
        url: 'https://web-wednesdays.vercel.app/',
        imgPath: './src/assets/thumbnail/webWed-portfolio.png',
        tech: ['typescript', 'react']
    },
    {
        number: 2,
        date: '29 oct 2025',
        title: 'Landing page',
        desc: 'Building from a design brief',
        url: 'https://web-wednesdays-landing-page.vercel.app/',
        imgPath: './src/assets/thumbnail/landing-page.png',
        variant: "secondary",
        tech: ['lucide', 'typescript', 'react']
    },
    {
        number: 1,
        date: '22 oct 2025',
        title: 'Cycle station map',
        desc: 'Visualise realtime cycle station data',
        url: 'https://london-cycle-stations.vercel.app',
        imgPath: './src/assets/thumbnail/london-cycle-stations.png',
        tech: ['bikeApi', 'typescript', 'react']
    },
]

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
