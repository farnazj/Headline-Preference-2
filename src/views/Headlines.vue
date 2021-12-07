<template>
<v-container class="pa-3 pt-7">
    <v-row no-gutters>
        <span class="h4 question-label mb-3 font-weight-medium">Headline {{currentHeadlineIndex + 1}} of 10</span>
        <p>Consider the following article:
            <a :href="currentHeadline.url" @click="setLinkAsClicked" target="_blank">
                {{currentHeadline.url}}</a>
        </p>
    </v-row>

    <v-form ref="headlineChoiceForm"> 
        <v-row no-gutters>
            <p class="mb-0 question-label"> Which of the following headlines makes you more inclined to click on the article?</p>

            <v-radio-group v-model="clickPreference" :rules="formRules.headlineRadio" dense class="mt-2"> 
                <v-radio
                    v-for="(headline, index) in headlineChoices"
                    :key="index"
                    :label="headline.text"
                    :value="index"
                ></v-radio>
            </v-radio-group>
        </v-row>
        <v-row no-gutters class="mt-2">
            <v-textarea v-model="clickExplanation" dense rows=2 auto-grow
            label="Why?" :rules="formRules.explanationText"
            ></v-textarea>     
        </v-row>

        <v-row no-gutters class="mt-7">
            <p class="mb-0 question-label"> Which of the two headlines would you prefer to see for the article? (For example, if this article appeared in your social media feed)</p>
            <v-radio-group v-model="seePreference" :rules="formRules.headlineRadio" dense class="mt-2">
                <v-radio
                    v-for="(headline, index) in headlineChoices"
                    :key="index"
                    :label="headline.text"
                    :value="index"
                ></v-radio>
            </v-radio-group>
        </v-row>

        <v-row no-gutters class="mt-2">
            <v-textarea v-model="preferExplanation" dense rows=2 auto-grow
            label="Why?" :rules="formRules.explanationText"
            ></v-textarea>        
        </v-row>

    </v-form>

    <v-row no-gutters class="mt-7">
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
        clickPreference: null,
        clickExplanation: '',
        seePreference: null,
        preferExplanation: '',
        linkedClicked: false,
        formRules: {
            headlineRadio: [
                v => v != null || 'Please choose one of the options'
            ],
            explanationText: [
                v => !!v || 'Please explain why'
            ]
        },
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

        utils.shuffleArray(choices);
        choices.push({
            text: 'Neither',
            value: 'neither'
        })

        return choices;
    },
    ...mapGetters(['currentHeadline', 'user']),
    ...mapState(['currentHeadlineIndex'])
  },
  methods: {
   loadNext: function() {

        if (this.$refs.headlineChoiceForm.validate()) {

            logging.sendResponse(
                this.currentHeadline.index,
                this.currentHeadline.titleId,
                this.headlineChoices[this.clickPreference].text,
                this.headlineChoices[this.clickPreference].value,
                this.clickExplanation,
                this.headlineChoices[this.seePreference].text,
                this.headlineChoices[this.seePreference].value,
                this.preferExplanation,
                this.linkedClicked,
                this.user.participantId,
                this.user.email);

            if (this.currentHeadlineIndex == constants.HEADLINE_PER_USER - 1) {
                this.cleanUpStorage();
                this.$router.push({ name: 'demographics' });
            }
            else {
                this.loadNextHeadline()
                .then(() => {
                    this.$refs.headlineChoiceForm.reset();
                    this.linkedClicked = false;
                })
            }
        }
   
   },
   setLinkAsClicked: function() {
       this.linkedClicked = true;
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