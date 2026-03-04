<template>
    <div>
        <Committee v-bind="committee" />
    </div>
</template>

<script setup lang="ts">
const committee = {
    slug: 'US Senate',
    name: '',
    agenda: ['Consideration of Repeal or Modification of the Affordable Care Act 2021'],
    text: 'The future of the Affordable Care Act remains a deeply divisive issue within the United States Senate. Supporters argue that the legislation expanded healthcare access and strengthened consumer protections, while critics contend that it increased federal spending and restricted market flexibility. Senators must navigate partisan divides, constituent interests, and economic implications when considering repeal or modification proposals. The legislative process is further complicated by political pressure and competing visions of the federal government’s role in healthcare.',
    image: '/img/committees/bg/bg.png',
    logo: '/img/committees/logo/senate.png',
    chair: '',
    usg: ''
}
</script>

<style scoped>

</style>