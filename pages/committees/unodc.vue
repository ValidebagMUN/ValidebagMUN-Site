<template>
    <div>
        <Committee v-bind="committee"/>
    </div>
</template>

<script setup lang="ts">
const committee = {
    slug: 'UNODC',
    name: 'United Nations Office on Drugs and Crime',
    agenda: ['Adressing the Role of Digital Currencies in Tax Evasion and Money Laundering Schemes'],
    text: 'Digital currencies have made tremendous progress in the last 40 years, going from just being an idea to a crucial cornerstone of the modern world of finance. Digital currencies offer fast, secure and easy transactions over long distances, even internationally. However, this internationality along with their decentralized nature and potential anonymity make them highly viable tools for financial crimes such as money laundering and tax evasions.\n\nIn this committee, delegates will come up with new regulations and improve pre-existing ones to combat the usage of digital currencies in illicit financial activities.',
    image: '/img/committees/bg/bg.png',
    logo: '/img/committees/logo/unodc.png',
    chair: 'Deniz Yıldırım - Alya Öz',
    acas: 'Çınar Bal'
}
</script>

<style scoped>

</style>