<template>
    <div>
        <Committee v-bind="committee"/>
    </div>
</template>

<script setup lang="ts">
const committee = {
    slug: 'UNEP',
    name: 'United Nations Environment Programme',
    agenda: ['Developing International Regulatory and Technological Frameworks to Reduce the Environmental Impact of Artificial Intelligence Systems'],
    text: 'The rapid expansion of artificial intelligence technologies introduces growing environmental challenges alongside technological progress. Although AI systems support climate research, resource optimisation, and environmental monitoring, their high energy consumption, intensive data centre operations, and increasing electronic waste raise concerns for sustainable development. Uneven global standards for energy use, transparency, and environmental reporting have complicated international coordination on responsible AI deployment. These gaps challenge the international community’s ability to balance technological innovation with climate commitments while ensuring sustainable infrastructure growth across both developed and developing economies.',
    image: '/img/committees/bg/bg.png',
    logo: '/img/committees/logo/unep.png',
    chair: '',
    usg: ''
}
</script>

<style scoped>

</style>