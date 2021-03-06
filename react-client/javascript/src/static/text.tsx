export type ProjectEntry = {
    title: string,
    start: string,
    duration: string,
    description: string,
    tags: string[]
}

export type ConsultingEntry = {
    project: string;
    duration: string;
    description: string;
    tags: string[];
}

export type ConfigText = {
    home: any,
    work: {
        industry: ProjectEntry[],
        consulting: ConsultingEntry[]
    }
}

const config_text: ConfigText = {
    home: {
        mission: "Enable others to realize their business's dreams and visions through custom, individualized software solutions.",
        how: "We work together to discover your business's needs, brainstorm visual designs that solve the problem, and architect a technical solution that best fits the requirements.\
        Our mutual investment in this process does wonders to eliminate ambiguity in both the adventure and the final result.",
        what: {
            exploration: "We extensively explore both your business's problems and uncertainities and set expectations.\
            If we decide that we're a good fit for each other, we can go ahead and set a start date with the project.\
            It's important that neither party feels tied into the other simply because of the mutual time investment.",
            iterative_process: "Ideally, the requirements are entirely clear after the exploration but I've never seen this happen in practice.\
            Weekly meetings help continuously clarify problems and establish solutions that emerge during the development process.",
            iterative_conclusion: "I use conclusion to define the end of new work for a specific phase as there really isn't a true conclusion in the modern SDLC model.\
            We both need to happy with the work done in the phase for it to be complete.\
            Lastly, we schedule a retrospective to reflect on what went well and what we need to improve on."
        }
    },
    work: {
        industry: [
            {
                title: "Software Engineer, Waymo",
                start: "June 2020",
                duration: "1 month",
                description: "Advance and manage tooling around Waymo car-driving simulation infrastructure.",
                tags: ["Javascript", "C++", "Python", "Angular"]
            },
            {
                title: "Software Engineer, Toyota",
                start: "August 2019",
                duration: "5 months",
                description: "Design an advanced backend for a customized supply-chain management system using Quorum blockchain technology.",
                tags: ["Nodejs", "Quorum", "Typescript"]
            },
            {
                title: "SDE Intern, Amazon Web Services",
                duration: "3 months",
                start: "June 2019",
                description: "Extended the AWS Organizations tool suite by providing an API to search for policies, organizations, and accounts.",
                tags: ["Java", "Guice", "Lombok", "Mockito"]
            },
            {
                title: "SDE Intern, Intel Corporation",
                start: "June 2018",
                duration: "1 year",
                description: "Researched and implemented a PSO heuristic algorithm to identify optimal stadium camera placements for VR purposes.",
                tags: ["C++", "Python", "Java", "R"]
            }
        ],
        consulting: [
            {
                project: "3IE.IO",
                description: "Worked on both the UI and backend of a HR tool designed to improve employee engagement using decentralized identifiers.",
                duration: "2 months",
                tags: ["React.js", "Node.js", "Typescript", "Javascript", "MongoDB", "NGINX", "Kubernetes", "Docker", "Google Cloud Platform (GCP)", "Google Kubernetes Engine (GKE)", "CSS", "HTML"]
            },
            {
                project: "Buskhotel",
                description: "Implemented an advanced UI and admin management panel for a hotel deals website focused on American Spanish speakers.",
                duration: "9 months",
                tags: ["React.js", "Typescript", "Redux", "Javascript", "DynamoDB", "Nodejs", "OAuth", "Firebase", "Elasticsearch", "Redis", "NGINX", "AWS", "EC2", "Typescript", "CSS", "HTML", "REST"]
            },
            {
                project: "Rotohive",
                description: "Built the backend for a fantasy football betting site built around Ethereum & ERC20 crypto tokens.",
                duration: "4 months",
                tags: ["Nodejs", "Ethereum", "ERC20", "Firebase", "Web3js", "Javascript"]
            }
        ]
    }
};

export default config_text;