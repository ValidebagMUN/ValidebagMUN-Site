<template>
    <div>
        <Committee v-bind="committee" />
    </div>
</template>

<script setup lang="ts">
const committee = {
    slug: 'WHO',
    name: 'World Health Organization',
    agenda: ['Regulating Brain-Computer Interface Technologies to Ensure Ethical Use'],
    text: 'Experiments of creating a link between the human brain and a computer have existed for over 50 years. By enabling direct communication between a brain and a chip, Brain-Computer Interfaces have the potential of helping a lot of people, especially those with neurological disabilities. However, as development for the technology continues and the interfaces get more intrusive, serious questions regarding ethics, privacy and testing arise.\n\nIn this committee, delegates will discuss frameworks and regulations to ensure this new technology is developed responsibly, with respect to the patients safety, privacy and dignity.',
    image: '/img/committees/bg/bg.png',
    logo: '/img/committees/logo/who.png',
    chair: 'Gizem Deniz Koç - Afife Yasemin Yazar',
    acas: 'Berrin Çavdarlı'
}
</script>

<style scoped>

</style>