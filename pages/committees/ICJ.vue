<template>
    <div>
        <Committee v-bind="committee" />
    </div>
</template>

<script setup lang="ts">
const committee = {
    slug: 'icj - cij',
    name: 'International Court of Justice - Cour internationale de justice',
    agenda: [
        'The Gambia v. Myanmar case'
    ],
    text: 'The International Court of Justice (abbreviated as ICJ) is one of the six principal organs of the United Nations acting as an interstate court or as some refer a “World Court”. It is to settle disputes between states in accordance with international law and provides advisory opinions on international legal issues. The Court is the only international court that adjudicates general disputes between countries rulings and opinions serving as the primary source of international law.\n\nThe Rohingya are a Muslim Indo-Aryan ethnic minority facing mass persecution and ethnic cleansing in Myanmar in recent years. Their persecution has been commonly described as genocide. The Myanma government deems the Rohingya as illegal immigrants and describes the conflict as an "internal armed conflict".\n\nOn 11 November 2019, on behalf of the Organization of Islamic Cooperation, The Gambia applied to the Court against Myanmar alleging that Myanmar has committed mass murder; rape, and destruction of communities against the Rohingya since October 2016. Now it is the Court\'s time to decide and give a verdict in accordance with international law and determine the situation of the Rohingya.',
    image: '/img/icj.png',
    usg: '',
    acas: '',
    rop: '',
    studyguide: ''
}
</script>

<style scoped>

</style>