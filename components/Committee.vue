<template>
    <Title>{{ slug.toUpperCase() }} - ValidebağMUN</Title>
    <Suspense>
        <template #default>
        <div class="hero min-h-[92vh] bg-base-300 dark:bg-neutral text-secondary dark:text-base-100">
        <div class="hero-content flex-col lg:flex-row-reverse">
            <img v-if="image" :src="image" class="max-w-sm rounded-lg shadow-2xl bg-base-100 dark:bg-base-300" />
            <div>
                <h1 class="mb-3 text-5xl font-bold uppercase">{{ slug }}</h1>
                <h2 class="text-3xl">{{ name }}</h2>
                <div class="mb-4 mt-2">
                    <h3 v-for="item in agenda" class="text-xl font-medium">Agenda Item{{ agenda.length > 1 ? ' ' + (agenda.indexOf(item) + 1) : ''}}: <span class="text-lg">{{ item }}</span></h3>
                </div>
                <hr class="w-[60vw]">
                <p class="py-6 whitespace-pre-line">{{ text }}</p>
                <hr v-if="usg || acas" class="w-[60vw]">
                <div class="flex my-4 justify-between text-xl max-w-[60vw]">
                    <h3 v-if="usg">{{ usg }}</h3>
                    <h3 v-if="acas">{{ acas }}</h3>
                </div>
                <hr v-if="rop || studyguide" class="mb-5 w-[60vw]">
                <NuxtLink v-if="rop" :to="rop" class="mr-5"><span class="btn btn-primary">Rules of Procedure</span></NuxtLink>
                <NuxtLink v-if="studyguide" :to="studyguide" class="mr-5"><span class="btn btn-primary">Study Guide</span></NuxtLink>
            </div>
        </div>
        </div>
        </template>
        <template #fallback>
            <div class="hero min-h-[92vh] bg-base-300 dark:bg-neutral text-secondary dark:text-base-100">
            <div class="hero-content flex-col lg:flex-row-reverse">
            </div>
            </div>
        </template>
    </Suspense>
</template>

<script setup lang="ts">
defineProps({
    slug: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true
    },
    agenda: {
        type: Array<String>,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    usg: {
        type: String,
        required: true
    },
    acas: {
        type: String,
        required: true
    },
    rop: {
        type: String,
        required: true
    },
    studyguide: {
        type: String,
        required: true
    },
})
</script>

<style scoped>

</style>