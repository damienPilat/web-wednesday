export interface Project {
    number: number,
    date: string,
    title: string,
    desc: string,
    codeName: CodeNames,
    url: string,
    tech?: Tech[]
    variant?: 'primary' | 'secondary',
}

const tech = {
    react: "react",
    typescript: "typescript",
    bikeApi: "bikeApi",
    lucide: "lucide"
} as const;

export type Tech = (typeof tech)[keyof typeof tech]

const codeNames = {
    designSystem: "designSystem",
    projectPortfolio: "projectPortfolio",
    landingPage: "landingPage",
    cycleMap: "cycleMap"
} as const;

export type CodeNames = (typeof codeNames)[keyof typeof codeNames]
