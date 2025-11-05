import type {Project} from "../types/type.tsx";

const projects : Project[] = [
    {
        number: 4,
        codeName: "designSystem",
        date: '12 nov 2025',
        title: 'Design System [Coming Soon]',
        desc: 'Exploring modern design system builds',
        url: 'https://web-wednesday.vercel.app',
        variant: "secondary",
    },
    {
        number: 3,
        date: '5 nov 2025',
        codeName: 'projectPortfolio',
        title: 'Project blog page',
        desc: 'Compilation of all websites done for this project',
        url: 'https://web-wednesday.vercel.app',
        tech: ['typescript', 'react']
    },
    {
        number: 2,
        date: '29 oct 2025',
        codeName: 'landingPage',
        title: 'Landing page',
        desc: 'Building from a design brief',
        url: 'https://web-wednesdays-landing-page.vercel.app',
        variant: "secondary",
        tech: ['lucide', 'typescript', 'react']
    },
    {
        number: 1,
        date: '22 oct 2025',
        codeName: "cycleMap",
        title: 'Cycle station map',
        desc: 'Visualise realtime cycle station data',
        url: 'https://london-cycle-stations.vercel.app',
        tech: ['bikeApi', 'typescript', 'react']
    },
]
export default projects;
