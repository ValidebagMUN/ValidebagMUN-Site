<template>
    <div>
        <Committee v-bind="committee"/>
    </div>
</template>

<script setup lang="ts">
const committee = {
    slug: 'HCC',
    name: 'Cabinet of Kuomintang',
    agenda: ['The Northern Expedition (1926)'],
    text: 'The launch of the Northern Expedition in 1926 marked a decisive turning point in modern Chinese history, as the Kuomintang government sought to end warlord rule and reunify the country under a centralized revolutionary authority. While the campaign achieved significant military successes, it exposed deep structural challenges, including fragmented regional loyalties, ideological divisions within the United Front, and dependence on foreign military and political assistance. As the expedition advanced northward, tensions between Nationalist and Communist factions, competing ambitions of regional commanders, and uncertainty over post-war governance increasingly threatened internal cohesion. With continuing warlord resistance, rising social unrest in liberated territories, and growing international scrutiny, the risk of fragmentation and political rupture remained acute. The Cabinet of the Kuomintang Government is therefore tasked with assessing the progress and consequences of the Northern Expedition, managing civil–military coordination, and determining a sustainable path toward national unification and long-term political stability in China.',
    image: '/img/committees/bg/bg.png',
    logo: '/img/committees/logo/hcc.png',
    chair: '',
    usg: ''
}
</script>

<style scoped>

</style>