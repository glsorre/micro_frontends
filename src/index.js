import loadjs from 'loadjs'

import { Doubler, ReactHInclude} from './classes.js'
import { navigate } from './router.js'

window.loadjs = loadjs

if (!window.COMMON) {
    customElements.define('react-h-include', ReactHInclude)

    window.COMMON = (function() {
        var doubler = new Doubler(0)

        return {
            navigate,
            doubler: {
                get() {
                    return doubler.value
                },
                squared() {
                    return doubler.double
                },
                increment() {
                    doubler.increment()
                }
            }
        };
    })();
}