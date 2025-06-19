<template>
    <div>
        <Committee v-bind="committee" />
    </div>
</template>

<script setup lang="ts">
const committee = {
    slug: 'fjcc',
    name: 'Dance of the Dragons',
    agenda: [],
    text: 'Westeros stands on the brink of an unprecedented chaos following the Conquest. Dragons scorch every corner of the Seven Kingdoms with fire.\n\nAfter the death of King Viserys I Targaryen, the Small Council and the people of the Seven Kingdoms became deeply divided over the rightful heir to the Iron Throne. One faction believes that the King’s daughter, Rhaenyra Targaryen — whom he officially and publicly declared as his legitimate heir — should ascend the throne and rule the realm. The opposing side argues that such a responsibility cannot be entrusted to a woman, and that the crown should pass to the King’s eldest son, Aegon II Targaryen. This dispute has split the realm in two, dragging the banners and powers loyal to each cause into a bloody civil war — one from which there may be no easy escape. The Green and Black factions now battle to shape the future of the realm for generations to come.\n\nDelegates of the FJCC: Dance of the Dragons committee will find themselves in a battlefield where chaos never ceases. However, war will not be the only thing testing their minds. The strategies they craft on paper, and the political maneuvers they undertake, will be what ultimately brings an end to this brutal conflict — and determines which side will sit upon the Iron Throne.',
    image: '/img/committees/bg/fjcc.png',
    chair: 'Black Side: Selen Can, Almila Kamator - Green Side: İlker Tınaz, Aslı Yıldız',
    usg: 'Zeynep Yılmaz',
    acas: 'Aral Kocatürk'
}
</script>

<style scoped></style>