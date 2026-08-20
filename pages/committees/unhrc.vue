<template>
    <div>
        <Committee v-bind="committee" />
    </div>
</template>

<script setup lang="ts">
const committee = {
    slug: 'UNHRC',
    name: 'United Nations Human Rights Council',
    agenda: ['Adressing Modern Slavery and Strengthening International Efforts to Combat Forced Labour'],
    text: 'Despite the abolition of slavery in almost every legal system, millions of people around the world still experience a form of forced labour or ‘modern slavery’. The victims of modern slavery are most often vulnerable groups, such as those living in poverty or refugees. Exactly how it happens can depend greatly, however deception, coercion, threats, trafficking, retention of documentation etc. are all commonplace. Global supply chains further complicate the issue by making the cases of abuse harder to identify and track down.\n\nIn this committee, delegates will discuss ways of ensuring current cases of modern slavery can be tracked down and stopped, as well as preventing future cases.',
    image: '/img/committees/bg/bg.png',
    logo: '/img/committees/logo/unhrc.png',
    chair: 'Yağmur Kaya - Rüya Aktaş',
    acas: 'Betül Dündar'
}
</script>

<style scoped></style>