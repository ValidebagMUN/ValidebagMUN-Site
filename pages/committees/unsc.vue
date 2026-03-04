<template>
    <div>
        <Committee v-bind="committee"/>
    </div>
</template>

<script setup lang="ts">
const committee = {
    slug: 'UNSC',
    name: 'United Nations Security Council',
    agenda: ['Addressing the Escalation of the Iran–Israel Conflict and Its Implications for International Peace and Security'],
    text: 'Rising tensions between Iran and Israel have intensified regional instability and raised serious concerns for international peace and security. Recent military exchanges, proxy conflicts, cyber operations, and targeted strikes have increased the risk of wider confrontation across the Middle East. The involvement of non-state armed groups, threats to maritime security, and the potential disruption of global energy routes have further expanded the international impact of the conflict. Diplomatic efforts remain limited due to deep political divisions, competing security interests, and disagreements among major powers regarding responsibility and response mechanisms. As civilian populations face growing humanitarian risks and neighboring states confront spillover effects, the role of the United Nations Security Council becomes central in preventing further escalation. In this context, delegates will determine what actions the United Nations should undertake, what diplomatic, humanitarian, and security measures should be implemented, and how international cooperation should be strengthened to reduce tensions and maintain regional stability.',
    image: '/img/committees/bg/bg.png',
    logo: '/img/committees/logo/unsc.png',
    chair: '',
    usg: ''
}
</script>

<style scoped>

</style>