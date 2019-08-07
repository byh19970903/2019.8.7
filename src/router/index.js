import Vue from "vue";
import VueRouter from "vue-router"
import all from "./all"

import mine from "./mine"
import songer from "./songer"
import actor from "./actor"
import director from "./director"
import performer from "./performer"
import otherss from "./otherss"
import adaptor from "./adaptor"
import yingyingying from "./yingyingying"
import xixixi from "./xixixi"
Vue.use(VueRouter)


export default new VueRouter({
    routes:[
        all,
        mine,
        songer,
        actor,
        director,
        performer,
        otherss,
        adaptor,
        yingyingying,
        xixixi
    ]
})