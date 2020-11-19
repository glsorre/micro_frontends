export default () => {
    const home = () => {
        container
            .innerHTML = `
                <div id="microfrontend_main_container">
                    <h-import src="http://localhost:4001"></h-import>
                    <react-h-include src="http://localhost:4001" fragment="#app_content"></react-h-include>
                </div>
                <react-contianer id="microfrontend_norouting_container">
                    <h-import src="http://localhost:4002"></h-import>
                    <react-h-include src="http://localhost:4002" fragment="#app_content"></react-h-include>
                </react-contianer>
                `
    }

    const external = () => {
        container
            .innerHTML = `
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a augue finibus, tempor neque vel, tempor neque. Vestibulum vitae nibh condimentum, facilisis ante at, aliquet velit. Nulla eget mollis dui. Interdum et malesuada fames ac ante ipsum primis in faucibus. In mattis aliquet lacus eget suscipit. Integer risus lorem, pharetra a ullamcorper a, dapibus ut dolor. Aliquam erat volutpat. Curabitur vel iaculis nisl. Proin ornare, sem congue hendrerit placerat, tortor nisl ornare lorem, vitae maximus purus urna eget massa. Mauris aliquam, ligula in lobortis consequat, turpis dui mollis libero, ut rutrum nunc neque nec diam. Suspendisse potenti. Duis consectetur sit amet ante vitae sagittis. 
            </p>
            `
    }

    const notFound = () => {
        container
            .innerHTML = `<p>404 - Not found</p>`
    }

    return {
        home,
        external,
        notFound
    }
}