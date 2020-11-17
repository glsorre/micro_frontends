const ROUTE_PARAMETER_REGEXP = /:(\w+)/g
const URL_FRAGMENT_REGEXP = '([^\\/]+)'
const TICKTIME = 200

const extractUrlParams = (route, pathname) => {
    const params = {}

    if (route.params.length === 0) {
        return params
    }

    const matches = pathname
        .match(route.testRegExp)

    matches.shift()

    matches.forEach((paramValue, index) => {
        const paramName = route.params[index]
        params[paramName] = paramValue
    })

    return params
}

export default () => {
    const routes = []
    let notFound = () => { }
    let lastPathname

    const router = {}

    const checkRoutes = () => {
        const { pathname } = window.location
        if (lastPathname === pathname) {
            return
        }

        const lastRoute = routes.find(route => {
            const { testRegExp } = route
            return testRegExp.test(lastPathname)
        })
        
        lastPathname = pathname

        const currentRoute = routes.find(route => {
            const { testRegExp } = route
            return testRegExp.test(pathname)
        })  

        if (lastRoute && lastRoute.managed && currentRoute && currentRoute.managed) {
            return
        }

        if (!currentRoute) {
            notFound()
            return
        }

        const urlParams = extractUrlParams(currentRoute, pathname)
        currentRoute.callback(urlParams)
    }

    router.addRoute = (path, callback, managed=false) => {
        const params = []

        const parsedPath = path
            .replace(
                ROUTE_PARAMETER_REGEXP,
                (match, paramName) => {
                    params.push(paramName)
                    return URL_FRAGMENT_REGEXP
                })
            .replace(/\//g, '\\/')

        routes.push({
            testRegExp: new RegExp(`^${parsedPath}$`),
            callback,
            params,
            managed
        })

        return router
    }

    router.setNotFound = cb => {
        notFound = cb
        return router
    }

    router.checkSSI = (container) => {
        if (container.classList.contains("ssi")) {
            lastPathname = window.location.pathname
        }
        return router
    }

    router.navigate = path => {
        window
            .history
            .pushState(null, null, path)
    }

    router.start = () => {
        checkRoutes()
        window.setInterval(checkRoutes, TICKTIME)
    }

    return router
}