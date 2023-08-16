<template>
    <div>
        <Committee v-bind="committee" />
    </div>
</template>

<script setup lang="ts">
const committee = {
    slug: 'unga',
    name: 'United Nations General Assembly',
    agenda: [

    ],
    text: 'The United Nations General Assembly (abbreviated as UNGA or GA) is one of the six principal organs of the United Nations and acts as the main deliberative, policymaking, and representative organ of the United Nations. The General Assembly enshrines the main concept of the United Nations with its mission to provide any and every Member State with a forum of equal representation and a platform to have everyone\'s voice heard. We the people, feel the consequences of our government\'s actions every single day and the world around us is constantly changing and with change, new problems and conflicts arise. Just as we have our voices heard in the organs of a state under a government of the people, by the people, and for the people.\n\nThe millennium presents its various problems, questions, and conflicts; those issues are to be discussed, elaborated, and resolved in the General Assembly by the Nations of the Earth for the Peoples of the Earth.',
    image: '/img/unga.png',
    usg: '',
    acas: '',
    rop: '',
    studyguide: ''
}
</script>
