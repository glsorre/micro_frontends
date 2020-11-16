import loadjs from 'loadjs'
import { makeObservable, observable, computed, action } from "mobx"
import ReactDOM from 'react-dom'

window.loadjs = loadjs

import '../node_modules/h-include/lib/h-include.js';
import '../node_modules/h-include/lib/h-include-extensions.js';

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
        return this.value ** 2
    }

    increment() {
        this.value++
    }
}

window.COMMON = (function() {
    var doubler = new Doubler(0) //shared variable available only inside your module

    return {
        doublerGet: function() {
            return doubler.value // this function can access my_var
        },
        doublerDouble: function() {
            return doubler.double // this function can access my_var
        },
        doublerIncrement: function() {
            doubler.increment() // this function can also access my_var
        }
    };
})();
