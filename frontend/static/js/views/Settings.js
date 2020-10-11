import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
    constructor(){
        super();
        this.setTitle("Settings");
    }

    async getHtml(){
        return `
            <h1> Hello from Settings </h1>
            <p> ...to my friends from the internet</p>
            <a href="/" class="nav__link" data-link>Go to Dashboard</a></br>
            <a href="/posts" class="nav__link" data-link>Go to Posts...</a>
        `;
    }

}