<template>
    <div>
        <Committee v-bind="committee" />
    </div>
</template>

<script setup lang="ts">
const committee = {
    slug: 'UNHRC',
    name: 'United Nations Human Rights Council',
    agenda: ['Adressing Modern Slavery and Strengthening International Efforts to Combat Forced Labour'],
    text: '',
    image: '/img/committees/bg/bg.png',
    logo: '/img/committees/logo/unhrc.png',
    chair: '',
    usg: ''
}
</script>

<style scoped></style>