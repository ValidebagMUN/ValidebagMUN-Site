<template>
    <div>
        <Committee v-bind="committee"/>
    </div>
</template>

<script setup lang="ts">
const committee = {
    slug: 'SOCHUM',
    name: 'Social, Humanitarian and Cultural Committee',
    agenda: ['Protecting Journalists in Conflict Zones and Against Politically Motivated Detention'],
    text: 'Journalists play a vital role in providing reliable information and documenting cases of human rights violations especially during times and in places of conflict. Their work is imperative to raising global awareness about ongoing problems. However, reporting from conflict zones often puts reporters at risk of being assaulted (both verbal and physical) or being arbitrarily detained. In many cases journalists get deliberately targeted to control the flow of information. This undermines both the public’s freedom of expression and their right to access information.\n\nIn this committee, delegates will discuss new frameworks and improve the already existing ones to ensure the global safety of press members and accountability for those who actively oppose them.',
    image: '/img/committees/bg/bg.png',
    logo: '/img/committees/logo/sochum.png',
    chair: 'Duru İzberk - Bulut Azam Malkoçoğlu',
    acas: 'Çağla Güneş'
}
</script>

<style scoped>

</style>