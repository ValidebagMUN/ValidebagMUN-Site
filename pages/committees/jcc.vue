<template>
    <div>
        <Committee v-bind="committee"/>
    </div>
</template>

<script setup lang="ts">
const committee = {
    slug: 'JCC',
    name: 'The Siege of La Rochelle',
    agenda: [],
    text: 'The Siege of La Rochelle during 1627–1628 formed a major confrontation in the French Wars of Religion between the Catholic monarchy of Louis XIII of France and the Protestant Huguenot stronghold in the Atlantic port city of La Rochelle. The rebellion of the city challenged royal authority and threatened the consolidation of power under the French crown. With support from foreign Protestant powers, especially the intervention led by George Villiers, 1st Duke of Buckingham of England, the conflict expanded beyond an internal uprising and risked becoming a broader European confrontation. Under the direction of Cardinal Richelieu, royal forces launched a prolonged siege designed to isolate the city through military pressure and a naval blockade, including the construction of a massive sea wall to cut access to outside aid. As famine, disease, and civilian suffering increased within the besieged city, both sides faced difficult strategic choices regarding military escalation, foreign alliances, and political compromise. The Joint Crisis Committee is therefore tasked with determining the future course of the siege, coordinating military and diplomatic strategy, and deciding how the balance between royal authority, religious tensions, and international intervention will shape the outcome of the conflict.',
    image: '/img/committees/bg/bg.png',
    logo: '/img/committees/logo/jcc.png',
    chair: '',
    usg: ''
}
</script>

<style scoped>

</style>