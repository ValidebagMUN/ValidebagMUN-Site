<template>
    <div>
        <Committee v-bind="committee" />
    </div>
</template>

<script setup lang="ts">
const committee = {
    slug: 'UNGA',
    name: 'United Nations General Assembly',
    agenda: [
        'The Role of Illicit Resource Exploitation in Fueling Armed Conflicts'
    ],
    text: 'The United Nations General Assembly (UNGA) is the main organ of the United Nations that is involved in policy making. UNGA provides a unique platform for any international issue to be discussed where all 193 member states have an equal vote.\n\nControl over natural resources has been a big point of conflict for many different groups for centuries. Natural resources play an essential role in all areas of expansion, whether it be technologically, militarily, economically or socially. However, the extraction and trade of these resources being done illicitly can cause many issues especially when it comes to funding armed conflicts.\n\nIllicit extraction and trade of natural resources allow those resources to be sold at much higher margins. This is because labour and tax obligations are substantially reduced when compared to their legal counterparts. With the income that comes with selling natural resources on gray or black markets, many armed organisations can easily fund their campaigns and operations. They can also buy more weapons, ammunition and recruit more people to both prolong and expand their presence. This agenda item and the UNGA aims to discuss possible solutions to stop and prevent illicit exploitation of natural resources.',
    image: '/img/committees/bg/unga.png',
    chair: 'Nisa Nur Aydın - Efe Başeğmez',
    usg: 'Vuslat Aslı Karataş',
    acas: 'Reha Pilanlıoğlu',
    sg: 'https://docs.google.com/document/d/1cqyjCXkZyk8r5YHKS6p5ydOiRFWPmppEiz4fBR56T0A'
}
</script>

<style scoped>

</style>