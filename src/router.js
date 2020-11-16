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

updatePageComponent(window.location)