<template>
    <div>
        <Committee v-bind="committee"/>
    </div>
</template>

<script setup lang="ts">
const committee = {
    slug: 'EC',
    name: 'European Commission',
    agenda: ['Defining the European Union’s Strategic Role in an Emerging Multipolar World Order'],
    text: 'The global balance of power is shifting as influence becomes increasingly distributed among several major actors, including the United States, China, and Russia. This transformation is reshaping international trade, security arrangements, technological competition, and diplomatic alliances. Within this evolving environment, the European Union faces growing pressure to define its strategic role and long-term priorities in global affairs. While the Union holds considerable economic power and regulatory influence, differences among member states, external security pressures, and dependence on external partnerships complicate the development of a unified geopolitical strategy. Ongoing debates focus on strategic autonomy, defence coordination, energy security, technological competitiveness, and the Union’s approach toward emerging global powers. As global competition intensifies and international alliances evolve, this agenda calls on delegates to evaluate how the European Union should strengthen its influence, safeguard its economic and political interests, and position itself effectively within an increasingly multipolar international order.',
    image: '/img/committees/bg/bg.png',
    logo: '/img/committees/logo/ec.png',
    chair: 'Elif İnci Damar - Yiğit Ege Sivri',
    usg: 'Reha Pilanlıoğlu'
}
</script>

<style scoped>

</style>