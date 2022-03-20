import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faFaceLaugh } from '@fortawesome/free-solid-svg-icons'
import { faFaceFrownOpen } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faUserSecret, faFaceLaugh, faFaceFrownOpen)

createApp(App)
    .use(router)
    .component("font-awesome-icon", FontAwesomeIcon)
    .mount('#app')
