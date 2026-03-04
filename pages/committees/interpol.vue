<template>
    <div>
        <Committee v-bind="committee"/>
    </div>
</template>

<script setup lang="ts">
const committee = {
    slug: 'INTERPOL',
    name: 'International Criminal Police Organisation',
    agenda: ['Enhancing Cross-Border Cooperation and Victim Protection Mechanisms to Combat Human and Child Trafficking Networks'],
    text: 'Human and child trafficking networks operate across borders, exploiting differences in legal systems, enforcement capacity, and information-sharing mechanisms. While INTERPOL facilitates international police cooperation, challenges remain in coordinating investigations, dismantling transnational criminal networks, and ensuring the protection of victims during and after legal proceedings. Disputes often arise over jurisdiction, data sharing, sovereignty concerns, and the balance between security operations and human rights protections. The absence of uniform victim identification and protection standards further complicates cross-border cases, making cooperation between law enforcement agencies, judicial authorities, and humanitarian actors a central point of debate within this agenda.',
    image: '/img/committees/bg/bg.png',
    logo: '/img/committees/logo/interpol.png',
    chair: '',
    usg: ''
}
</script>

<style scoped>

</style>