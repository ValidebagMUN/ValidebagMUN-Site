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
    text: 'The rapid development of unmanned systems and artificial intelligence is one of the most transformative advancements in modern warfare. Technology like autonomous drones and AI-assisted targeting systems increase military efficiency while reducing risk posed to personnel. However their increased usage in recent years is raising serious legal and humanitarian concerns. Unless no major steps are taken to properly regulate them, and access to these technologies gets easier, they will keep posing a significant threat to international peace.\n\nIn this committee, delegates will discuss how to balance the use of these systems between military interest and humanitarian law. ',
    image: '/img/committees/bg/bg.png',
    logo: '/img/committees/logo/disec.png',
    chair: 'Ege Erdil - Dora Kölemen',
    acas: 'Tarık Acar'
}
</script>

<style scoped>

</style>