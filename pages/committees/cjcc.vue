<template>
    <div>
        <Committee v-bind="committee"/>
    </div>
</template>

<script setup lang="ts">
const committee = {
    slug: 'cjcc',
    name: 'Continuous Joint Crisis Committee',
    agenda: [
        'English War of Succession'
    ],
    text: 'Further information is to be revealed...',
    image: '/img/cjcc.png',
    usg: '',
    acas: '',
    rop: '',
    studyguide: ''
}
</script>
