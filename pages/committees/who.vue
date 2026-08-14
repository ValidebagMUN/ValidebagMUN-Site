<template>
    <div>
        <Committee v-bind="committee" />
    </div>
</template>

<script setup lang="ts">
const committee = {
    slug: 'WHO',
    name: 'World Health Organization',
    agenda: ['Regulating Brain-Computer Interface Technologies to Ensure Ethical Use'],
    text: '',
    image: '/img/committees/bg/bg.png',
    logo: '/img/committees/logo/who.png',
    chair: '',
    usg: ''
}
</script>

<style scoped>

</style>