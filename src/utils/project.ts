import type { SvelteComponent } from "svelte";

import TypescriptIcon from "../components/Icons/typescript.svelte";
import SvelteIcon from "../components/Icons/svelte.svelte"
import PHPIcon from "../components/Icons/php.svelte"
import LaravelIcon from "../components/Icons/laravel.svelte"

export type Project = {
    title: string,
    description: string,
    technologies: Array<LangIcon>, // icon based
    webLink?: string,
    sourceLink?: string
}

const typescriptIcon: LangIcon = {
    name: "typescript",
    svgElement: TypescriptIcon
}
    , svelteIcon: LangIcon = {
        name: "svelte",
        svgElement: SvelteIcon
    }
    , phpIcon: LangIcon = {
        name: "php",
        svgElement: PHPIcon
    }
    , laravelIcon: LangIcon = {
        name: "laravel",
        svgElement: LaravelIcon
    }


export type LangIcon = {
    name: string,
    svgElement: SvelteComponent
}

export const projects: Array<Project> = [
    {
        title: 'Personal web',
        description: "This is my personal website, i was place my blogs, projects, and more. So you can check it out.",
        technologies: [
            typescriptIcon, svelteIcon
        ],
        webLink: 'http://localhost:5173',
        sourceLink: 'https://github.com/AryAntara/own-landing-page'
    },
    {
        title: 'Forstaff',
        description: "At Pt. Guna Teknologi Nusantara, my team and I built projects for management staff.",
        webLink: "http://forstaff.id",
        technologies: [
            phpIcon, laravelIcon
        ]
    }
];

