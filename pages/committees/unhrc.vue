<template>
    <div>
        <Committee v-bind="committee" />
    </div>
</template>

<script setup lang="ts">
const committee = {
    slug: 'UNHRC',
    name: 'United Nations Human Rights Council',
    agenda: [
        'Investigating Human Rights Violations in Xinjiang against Uyghur Muslims'
    ],
    text: 'The Committee of United Nations Human Rights (UNHRC) is a United Nations body founded in 2006 that focuses on promoting human rights and the precasions that must be taken regarding the safety of people\'s rights worldwide.\n\nThe Uyghur issue in China refers to the persecution of the Uyghur Muslim minority in the region of Xinjiang Uyghur Autonomous. The tension between the two parties had occurred decades ago but escalated harshly after the year of 2014. In 2014, China launched a campaign targeting the Uyghurs and holding them accountable for terrorism. The Chinese government began its surveillance and cultural repression of Uyghurs, claiming it was a fight against extremism.\n\nOver the years, around 1 million Uyghurs have been detained in the so-called re-education camps that paved the way for the abuse of the Uyghurs. The exploits that are done to Uyghurs include forced labor, sterilization, family separation, religious restrictions, and suppression of Uyghur language and culture, simply their whole identity as people.\n\nAs a result, millions of Uyghurs are suffering from the loss of their identity, both physical and mental trauma, broken families, and economic struggles. With the help of UN bodies such as UNHRC, global awareness, and other human rights organizations, the hardship of Uyghur people can be heard and helped.',
    image: '/img/committees/bg/unhrc.png',
    chair: 'Zeynep Naz Cengiz, Deputy: Sencer Koyutürk',
    usg: 'Alya Avgören',
    acas: 'Duru Yetkin',
    sg: 'https://docs.google.com/document/d/1-VkWfpmKKnRDogjM-PashC7ZPRMBwNkVzla93VBrEVU'
}
</script>

<style scoped>

</style>