<template>
    <div>
        <Committee v-bind="committee"/>
    </div>
</template>

<script setup lang="ts">
const committee = {
    slug: 'UNODC',
    name: 'United Nations Office of Drugs and Crime',
    agenda: ['Adressing the Role of Digital Currencies in Tax Evasion and Money Laundering Schemes'],
    text: '',
    image: '/img/committees/bg/bg.png',
    logo: '/img/committees/logo/unodc.png',
    chair: '',
    usg: ''
}
</script>

<style scoped>

</style>