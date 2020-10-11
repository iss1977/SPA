import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
    constructor(){
        super();
        this.setTitle("Posts");
    }

    async getHtml(){
        return `
            <h1> Hello from Posts </h1>
            <p> ...to my friends from the internet</p>
            <a href="/" class="nav__link" data-link>Go to Dashboard</a></br>
            <a href="/settings" class="nav__link" data-link>Go to Settings...</a>
        `;
    }

}