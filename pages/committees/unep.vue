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
    text: '',
    image: '/img/committees/bg/bg.png',
    logo: '/img/committees/logo/unep.png',
    chair: '',
    usg: ''
}
</script>

<style scoped>

</style>