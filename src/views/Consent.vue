<template>
  <v-container class="pa-3 pt-8">
    <v-row no-gutters class="font-weight-bold">
      <p>
        Thank you for your interest in participating in the study. What follows is a brief overview of the research we are completing with your assistance.
      </p>
      
      <p>Participation in this study is voluntary. You can decline to answer or stop participation at any time.</p>
      <p>You should read the information below, and ask questions about anything you do not understand, before deciding whether to participate.</p>

      <p class="full-block"> <span class="font-weight-black">PROJECT TITLE: </span> Evaluation of News Headlines</p>
    
      <p class="full-block"><span class="font-weight-black">INVESTIGATORS:</span><br>
      Principal investigator: Farnaz Jahanbakhsh, PhD student, MIT CSAIL, farnazj@mit.edu</p>

<p><span class="font-weight-black">Faculty sponsor:</span> David Karger, Professor, MIT CSAIL, karger@mit.edu</p>
<p><span class="font-weight-black">
INVITATION TO PARTICIPATE:</span> You are invited to participate in this study if you&nbsp;at least occasionally read news online.</p>

<p>To be eligible to participate, you must be 18 years of age or older, be a US citizen or permanent resident, and at least occasionally read news online.</p>

<p><span class="font-weight-black">PURPOSE OF THE STUDY:</span> This study is designed to evaluate what news headlines news consumers prefer.</p>
<br>
<p><span class="font-weight-black">PARTICIPATION AND WITHDRAWAL:</span> Your participation in this study is completely voluntary and you are free to choose whether to be in it or not. If you choose to be in this study, you may subsequently withdraw from it at any time without penalty or consequences of any kind. The investigator may withdraw you from this research if circumstances arise. If the investigator determines that you are not fulfilling the requirements of the study, he/she may decide to terminate the study early and provide prorated payment.</p>

<p><span class="font-weight-black">PROCEDURES:</span> Should you agree to participate, you will be invited to answer questions about a set of news headlines and various demographics questions. The expected maximum time to complete the study is 10 minutes. After completing the study, you will be provided with a compensation of $1.00 as a thank-you for your time.</p>

<p><span class="font-weight-black">POTENTIAL RISKS AND DISCOMFORTS:</span> Risks surrounding this study are minimal. The researchers will not share any “personal” information that they encounter during the surveys, and all notes surrounding your data will be coded by participant number rather than name or research platform identifier.</p>

<p><span class="font-weight-black">POTENTIAL BENEFITS:</span> The will be no direct benefit to the subject for participating in this research. Participants may also benefit indirectly from knowing that they have advanced our understanding of what kind of headlines people like better for various articles.</p>


<p><span class="font-weight-black">PAYMENT FOR PARTICIPATION: </span> <span style="color:#2980b9;">The subjects will receive payment in the amount of $1 dollar in the form of a gift card upon completion of the study.</span></p>


<p><span class="font-weight-black">PRIVACY AND CONFIDENTIALITY: </span> No information about you, or provided by you during the research will be disclosed to others without your written permission, except: if necessary to protect your rights or welfare, or if required by law. In addition, your information may be reviewed by authorized MIT representatives to ensure compliance with MIT policies and procedures.</p>

<p>When the results of the research are published or discussed in conferences, no information will be included that would reveal your identity. If photographs, videos, or audio-tape recordings of you will be used for educational purposes, your identity will be protected or disguised.</p>


<p>Information from the survey that is obtained in connection with this study and that can be identified with you will remain confidential and will be disclosed only with your permission or as required by law.</p>

<p>The survey may log your interactions with the page in order to contribute to later research statistics. Your survey responses and interaction data will be stored in a password protected computer for analysis – it will not be shared outside the research group.</p>

<p>Participants will be given a private numeric identifier for their records and data. All study data will be identified solely by participant number, so only the head investigator and the participant will have the ability to link data to names. The researcher will retain the number-name correspondences in a secure location separate from the tapes and data. Tapes will be destroyed at the conclusion of the research or upon graduation of the head investigator from the Institute (whichever is sooner). Data will be similarly stored by participant number. All retained information will be only reported in scientific journals in the form of accumulated statistics and/or the media above.</p>

<p><span class="font-weight-black">EMERGENCY CARE AND COMPENSATION FOR INJURY: </span>If you feel you have suffered an injury, which may include emotional trauma, as a result of participating in this study, please contact the person in charge of the study as soon as possible. In the event you suffer such an injury, M.I.T. may provide itself, or arrange for the provision of, emergency transport or medical treatment, including emergency treatment and follow-up care, as needed, or reimbursement for such medical services. M.I.T. does not provide any other form of compensation for injury. In any case, neither the offer to provide medical assistance, nor the actual provision of medical services shall be considered an admission of fault or acceptance of liability. Questions regarding this policy may be directed to MIT’s Insurance Office, (617) 253-2823. Your insurance carrier may be billed for the cost of emergency transport or medical treatment, if such services are determined not to be directly related to your participation in this study.</p>

<p><span class="font-weight-black">RIGHTS OF RESEARCH SUBJECTS: </span>You are not waiving any legal claims, rights or remedies because of your participation in this research study. If you feel you have been treated unfairly, or you have questions regarding your rights as a research subject, you may contact the Chairman of the Committee on the Use of Humans as Experimental Subjects, M.I.T., Room E25-143B, 77 Massachusetts Ave, Cambridge, MA 02139, phone 1-617-253 6787.</p>


<p style="font-weight: bolder;">Continuing with the survey implies informed consent</p>

<p>Please do not use the browser's back key when you are completing the study.</p>

</v-row>

  <v-form ref="signupForm"> 
    <v-row no-gutters>
      <v-col cols=6 sm=12 md=8>
        <v-text-field label="What is your Sona email?" :rules="formRules.emailRules" v-model="email"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row no-gutters>
      <v-col cols=6 sm=12 md=8>
        <v-text-field label="What is your Sona ID?" v-model="participantId" :rules="formRules.idRules"
        ></v-text-field>
        </v-col>
      <p class="caption">Your Sona ID is a numerical identifier. If you do not remember your Sona ID, please email the lab manager at lab-manager@mit.edu</p>

    </v-row>

    <v-row no-gutters class="mt-3">
      <v-btn color="primary" @click="setupProfile"> Consent and Proceed</v-btn>
    </v-row>
  </v-form>
  </v-container>
</template>

<script>
import logging from '@/lib/logging'
import { mapActions, mapGetters } from 'vuex'

export default {
  components: {
  },
  data () {
    return {
      email: '',
      participantId: '',
      formRules: {
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+/.test(v) || 'E-mail must be valid'
        ],
        idRules: [
          v => !!v || 'ID is required',
          v => /^[0-9]+$/u.test(v)
            || 'ID must be valid'
        ],
      }
    }
  },
  computed: {
    ...mapGetters(['currentHeadline'])
  },
  methods: {
    setupProfile: function() {

      if (this.$refs.signupForm.validate()) {
        this.setup({ email: this.email, participantId: this.participantId })
        .then(() => {
          this.$router.push({ name: 'headlines' });
        })
      }

    },
    ...mapActions(['setup'])
  }
}
</script>


<style scoped>
.full-block {
  display: block;
  width: 100%;
}
</style>
