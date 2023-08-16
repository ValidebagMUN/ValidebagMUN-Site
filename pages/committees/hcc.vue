<template>
    <div>
        <Committee v-bind="committee"/>
    </div>
</template>

<script setup lang="ts">
const committee = {
    slug: 'hcc',
    name: 'Historical Crisis Cabinet',
    agenda: [
        'The French Third Republic'
    ],
    text: 'Further information is to be revealed...',
    image: '/img/hcc.png',
    usg: '',
    acas: '',
    rop: '',
    studyguide: ''
}
</script>
