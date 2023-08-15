<template>
    <div>
        <Committee v-bind="committee"/>
    </div>
</template>

<script setup lang="ts">
const committee = {
    slug: 'unsc',
    name: 'United Nations Security Council',
    agenda: [
        
    ],
    text: 'The United Nations Security Council (abbreviated as UNSC) is one of the six principal organs of the United Nations in charge maintaining international peace and security as one of the most authorized entitites in the United Nations System, the Security Council holds power to establish peacekeeping operations, enacting international sanctions, and authorizing military action. It is the only body to issue binding resolutions.\n\nThe Security Council has played a crucial role with preventing and resolving conflicts all around the world and conserving global and regional peace. It has conducted many peacekeeping operations in various regions; toppling rogue entities, establishing buffer zones and as its mission requires: preserving peace and integrity in Member States.\n\n Most recently, Niger shook up the continent with a coup d\'état in July 2023 toppling the democraticly-elected government; the Economic, Community of Western African States (ECOWAS) responded with an ultimatum demanding the immidiate return to civil rule which Nigerien junta refused to concede leading to potential conflict in the region between Africa\'s "Coup Belt" nations and the Western African countries under civilian rule. The Security Council is to resolve the potential conflict with means of dialogue or if necessary, intervention.',
    image: '',
    usg: '',
    acas: '',
    rop: '',
    studyguide: ''
}
</script>
