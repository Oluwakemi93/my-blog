import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        blogs:[{
            id: 1,
            title:'The Power of Humor in Healthcare',
            author: 'Ashley Abramson',
            content: 'I should just rent a room here,” I told the kind-eyed RN as she struggled to find a vein for the IV. She looked up from my arm, chuckled, and quipped back a joke about how insurance probably wouldn’t cover that lengthy of a stay. Before I knew it, the IV was in. Maybe it was the cold saline, but something about that exchange brought me back to myself, reminding me that even in the trenches of a really tough situation, it was possible to connect — and maybe even to feel a bit better.'
        },
        {
            id: 2,
            title: 'Maybe Let’s Not Try to Talk to Aliens',
            author: 'Owen Williams',
            content: 'lmost five years ago, Google debuted a splashy new project called Accelerated Mobile Pages (AMP) that promised to speed up load times on websites accessed via phone. Fast-forward to today, and AMP has grown into something much more ambitious: Earlier this month, Google rolled out a new feature that allows AMP to use server-side rendering (SSR), boosting performance for sites that adopt the technology across their entire domain.'
        }
    ]
    },
    mutations: {
        addPost(state, post) {
            Vue.set(state, "blogs", [...state.blogs, post])
        },
        // delPost(state, post) {
        //     Vue.set(state, "blogs", [...state.blogs, post])
        // }
    }
    // getters: {
    //     post: ({post}) => post
    // }
});
