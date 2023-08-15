<template>
    <div>
        <Committee v-bind="committee"/>
    </div>
</template>

<script setup lang="ts">
const committee = {
    slug: 'unodc',
    name: 'United Nations Office on Drugs and Crime',
    agenda: [
        'Unregulated production of psychoactive substances',
        'Ensuring urban safety and providing safety governance for safe, inclusive, and resilient cities'
    ],
    text: 'The United Nations Office on Drugs and Crime is a United Nations Agency aiming to assist the United Nations in adressing a coordinated and comprehensive response to the crucial issues of illicit drug trafficking, abuse of drugs, crime prevention, this response is conducted with three primary functions: research, guidance and support to governments in the adoption and implementation of various crime, drug, terrorism and corruption related conventions, treaties and protocols combined with technical and financial assistance to said governments. The Office operates under the Secretariat with its two main commssion on crime prevention and narcotic drugs being strongly tied to ECOSOC.\n\n Liberalization and globalization in the world brings us various problems and issues that were never a concern, a century ago. With the commonization of decriminalization policies on various psychoactive substances, the issue of regulation by the states rises. Psychoactive substances, when not regulated, are subject to illicit trafficking which gives birth to societal inequality, internal conflict and a general disturbance for domestic and international peace.\n\n After the mass industrialization of the 19th century, internal migration to cities and other urban areas started to increase drastically changing the ways of our society.\n\n With globalization, our cities are more diverse than ever; with this cosmopolitan nature of our urban areas, discrimination and inequality proves itself to be much more present. Utilizing the opportunities of the millenium, the Office is to guide nations to find modern solutions to our modern problems.',
    image: '',
    usg: '',
    acas: '',
    rop: '',
    studyguide: ''
}
</script>

<style scoped>

</style>