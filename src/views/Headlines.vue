<template>
<v-container>
    <v-row no-gutters>
        <v-col>
            <p>Consider the following article:
                <a :href="currentHeadline.url" @click="setLinkAsClicked" target="_blank">
                    {{currentHeadline.url}}</a>
            </p>
            <p> Which of the following headlines would you like to see on the article?</p>
            <v-radio-group v-model="headlineRadio">
                <v-radio
                    v-for="(headline, index) in headlineChoices"
                    :key="index"
                    :label="headline.text"
                    :value="index"
                ></v-radio>
            </v-radio-group>
        </v-col>
    </v-row>
    <v-row no-gutters>
        <v-textarea model="explanation" dense rows=2 auto-grow
          label="Why?"
        ></v-textarea>        
    </v-row>
    <v-row no-gutters>

        <v-btn color="primary" @click="loadNext"> Next</v-btn>
    </v-row>
</v-container>
</template>


<script>
import utils from '@/lib/utils'
import logging from '@/lib/logging'
import constants from '@/lib/constants'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
  },
  data () {
    return {
        headlineRadio: null,
        explanation: '',
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
    ...mapGetters(['currentHeadline'])
  },
  created() {
  },
  methods: {
   loadNext: function() {
    // logging.sendTest('that one', 'because');
        if (this.currentHeadlineIndex == constants.HEADLINE_PER_USER - 1)
            this.$router.push({ name: 'demographics' });
        else {
            this.loadNextHeadline();
        }

   },
   setLinkAsClicked: function() {
       this.linkedClicked = true;
       console.log('link was clicked')
   },
   ...mapActions(['loadNextHeadline'])
  }
}
</script>