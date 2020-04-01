

require('./bootstrap');

window.Vue = require('vue');
//editor support start here......!!!!!!!!
import 'v-markdown-editor/dist/v-markdown-editor.css';
import Editor from 'v-markdown-editor'

Vue.use(Editor);
//editor support end here..........}}}}}

// support vuex start here.......!!!!!!!!
import Vuex from 'vuex'

Vue.use(Vuex)
import storeData from './store/index'
const store = new Vuex.Store(
    storeData
)
//vuex support end here.............}}}}
//moment js Date time start here...........!!!!!

import  {filter} from  './filter'
//moment js Date time end here...........}}}
//vue-router import file start here........!!!!!!
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import {routes} from "./routes";
//vue-router import file start here........}}}

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

 // Vue.component('example-component', require('./components/ExampleComponent.vue').default);
  Vue.component('admin-main', require('./components/admin/AdminMaster').default);
  Vue.component('home-main', require('./components/public/PublicMaster').default);



  //v-form start here.........!!!!!!
import { Form, HasError, AlertError } from 'vform'
window.Form=Form;
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)
//v-form end here..............}}}}


//sweet alart start here.........!!!!!
import Swal from 'sweetalert2'
window.Swal=Swal;
const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    onOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})

window.Toast=Toast;
///alart end here..........}}}}}}


//vue router instant element start......!!!!
const router = new VueRouter({
    routes, // short for `routes: routes`
    mode:'hash'
})


const app = new Vue({
    el: '#app',
    router,
    store,
    filter
});
