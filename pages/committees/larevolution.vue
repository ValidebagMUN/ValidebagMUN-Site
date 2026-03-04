<template>
    <div>
        <Committee v-bind="committee" />
    </div>
</template>

<script setup lang="ts">
const committee = {
    slug: 'Comité de salut public',
    name: 'The Committee of Public Safety',
    agenda: [],
    text: 'The Committee of Public Safety was established on 6 April 1793 by the National Convention during the French Revolution. Initially composed of nine members, it was tasked with protecting the newly formed French Republic from internal and external threats, particularly during the tumultuous period known as the Reign of Terror. The committee held broad supervisory powers over the military, judiciary, and legislature, effectively serving as the executive authority of France during its tenure. \n\n Maximilien Robespierre joined the committee on 27 July 1793, marking a shift towards more radical policies. Under his influence, the committee implemented measures such as the levée en masse, the Law of Suspects, and the Law of the General Maximum, aiming to consolidate power and suppress counter-revolutionary activities. These actions contributed to the intensification of the Reign of Terror, during which thousands were executed.',
    image: '/img/committees/bg/example.png',
    chair: 'L\'Incorruptible Maximilien Robespierre',
    usg: 'Georges Jacques Danton'
}
</script>

<style scoped>

</style>