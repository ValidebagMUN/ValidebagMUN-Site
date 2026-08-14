<template>
    <div>
        <Committee v-bind="committee"/>
    </div>
</template>

<script setup lang="ts">
const committee = {
    slug: 'DISEC',
    name: 'Disarmament and International Security Committee',
    agenda: ['Regulating the Militray Use of Artificial Intelligence and Unmanned Systems in Armed Conflicts'],
    text: '',
    image: '/img/committees/bg/bg.png',
    logo: '/img/committees/logo/disec.png',
    chair: '',
    usg: ''
}
</script>

<style scoped>

</style>