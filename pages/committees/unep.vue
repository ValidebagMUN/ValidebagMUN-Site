<template>
    <div>
        <Committee v-bind="committee"/>
    </div>
</template>

<script setup lang="ts">
const committee = {
    slug: 'UNEP',
    name: 'United Nations Environment Programme',
    agenda: ['Adressing the Increasing Frequency and Impact of Extreme Heatwaves in Europe Under Climate Change'],
    text: 'Extreme heatwaves have been increasing in size and frequency across the world. One of the places where the increased effects are the most noticeable is Europe, where heatwaves present serious challenges regarding public health, infrastructure, agriculture and the environment for the nations residing in it. Death and injury because of heat strokes, wildfires, droughts and damage to the ecosystem are all negative results of the heatwaves.\n\nIn this committee, delegates will discuss ways of reducing the immediate effects of heatwaves on affected communities and areas, as well as long-term solutions to lessen the impact and frequency of heatwaves.',
    image: '/img/committees/bg/bg.png',
    logo: '/img/committees/logo/unep.png',
    chair: 'Duru Yetkin - Semiha Masal Yaylacı',
    acas: 'Dilara Buçan'
}
</script>

<style scoped>

</style>