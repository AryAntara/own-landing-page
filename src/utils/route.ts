import type { SvelteComponent } from "svelte"
//@ts-ignore
import NotFound from "../pages/errors/NotFound.svelte"

export type Route = {
    childFrom?: string,
    isMenu: boolean,
    path: string, 
    component: SvelteComponent
    name: string,
    iconClass?: string,
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

        if(route.childFrom){
            let parentRoute = routeCollections.find(routeEntry => routeEntry.path == `/${route.childFrom}`)
            console.log(routeCollections, route)
            if(parentRoute) parentRoute.active = true;
            console.log(parentRoute);
        }

        return route.component;
    }

    // list all routes, only return path
    list(){
        return this.collections.filter((route: Route) => {
            return route.isMenu;
        })
    }
}

export const router = new Router;