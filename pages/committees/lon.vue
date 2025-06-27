o<template>
    <div>
        <Committee v-bind="committee" />
    </div>
</template>

<script setup lang="ts">
const committee = {
    slug: 'LoN',
    name: 'League of Nations (1936 - WW2)',
    agenda: [],
    text: 'The year is 1936, and the foundations of the post-war international order are beginning to fracture. The remilitarization of the Rhineland, the crisis in Abyssinia, and the growing defiance of international agreements signal a world drifting from the principles upon which the League of Nations was founded. As tensions rise and diplomacy is increasingly tested, the League faces its greatest challenge yet: maintaining peace in a world where the threat of conflict looms ever larger.\n\nDespite criticism and uncertainty, the League remains the foremost forum for international dialogue. With an open agenda, this committee convenes at a moment of profound instability, offering space to address the diverse and urgent issues confronting the global community. In these uncertain times, the direction taken here may well define the future of international cooperation.',
    image: '/img/committees/bg/lon.png',
    chair: 'Haktan Efe Özgür, Deputy: Berf Elbir',
    usg: 'Emre Tahmaz',
    acas: 'Ataberk Ata',
    sg: 'https://docs.google.com/document/d/1kbi1PgDW_WAUjxwihm1-XYy5RyGUp-cudoUFqdStNqA'
}
</script>

<style scoped>

</style>