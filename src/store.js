import Vue from 'vue';
import Vuex from 'vuex';
import firebase from "firebase";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user: {
            email: "",
            password: "",
            username: "",
        }
    },
    getters: {
        email: state => state.email,
        password: state => state.password,
        username: state => state.username,
    },
    mutations: {
        setUser(state, word) {
            state.email = word.email
            state.password = word.password
            state.username = word.username
        }
    },
    actions: {
        commitUser(context, word) {
            firebase.auth().createUserWithEmailAndPassword(word.email, word.password)
                .then(() => {
                    context.commit('setUser', word)
                }).catch((error) => {
                    console.log(error);
                })

        }
    }

})
