<template>
    <div>
        <Committee v-bind="committee" />
    </div>
</template>

<script setup lang="ts">
const committee = {
    slug: 'UNCTAD',
    name: 'United Nations Conference on Trade and Development',
    agenda: ['Combating Online Art Piracy and Unauthorised Commercial Use of Creative Works in Digital Platforms'],
    text: 'The rise of digital platforms has intensified challenges related to online art piracy and the unauthorised commercial use of creative works. While stronger intellectual property protections are seen as essential for safeguarding artists and cultural economies, concerns persist over enforcement feasibility, digital accessibility, and the dominance of global technology companies. Developing countries often face difficulties in regulating cross-border digital markets, leading to disputes over capacity-building, international cooperation, and platform accountability. Balancing economic development, creative rights, and digital freedom remains a central source of contention within this agenda.',
    image: '/img/committees/bg/bg.png',
    logo: '/img/committees/logo/unctad.png',
    chair: 'Fevzi Ege Deniz - Halime Ravza Hasal',
    usg: 'Ekin Şahin'
}
</script>

<style scoped>

</style>