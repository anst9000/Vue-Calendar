import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueTextareaAutosize from "vue-textarea-autosize";
import firebase from "firebase/app";
import "firebase/firestore";

Vue.use(VueTextareaAutosize);
Vue.config.productionTip = false;

firebase.initializeApp({
  apiKey: "AIzaSyCuEffiTXWuz1wyDikcjbjD1GStxhZUut0",
  authDomain: "calendar-ec092.firebaseapp.com",
  databaseURL: "https://calendar-ec092.firebaseio.com",
  projectId: "calendar-ec092",
  storageBucket: "calendar-ec092.appspot.com",
  messagingSenderId: "740739279014",
  appId: "1:740739279014:web:37ee8885ed19fae29aac67",
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
