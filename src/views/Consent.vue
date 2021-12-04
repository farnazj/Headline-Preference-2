<template>
  <v-container>
    <v-row no-gutters>
      <strong>Thank you for your interest in participating in the study.&nbsp;What follows is a brief overview of the research we are completing with your assistance.</strong><br>
<span style="font-weight: bolder;">Participation in this study is voluntary. You can decline to answer or stop participation at any time.</span>
<div><strong>You should read the information below, and ask questions about anything you do not understand, before deciding whether to participate.</strong>
<div><br>
<strong>PROJECT TITLE:&nbsp;Evaluation of News Headlines</strong></div>

<div>&nbsp;
<p><strong>INVESTIGATORS:<br>
Principal investigator: Farnaz Jahanbakhsh, PhD student, MIT CSAIL, farnazj@mit.edu</strong></p>

<p><strong>Faculty sponsor: David Karger, Professor, MIT CSAIL, karger@mit.edu<br>
&nbsp;<br>
INVITATION TO PARTICIPATE: You are invited to participate in this study if you&nbsp;at least occasionally read news online.</strong></p>

<p><strong></strong></p>

<p><strong>To be eligible to participate, you must be 18 years of age or older, be a US citizen or permanent resident, at least occasionally read news online, and use Google Chrome as your browser.</strong></p>

<p><strong></strong></p>
&nbsp;

<p><strong>PURPOSE OF THE STUDY:&nbsp;This study is designed to evaluate the utility of a tool for collaborative editing of news headlines.</strong></p>
<br>
<strong>PARTICIPATION AND WITHDRAWAL:&nbsp;Your participation in this study is completely voluntary and you are free to choose whether to be in it or not. If you choose to be in this study, you may subsequently withdraw from it at any time without penalty or consequences of any kind. The investigator may withdraw you from this research if circumstances arise.&nbsp;If the investigator determines that you are not fulfilling the requirements of the study, he/she may decide to terminate the study early and provide prorated payment.</strong></div>

<div><br>
<strong>PROCEDURES:&nbsp;&nbsp;Should you agree to participate, you will be invited to answer questions about a set of news headlines and various demographics questions. The expected maximum time to complete the study is 10 minutes. After completing the study, you will be provided with a compensation of $1.00 as a thank-you for your time.</strong><p><strong></strong></p>

<p>&nbsp;</p>

<p>&nbsp;</p>

<p><strong></strong></p>

<p><strong>POTENTIAL RISKS AND DISCOMFORTS:&nbsp;</strong><strong>Risks surrounding this study are minimal. The researchers will not share any “personal” information that he/she encounters during the surveys, and all notes surrounding your data will be coded by participant number rather than name or research platform identifier.</strong></p>

<p>&nbsp;</p>

<p>&nbsp;</p>

<p><strong>POTENTIAL BENEFITS:&nbsp;The will be no direct benefit to the subject for participating in this research. P</strong><strong>articipants may also benefit indirectly from knowing that they have advanced our understanding of what kind of headlines people like better for various articles.</strong></p>

<p>&nbsp;</p>

<p>&nbsp;</p>

<p><strong>PAYMENT FOR PARTICIPATION:&nbsp;<span style="color:#2980b9;">The subjects will receive payment in the amount of $1 dollar in the form of a gift card upon completion of the study.</span></strong></p>

<p>&nbsp;</p>

<p>&nbsp;</p>

<p><strong>PRIVACY AND CONFIDENTIALITY:&nbsp;No information about you, or provided by you during the research will be disclosed to others without your written permission, except: if necessary to protect your rights or welfare, or if required by law. In addition, your information may be reviewed by authorized MIT representatives to ensure compliance with MIT policies and procedures.</strong><strong>&nbsp;</strong></p>

<p><strong>When the results of the research are published or discussed in conferences, no information will be included that would reveal your identity. If photographs, videos, or audio-tape recordings of you will be used for educational purposes, your identity will be protected or disguised.</strong></p>

<p><strong>&nbsp;</strong></p>

<p><strong>Information from the survey that is obtained in connection with this study and that can be identified with you will remain confidential and will be disclosed only with your permission or as required by law.&nbsp;</strong></p>

<p><strong>&nbsp;</strong></p>

<p><strong>The survey may log your interactions with the page in order to contribute to later research statistics. Your survey responses and interaction data will be stored in a password protected computer for analysis – it will not be shared outside the research group.</strong></p>

<p><strong>&nbsp;</strong>&nbsp;</p>

<p><strong>Participants will be given a private numeric identifier for their records and data. All study data will be identified solely by participant number, so only the head investigator and the participant will have the ability to link data to names. The researcher will retain the number-name correspondences in a secure location separate from the tapes and data. Tapes will be destroyed at the conclusion of the research or upon graduation of the head investigator from the Institute (whichever is sooner). Data will be similarly stored by participant number. All retained information will be only reported in scientific journals in the form of accumulated statistics and/or the media above.</strong></p>

<p>&nbsp;</p>

<p><strong>EMERGENCY CARE AND COMPENSATION FOR INJURY:&nbsp;If you feel you have suffered an injury, which may include emotional trauma, as a result of participating in this study, please contact the person in charge of the study as soon as possible.&nbsp;In the event you suffer such an injury, M.I.T. may provide itself, or arrange for the provision of, emergency transport or medical treatment, including emergency treatment and follow-up care, as needed, or reimbursement for such medical services. M.I.T. does not provide any other form of compensation for injury. In any case, neither the offer to provide medical assistance, nor the actual provision of medical services shall be considered an admission of fault or acceptance of liability. Questions regarding this policy may be directed to MIT’s Insurance Office, (617) 253-2823. Your insurance carrier may be billed for the cost of emergency transport or medical treatment, if such services are determined not to be directly related to your participation in this study.</strong></p>

<p>&nbsp;</p>

<p>&nbsp;</p>

<p><strong>RIGHTS OF RESEARCH SUBJECTS:&nbsp;You are not waiving any legal claims, rights or remedies because of your participation in this research study. If you feel you have been treated unfairly, or you have questions regarding your rights as a research subject, you may contact the Chairman of the Committee on the Use of Humans as Experimental Subjects, M.I.T., Room E25-143B, 77 Massachusetts Ave, Cambridge, MA 02139, phone 1-617-253 6787.</strong></p>

<p>&nbsp;</p>

<p><span style="font-weight: bolder;">Continuing with the survey implies informed consent.</span></p>

<p></p>

<p></p>
</div>
</div>
    </v-row>

    <v-row no-gutters>
      <v-col cols=6 sm=12 md=8>
        <v-text-field label="What is your Sona email?"></v-text-field>
      </v-col>
    </v-row>

    <v-row no-gutters>
      <v-col cols=6 sm=12 md=8>
        <v-text-field label="What is your Sona ID?"></v-text-field>
        </v-col>
      <p class="caption">Your Sona ID is a numerical identifier. If you do not remember your Sona ID, please email the lab manager at lab-manager@mit.edu</p>

    </v-row>

    <v-row no-gutters class="mt-3">
      <v-btn color="primary" @click="setupProfile"> Consent and Proceed</v-btn>
    </v-row>
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
      participantId: ''
    }
  },
  computed: {
        ...mapGetters(['currentHeadline'])

  },
  created() {
    // logging.sendTest('that one', 'because');
  },
  methods: {
    setupProfile: function() {
      this.setup({ email: this.email, participantId: this.participantId })
      .then(() => {
        this.$router.push({ name: 'headlines' });
      })
    },
    ...mapActions(['setup'])
  }
}
</script>


<style scoped>

</style>
