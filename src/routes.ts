import { router } from "./utils/route";
import Home from "./pages/Home.svelte";
import About from "./pages/About.svelte";
import Project from "./pages/Project.svelte";
import Contact from "./pages/Contact.svelte";
import Blog from "./pages/Blog.svelte";

router.register({
    path: "/", 
    component: Home, 
    name: "Home",
    iconClass: "bi bi-house"
})

router.register({
    path: "/projects", 
    component: Project, 
    name: "Projects", 
    iconClass: "bi bi-card-checklist"
})

router.register({
    path: "/blog",
    component: Blog, 
    name: "Blogs",
    iconClass: "bi bi-journal"
})

router.register({
    path: "/contact", 
    component: Contact, 
    name: "Contact",
    iconClass: "bi bi-envelope"

})

router.register({
    path: "/about", 
    component: About,
    name: "About",
    iconClass: "bi bi-file-earmark-person-fill"
})


