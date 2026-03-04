<template>
    <div>
        <Committee v-bind="committee"/>
    </div>
</template>

<script setup lang="ts">
const committee = {
    slug: 'EC',
    name: 'European Commission',
    agenda: [''],
    text: '',
    image: '/img/committees/bg/bg.png',
    logo: '/img/committees/logo/ec.png',
    chair: '',
    usg: ''
}
</script>

<style scoped>

</style>