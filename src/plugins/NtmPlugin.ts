/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'


export default defineNuxtPlugin(() => {

    /* add icons to the library */
    library.add(faUserSecret)

    return {
        provide: {}
    }
})
