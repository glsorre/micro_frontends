import { Doubler } from './classes.js'
import { navigate }  from './router.js'

export default () => {
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
    }
}