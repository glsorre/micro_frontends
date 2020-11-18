import loadjs from 'loadjs'

import { ReactHInclude, AppContainer } from './classes.js'
import createShell from './shell.js'

window.loadjs = loadjs

if (!customElements.get('react-h-include')) {
    customElements.define('react-h-include', ReactHInclude)
}

if (!customElements.get('app-container')) {
    customElements.define('app-container', AppContainer)
}

const appContent = document.getElementById("app_content")
appContent.shell = createShell()