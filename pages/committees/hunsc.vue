<template>
    <div>
        <Committee v-bind="committee"/>
    </div>
</template>

<script setup lang="ts">
const committee = {
    slug: 'H-UNSC',
    name: 'Historical United Nations Security Council',
    agenda: ['Strengthening International Regulations and Oversight of Civilian Nuclear Technologies in Post-Chernobyl Era'],
    text: '',
    image: '/img/committees/bg/bg.png',
    logo: '/img/committees/logo/hunsc.png',
    chair: '',
    usg: ''
}
</script>

<style scoped>

</style>