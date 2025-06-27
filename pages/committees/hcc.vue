<template>
    <div>
        <Committee v-bind="committee" />
    </div>
</template>

<script setup lang="ts">
const committee = {
    slug: 'hcc',
    name: 'The Gothic War (535-554 BC)',
    agenda: [],
    text: 'Join the Committee of The Gothic War and take on the role of a powerful cabinet member within Gothic leadership. \n As the Western Roman Empire teeters on the edge of collapse, the Goths—once Roman allies, now betrayed and starving—rally under the command of Alaric I to claim their independence and reshape their destiny. Step into a world of strategic warfare and high-stakes diplomacy, where every decision can determine the fate of a rising Gothic kingdom. \n Will you negotiate with Rome, unite fractured tribes, or march boldly toward conquest? Navigate the treacherous political landscape of late antiquity and lead your people through one of the most decisive conflicts of the 5th century. The empire is crumbling. \n The time to rise is now.',
    image: '/img/committees/bg/hcc.png',
    chair: 'Zehra Betül Duysak - Mars Yakar',
    usg: 'Nisan Duru Şimşek',
    acas: 'Bihter Ezgi',
    sg: 'https://docs.google.com/document/d/1f_vfzntwqKP0KZv3nh7dbX7q21IiV650vowzPu5PmT0'
}
</script>

<style scoped>

</style>