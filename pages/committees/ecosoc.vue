<template>
    <div>
        <Committee v-bind="committee"/>
    </div>
</template>

<script setup lang="ts">
const committee = {
    slug: 'ecosoc',
    name: 'United Nations Economic and Social Council',
    agenda: [
        'Economic and social effects of the Israeli occupation on the living conditions of the Palestinian people and the Arab population in occupied Golan',
        'Situation in Haiti'
    ],
    text: 'The United Nations Economic and Social Council (abbreviated as ECOSOC) is one of the six principal organs of the United Nations and serves as a forum for the Member States and their peoples\' innocent voices in misery to be heard, functioning as a platform for social and economic problems of the Member States; ECOSOC holds a bold role establishing core policies and programs to counter our and our nation\'s problems.\n\nPalestine has always been a critical point in the field of geopolitics but the humanitarian consequences of the instability and conflict in the region are most of the time neglected by the governments, the media, and us. People struggling in occupied territories of West Bank, Golan, and the ones with similar fates are in uncertainty with the socioeconomic impacts of the occupation increasing its influence on innocent masses\' lives day by day.\n\nIn a distant corner of our planet, Haiti is subject to similar effects under different circumstances; years of corruption, political instability, and poverty, fueled by the recent assassination of the country\'s now former president, have led to Haiti being stuck in a swamp of misery. Global cooperation and collaboration may bring salvation and a happily-ever-after ending to, the stories of discrimination, degrading, and misery.',
    image: 'https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg',
    usg: '',
    acas: '',
    rop: '',
    studyguide: ''
}
</script>
