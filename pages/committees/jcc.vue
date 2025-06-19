<template>
    <div>
        <Committee v-bind="committee" />
    </div>
</template>

<script setup lang="ts">
const committee = {
    slug: 'jcc',
    name: 'The Imjin War',
    agenda: [],
    text: 'The legendary general Hideyoshi, after unifying Japan, now sets his sights on Korea. \n\n Seeking to further enhance his power following the unification of Japan, Hideyoshi launched an invasion of the Korean Peninsula with the aim of annexing Korea. Thanks to experienced commanders and a Japanese nation burning with patriotic fervor, Japanese forces quickly seized most of the peninsula, believing they were on the brink of a decisive victory. However, they soon stumbled upon a formidable obstacle in the form of the Joseon and Ming dynasties. \n\n In the JCC: Imjin War committee, delegates will find themselves in an environment far beyond a conventional battlefield—one where political strategies and secret plans have the power to rewrite the histories of both nations. Every move they make will fundamentally alter the future of the Japanese and Korean peoples.',
    image: '/img/committees/bg/jcc.png',
    chair: 'Korean Side: Ceyda Gürsoy, Eren Kazan - Japanese Side: Selim Dede',
    usg: 'Hüseyin Efe Akpınar',
    acas: 'Metehan Özdemir'
}
</script>

<style scoped>

</style>