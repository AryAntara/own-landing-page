import type { SvelteComponent } from "svelte"
//@ts-ignore
import NotFound from "../pages/errors/NotFound.svelte"

export type Route = {
    path: string, 
    component: SvelteComponent
    name: string,
    iconClass: string,
    active?: boolean
} 

class Router {
    private collections: Array<Route> = [];
    
    // register new route 
    register(route: Route){ 
        this.collections.push(route);
    }

    // render component equals to path
    render(path: string) {
        const routeCollections = this.collections,
        route = routeCollections.find((route: Route) => route.path === path); 

        if(!route) return NotFound; 
        route.active = true;
        return route.component;
    }

    // list all routes, only return path
    list(){
        return this.collections.map((route: Route) => {
            return route;
        })
    }
}

export const router = new Router;