import { createStore } from "vuex";

import holidaysStore from './modules/holidaysStore';

const store = createStore({
    modules : {
        holidaysStore
    }
})
export default store;