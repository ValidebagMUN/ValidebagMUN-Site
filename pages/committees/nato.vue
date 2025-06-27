<template>
    <div>
        <Committee v-bind="committee" />
    </div>
</template>

<script setup lang="ts">
const committee = {
    slug: 'NATO',
    name: 'North Atlantic Treaty Organization',
    agenda: [
        'Strengthening NATO\'s Eastern Flank in Response to Russian Aggression'
    ],
    text: 'The North Atlantic Treaty Organization was created in 1949 by the United States, Canada, and several Western European nations to provide collective security against the Soviet Union.\n\nAs the war is felt even in Eastern Europe, NATO stands at one of the most defining moments in its recent history. While Russia\'s invasion of Ukraine marked a turning point in post-Cold War geopolitics, the security of NATO\'s eastern member states (including Poland, the Baltic states, Romania and Bulgaria) has become a top priority for the alliance. The path to stopping Russia\'s aggressive behavior runs through its eastern flank, and strengthening it economically, politically and especially militarily is critical.\n\nThe committee will secure the Eastern flank by strengthening the Eastern countries, will thwart Russia\'s expansionist policy and will strengthen NATO\'s image abroad by blocking all false information. Our NATO committee invites us this year at ValidebağMUN\'25 to reassess policies, strengthen alliances and ensure the protection of NATO\'s Eastern allies against continued Russian aggression!',
    image: '/img/committees/bg/nato.png',
    chair: 'Taha Gani, Deputy: Özgür Doymuş',
    usg: 'Cansu Solmaz Hurşitoğlu',
    acas: 'İncilay Uysal',
    sg: 'https://docs.google.com/document/d/196DviWfRLyI5KgbsEMcOUzNVPZrEU9jtvHseivhvsmI'
}
</script>

<style scoped>

</style>