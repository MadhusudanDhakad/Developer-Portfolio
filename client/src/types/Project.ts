export interface Project {
    _id?: string;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    github?: string;
    liveDemo?: string;
    createdAt?: string;
    updatedAt?: string;
}