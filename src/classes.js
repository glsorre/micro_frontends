import { makeObservable, observable, computed, action } from "mobx"
import ReactDOM from 'react-dom'

if (!window.COMMON) {
    require('../node_modules/h-include/lib/h-include.js')
    require('../node_modules/h-include/lib/h-include-extensions.js')
}

export class ReactHInclude extends HInclude.HIncludeElement {
    constructor() {
        super()
        return Reflect.construct(HTMLElement, arguments, ReactHInclude)
    }

    disconnectedCallback() {
        ReactDOM.unmountComponentAtNode(this.childNodes[0])
    }
}

export class Doubler {
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
        return this.value ** 2
    }

    increment() {
        this.value++
    }
}