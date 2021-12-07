<template>
<v-container class="pa-3 pt-7">
    <v-row no-gutters>
        <p>Consider the following article:
            <a :href="currentHeadline.url" @click="setLinkAsClicked" target="_blank">
                {{currentHeadline.url}}</a>
        </p>
    </v-row>

    <v-row no-gutters>
        <p class="mb-0 question-label"> Which of the following headlines makes you more inclined to click on the article?</p>

        <v-radio-group v-model="clickPreference"> 
            <v-radio
                v-for="(headline, index) in headlineChoices"
                :key="index"
                :label="headline.text"
                :value="index"
            ></v-radio>
        </v-radio-group>
    </v-row>
    <v-row no-gutters>
         <v-textarea model="clickExplanation" dense rows=2 auto-grow
          label="Why?"
        ></v-textarea>     
    </v-row>

    <v-row no-gutters class="mt-7">
           
        <p class="mb-0 question-label"> Which of the two headlines would you prefer to see on the article?</p>
        <v-radio-group v-model="seePreference">
            <v-radio
                v-for="(headline, index) in headlineChoices"
                :key="index"
                :label="headline.text"
                :value="index"
            ></v-radio>
        </v-radio-group>
    </v-row>
    <v-row no-gutters>
        <v-textarea model="preferExplanation" dense rows=2 auto-grow
          label="Why?"
        ></v-textarea>        
    </v-row>



    <v-row no-gutters class="mt-5">
        <v-btn color="primary" @click="loadNext"> Next</v-btn>
    </v-row>
</v-container>
</template>


<script>
import utils from '@/lib/utils'
import logging from '@/lib/logging'
import constants from '@/lib/constants'
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  components: {
  },
  data () {
    return {
        seePreference: null,
        clickPreference: null,
        preferExplanation: '',
        clickExplanation: '',
        linkedClicked: false
    }
  },
  computed: {
    headlineChoices: function() {

        let choices = [{
            text: this.currentHeadline.suggested,
            value: 'alt'
        }, {
            text: this.currentHeadline.original,
            value: 'original'
        }];

        console.log('before shuffle', choices)
        utils.shuffleArray(choices);
        console.log('after shuffle', choices)

        return choices;
    },
    ...mapGetters(['currentHeadline']),
    ...mapState(['currentHeadlineIndex'])
  },
  created() {
  },
  methods: {
   loadNext: function() {
    // logging.sendTest('that one', 'because');
        if (this.currentHeadlineIndex == constants.HEADLINE_PER_USER - 1) {
            this.cleanUpStorage();
            this.$router.push({ name: 'demographics' });
        }
        else {
            this.loadNextHeadline()
            .then(() => {
                this.seePreference = null;
                this.clickPreference = null;
                this.preferExplanation = '';
                this.clickExplanation = '';
                this.linkedClicked = false;
            })
        }
   },
   setLinkAsClicked: function() {
       this.linkedClicked = true;
       console.log('link was clicked')
   },
   ...mapActions(['loadNextHeadline', 'cleanUpStorage'])
  }
}
</script>

<style scoped>
.question-label {
    width: 100%;
}
</style>