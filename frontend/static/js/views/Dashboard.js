import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
    constructor(){
        super();
        this.setTitle("Dashboard");
    }

    async getHtml(){
        return `
            <h1> Hello from Dashboard </h1>
            <p> ...to my friends from the internet</p>
            <a href="/posts" class="nav__link" data-link>Go to Posts</a> </br>
            <a href="/settings" class="nav__link" data-link>Go to Settings</a>
        `;
    }

}