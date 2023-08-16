<template>
    <div>
        <Committee v-bind="committee"/>
    </div>
</template>

<script setup lang="ts">
const committee = {
    slug: 'jcc',
    name: 'Joint Crisis Cabinet',
    agenda: [
        'Turkish Local Elections of 1930'
    ],
    text: 'Further information is to be revealed...',
    image: '/img/jcc.png',
    usg: '',
    acas: '',
    rop: '',
    studyguide: ''
}
</script>
