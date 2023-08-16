<template>
    <div>
        <Committee v-bind="committee"/>
    </div>
</template>

<script setup lang="ts">
const committee = {
    slug: 'ecowas',
    name: 'Economic Community of West African States',
    agenda: [
        'The Nigerien crisis'
    ],
    text: 'The Economic Community of West African States (ECOWAS) is a regional political and economic union that is widely acknowledged as a significant regional bloc within the African Economic Community. Its primary objective is the promotion of \"collective self-sufficiency\" among its member states. This is achieved through the establishment of a unified trade bloc and the development of a comprehensive economic and trading union.\n\n Moreover, ECOWAS assumes a vital role in maintaining peace and stability in the region. In instances of political unrest and instability within its member countries, ECOWAS has effectively deployed joint military forces as a peacekeeping force. This intervention is intended to address internal conflicts, political instabilities, and civil disorder that may arise.\n In recent years, the Sahel and West Africa have witnessed several coups, leading to a ripple effect akin to the \"Domino Effect\" theory observed during the Cold War. This trend commenced with Mali, subsequently followed by Guinea, Burkina Faso one year later, and most recently Niger in July 2023. Initially, ECOWAS responded to these coups by implementing economic measures and sanctions. However, questions have emerged regarding the effectiveness of these measures, as coups have persisted.\n\n In the case of Niger, ECOWAS issued a warning to the ruling junta, urgently calling for the restoration of civilian rule within a seven-day timeframe. Unfortunately, the junta did not comply with this request. Consequently, ECOWAS must now adopt a more decisive approach similar to the one employed in Gambia when the former president refused to relinquish power. In that scenario, ECOWAS employed direct military measures to ensure a smooth transition of power. \n Given the current situation in Niger, it is imperative for ECOWAS to respond promptly and effectively in order to uphold the principles of democracy and stability within the region.',
    image: '/img/ecowas.png',
    usg: '',
    acas: '',
    rop: '',
    studyguide: ''
}
</script>

<style scoped>

</style>