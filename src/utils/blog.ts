import { router } from "./route"
//@ts-ignore
import BlogDetail from "../pages/blog_component/blogDetail.svelte"

// Import all blogs here
import blogContent_20_09_2024 from "../blogs/20_09_2024"
import blogContent_21_04_2024 from "../blogs/21_04_2024"

export type blog = {
    id: string,
    title: string, 
    paragraphs: Array<string>, 
    publishedAt: string, 
    author: string,
    metadata: blogMetadata
}

export type blogMetadata = {
    id: string,
    title: string, 
    shortDescription: string,
    author: string 
}

// Register blog route from id
export const blogs = [
    blogContent_20_09_2024,
    blogContent_21_04_2024
];

for(const blog of blogs){
    router.register({
        isMenu: false,
        childFrom: "blog",
        path: `/blog/${blog.id}`,
        name: blog.title,
        component: BlogDetail,
    })    
}