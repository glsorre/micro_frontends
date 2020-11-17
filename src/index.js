import loadjs from 'loadjs'

import { Doubler, ReactHInclude} from './classes.js'
import { navigate } from './router.js'

window.loadjs = loadjs

if (!window.COMMON) {
    customElements.define('react-h-include', ReactHInclude)

    window.COMMON = (function() {
        var doubler = new Doubler(0) //shared variable available only inside your module

        return {
            navigate,
            doubler: {
                doublerGet() {
                    return doubler.value // this function can access my_var
                },
                doublerDouble() {
                    return doubler.double // this function can access my_var
                },
                doublerIncrement() {
                    doubler.increment() // this function can also access my_var
                }
            }
        };
    })();
}