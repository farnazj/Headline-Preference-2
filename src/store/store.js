import Vue from 'vue'
import Vuex from 'vuex'
import headlines from '@/suggestedHeadlines'
import utils from '@/lib/utils'
import constants from '@/lib/constants'

Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    identifier: null,
    displayedHeadlines: [],
    currentHeadlineIndex: null,
    user: JSON.parse(localStorage.getItem('userToken')) || ''
  },
  getters: {
    user: (state) => {

      if (Object.entries(state.user).length)
        return state.user;
      else {
        return JSON.parse(localStorage.getItem('userToken'));
      }
    },
    currentHeadline: (state) => {
      return state.displayedHeadlines[state.currentHeadlineIndex];
    }
  },
  mutations: {
    setup_user: (state, data) => {
      localStorage.setItem('userToken', JSON.stringify(data.user));
      state.user = Object.assign({}, data.user);
      state.displayedHeadlines = data.displayedHeadlines;
      state.currentHeadlineIndex = 0;
    },
    advance_headline: (state) => {
      state.currentHeadlineIndex += 1;
    }
  },
  actions: {
    setup: (context, user) => {
      return new Promise((resolve, reject) => {

        let displayedHeadlines = utils.getRandomSubarray(headlines, constants.HEADLINE_PER_USER);
        context.commit('setup_user', { user: user, displayedHeadlines: displayedHeadlines });
        console.log('what are chosen headlines', context.state.displayedHeadlines)
        resolve();
      });

    },
    loadNextHeadline: (context) => {
      return new Promise((resolve, reject) => {
        context.commit('advance_headline');
        console.log('current headline index after change', state.currentHeadlineIndex)
        resolve();
      })
      
    }
  }
})

export default store;