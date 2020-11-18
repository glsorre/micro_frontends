import loadjs from 'loadjs'

import { ReactHInclude, AppContainer } from './classes.js'
import createPages from './pages.js'
import createRouter from './router.js'
import createShell from './shell.js'

window.loadjs = loadjs

customElements.define('react-h-include', ReactHInclude)
customElements.define('app-container', AppContainer)

// document.addEventListener('DOMContentLoaded', function(){
    const appContent = document.getElementById("app_content")
    appContent.shell = createShell()
    const pages = createPages(appContent)
    const router = createRouter()

    router
        .addRoute('/', pages.home, true)
        .addRoute('/users', pages.home, true)
        .addRoute('/about', pages.home, true)
        .addRoute('/external', pages.external)
        .setNotFound(pages.notFound)
        .checkSSI(appContent)
        .start()
// }, false);
