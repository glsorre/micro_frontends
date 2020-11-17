export default container => {
    const home = () => {
        container
            .innerHTML = `
                <div id="microfrontend_main_container">
                    <h-import src="http://localhost:4001"></h-import>
                    <react-h-include src="http://localhost:4001"></react-h-include>
                </div>
                <div id="microfrontend_norouting_container">
                    <h-import src="http://localhost:4002"></h-import>
                    <react-h-include src="http://localhost:4002"></react-h-include>
                </div>
                `
    }

    const notFound = () => {
        container
            .innerHTML = `<p>404</p>`
    }

    return {
        home,
        notFound
    }
}