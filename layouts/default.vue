<template>
    <div>
        <Head>
            <Html lang="en" />
            <Link rel="icon" type="image/svg+xml" :href="favicon" />
            <Meta name="canonical" content="https://www.validebagmun.org"></Meta>
            <Meta name="keywords" contens="validebağ, validebağmun, mun, model united nations, high school, united nations"></Meta>
        </Head>
        <Header :is-dark="isDark" />
        <div class="min-h-[89vh] bg-base-100">
            <!-- <NuxtLoadingIndicator :color="isDark ? '#2E4165' : '#5D1C25'" /> -->
            <NuxtLoadingIndicator color="#9D0410"/>
            <NuxtPage />
        </div>
        <Footer :is-dark="isDark" />
    </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode()

// const isDark = computed(() => colorMode.value === 'dark')
// const favicon = computed(() => isDark.value ? '/vmun-white.svg' : '/vmun-black.svg')

// Temporary constant dark mode for annual theme
const favicon = '/vmun-black.svg'
const isDark = true

useSchemaOrg([
    defineWebPage(),
    defineWebSite({
        name: 'ValidebağMUN',
        description: 'Website of the Validebağ Model United Nations Conference.'
    }),
    defineOrganization({
        name: 'ValidebağMUN',
        logo: '/logo.png',
        url: "https://www.validebagmun.org",
        sameAs: [
            "https://www.instagram.com/validebagmun/",
            "https://github.com/ValidebagMUN"
        ]
    })
])
</script>

<style scoped>

</style>