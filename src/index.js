import { createBrowserHistory } from 'history'
import loadjs from 'loadjs'
import { makeObservable, observable, computed, action } from "mobx"
import ReactDOM from 'react-dom'

class Doubler {
    value

    constructor(value) {
        makeObservable(this, {
            value: observable,
            double: computed,
            increment: action
        })
        this.value = value
    }

    get double() {
        return this.value * 2
    }

    increment() {
        this.value++
    }
}

class ReactHInclude extends HInclude.HIncludeElement {
    constructor() {
        super()
        return Reflect.construct(HTMLElement, arguments, ReactHInclude)
    }

    disconnectedCallback() {
        ReactDOM.unmountComponentAtNode(this.childNodes[0])
    }
}

customElements.define('react-h-include', ReactHInclude)

window.doubler = new Doubler(5)
window.loadjs = loadjs

import '../node_modules/h-include/lib/h-include.js';
import '../node_modules/h-include/lib/h-include-extensions.js';

const appContent = document.getElementById("app_content");

const routes = {
    "/": () => `
        <div id="microfrontend_main_container">
            <h-import src="http://localhost:4001"></h-import>
            <react-h-include src="http://localhost:4001"></react-h-include>
        </div>
        <div id="microfrontend_norouting_container">
            <h-import src="http://localhost:4002"></h-import>
            <react-h-include src="http://localhost:4002"></react-h-include>
        </div>
        `,
    "/about": () => `
        <div id="microfrontend_main_container">
            <h-import src="http://localhost:4001"></h-import>
            <react-h-include src="http://localhost:4001"></react-h-include>
        </div>
        <div id="microfrontend_norouting_container">
            <h-import src="http://localhost:4002"></h-import>
            <react-h-include src="http://localhost:4002"></react-h-include>
        </div>
        `,
    "/users": () => `
        <div id="microfrontend_main_container">
            <h-import src="http://localhost:4001"></h-import>
            <react-h-include src="http://localhost:4001"></react-h-include>
        </div>
        <div id="microfrontend_norouting_container">
            <h-import src="http://localhost:4002"></h-import>
            <react-h-include src="http://localhost:4002"></react-h-include>
        </div>
    `,
    "/notfound": () => `
        <div>404</div>
        `
};

function findComponentName(pathname) {
    const path = pathname || window.location.pathname
    return routes[path] || routes["/notfound"]
}

function updatePageComponent(location) {
    appContent.innerHTML = findComponentName(location.pathname)()
}

const history = createBrowserHistory()
window.appHistory = history
history.listen(updatePageComponent)
updatePageComponent(window.location)

document.addEventListener("popstate", updatePageComponent)

document.addEventListener("click", e => {
    console.log(e.target)
    if (e.target.nodeName === "A") {
        const href = e.target.getAttribute("href")
        history.push(href)
        e.preventDefault()
    }
})