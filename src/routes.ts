import { router } from "./utils/route";
import Home from "./pages/Home.svelte";
import About from "./pages/About.svelte";
import Project from "./pages/Project.svelte";
import Contact from "./pages/Contact.svelte";
import Blog from "./pages/Blog.svelte";

router.register({
    isMenu: true,
    path: "/", 
    component: Home, 
    name: "Home",
    iconClass: "bi bi-house"
})

router.register({
    isMenu: true,
    path: "/projects", 
    component: Project, 
    name: "Projects", 
    iconClass: "bi bi-card-checklist"
})

router.register({
    isMenu: true,
    path: "/blog",
    component: Blog, 
    name: "Blogs",
    iconClass: "bi bi-journal"
})

router.register({
    isMenu: true,
    path: "/contact", 
    component: Contact, 
    name: "Contact",
    iconClass: "bi bi-envelope"

})

router.register({
    isMenu: true,
    path: "/about", 
    component: About,
    name: "About",
    iconClass: "bi bi-file-earmark-person-fill"
})


