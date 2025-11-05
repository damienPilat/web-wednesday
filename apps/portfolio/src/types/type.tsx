export interface Project {
    number: number,
    date: string,
    title: string,
    desc: string,
    url: string,
    imgPath: string,
    tech?: ("react" | "typescript" | "bikeApi" | "lucide")[]
    techBis?: Tech[]
    variant?: 'primary' | 'secondary',
}

const tech = {
    react: "react",
    typescript: "typescript",
    bikeApi: "bikeApi",
    lucide: "lucide"
} as const;

export type Tech = (typeof tech)[keyof typeof tech]
