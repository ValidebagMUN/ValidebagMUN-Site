<template>
    <div>
        <Committee v-bind="committee"/>
    </div>
</template>

<script setup lang="ts">
const committee = {
    slug: 'HUNSC',
    name: 'Historical United Nations Security Council',
    agenda: [
        'The Second Congo War'
    ],
    text: 'The Second Congo War, also known as Africa\'s World War, began on 2 August 1998 in the Democratic Republic of the Congo when President Laurent-Désiré Kabila turned against his former allies, Rwanda and Uganda, sparking a massive conflict involving nine African nations and around 25 armed groups. Though a peace agreement was signed in 2002 and a transitional government formed in 2003, violence has continued in eastern Congo through various insurgencies. The war, driven in part by the trade in conflict minerals, resulted in an estimated 3 to 5.4 million deaths and displaced about 2 million people, mostly from disease and malnutrition, making it the deadliest conflict since World War II.\n\nDelegates will serve as the United Nations Security Council members in the first edition of ValidebağMUN and will confront the crisis in the Democratic Republic of Congo. The UNSC has previously addressed the conflict through resolutions like 1234, calling for an immediate ceasefire and the withdrawal of foreign forces. Now, with the resurgence of violence and the humanitarian situation deteriorating, the Council faces renewed pressure to act decisively. It is your turn to navigate complex geopolitical interests, the ethics of intervention, and the challenges of enforcing peace in a region where minerals are as much a curse as a blessing. Are you ready to confront one of the world\'s deadliest wars and shape the path to lasting peace?',
    image: '/img/committees/bg/hunsc.png',
    chair: 'Emre Akın Albayrak, Deputy: Hamza Gezersu',
    usg: 'Ali Eren Sırtıkara',
    acas: 'Tarık Eren Yılmaz',
    sg: 'https://docs.google.com/document/d/1v9qUiWmqirp7t1knY2z54UFRykCjaeT3IeTeF9jRCnA'
}
</script>

<style scoped>

</style>