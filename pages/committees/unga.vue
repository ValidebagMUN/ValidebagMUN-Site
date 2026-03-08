<template>
    <div>
        <Committee v-bind="committee" />
    </div>
</template>

<script setup lang="ts">
const committee = {
    slug: 'UNGA',
    name: 'United Nations General Assembly',
    agenda: ['Formulating Future United Nations Frameworks for the Continued Advancement of Sustainable Development Goals Beyond 2030'],
    text: 'Although the Sustainable Development Goals have guided global development efforts for over a decade, many targets remain unmet as the 2030 deadline approaches, revealing ongoing inequalities in areas such as economic growth, climate action, healthcare, and social development. Differences in national capacity, limited resources, political tensions, and uneven implementation have slowed progress across regions. As the international community looks beyond 2030, questions arise over how the United Nations should reshape its development priorities, ensure fair responsibility sharing, and maintain effective international cooperation. Differing perspectives between developed and developing countries, along with debates over financing, technology access, and long-term commitments, continue to shape discussions on future action. In this context, delegates will decide what role the United Nations should take and what measures should be adopted to address remaining challenges and guide global development efforts after 2030.',
    image: '/img/committees/bg/bg.png',
    logo: '/img/committees/logo/unga.png',
    chair: 'Semiha Masal Yaylacı - Efe Başeğmez',
    usg: 'Haktan Efe Özgür'
}
</script>

<style scoped></style>