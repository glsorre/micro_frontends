
import createRouter from './router.js'
import createPages from './pages.js'

const container = document.getElementById('app_content')

const pages = createPages(container)
const router = createRouter()

router
    .addRoute('/', pages.home, true)
    .addRoute('/users', pages.home, true)
    .addRoute('/about', pages.home, true)
    .addRoute('/external', pages.external)
    .setNotFound(pages.notFound)
    .checkSSI(container)
    .start()
