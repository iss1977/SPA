
import Dashboard from "./views/Dashboard.js";
import Posts from "./views/Posts.js";
import Settings from "./views/Settings.js";


// we define the function navigate to a new adress/link without refreshing the page.
// each time a link in the html file has an "data-link" attribut, me must use this function to navigate to the requested adress.

const navigateTo = (url) => {
    history.pushState(null,null,url);
    router(); // we call the router function to handle the new inserted item in browser history.
};


const router = async ()=>{

    // delete this after fun ....
    if (typeof window.totalCalls === 'undefined') {
        window.totalCalls = 0;
    }
    window.totalCalls ++;
    console.log('%cRouter function was called. '+window.totalCalls +" times since last reload" , 'background: #444; color: #fff; padding: 4px; border-radius:2px');
    // ---------------------- ...

    const routes = [
        {path:"/", view: Dashboard},
        {path:"/posts", view: Posts},
        {path:"/settings", view: Settings},
    ];

    // Test each router for potential match

    const potentialMatches = routes.map(route =>{
        return {
            route: route,
            isMatch : location.pathname === route.path
        }
    });

    console.log("The list of potential matches is :");
    console.table(potentialMatches);

    let match = potentialMatches.find( (arrElem)=> {
        return arrElem.isMatch; // at first true, find() will return the array element, witch is in routes[] an object.
    });


        // if match is undefined, means that we couldn't find the requested route, and will default to first item in routes array.

    if (typeof match === 'undefined') {
        console.log('%c Undefined route. Redirecting to : '+routes[0].path, 'background: #eff; color:red; padding: 2px; border:2px solid red');

        match = {
            route : routes[0],
            isMatch : true
        }
    }

    console.log('%c Found the route: '+match.route.path, 'background: #444; color: #bada55; padding: 2px; border-radius:2px');

    // get the current class attached to the "route:view" object element and make an object.
    const view = new match.route.view();
    document.getElementById("app").innerHTML= await view.getHtml();


};

window.addEventListener('popstate', (event) => {
    console.log('%c    <-   browser   ->    %cNavigation was used. Calling our router() function to refresh the view.', 'background: #444; color: yellow; padding: 2px; border-radius:2px','background: #444; color: #eee; padding: 2px; border-radius:2px');

    router();
    console.log("location: " + document.location + ", state: " + JSON.stringify(event.state));
});


document.addEventListener("DOMContentLoaded", ()=>{

    // we set an event click event listner for all elemets and look if it has the attribut "[data-link]". If it has, we should use our "navigateTo" function.
    document.body.addEventListener("click", (e) => {
        if(e.target.matches("[data-link]")){
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });
    router();
});