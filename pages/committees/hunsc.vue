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
    text: 'The peaceful usages of nuclear technology have improved our everyday lives in many ways in areas like medicine, research and energy. Nuclear energy offers a clean and efficient solution to the problem of electricity production. However if not handled correctly, it can also lead to catastrophic outcomes…\n\nIn this committee, delegates will address the dangers of nuclear energy, create regulations and take action to reduce risk and minimize damage in case of future accidents.',
    image: '/img/committees/bg/bg.png',
    logo: '/img/committees/logo/hunsc.png',
    chair: 'Zeynep Su Gezgin - Muhammed Emin Semerci',
    acas: 'Taim Sarraç',
    ctm: ''
}
</script>

<style scoped>

</style>