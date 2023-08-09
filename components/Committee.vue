<template>
    <div class="hero min-h-[92vh]">
        <div class="hero-content flex-col lg:flex-row-reverse">
            <img :src="image" class="max-w-sm rounded-lg shadow-2xl" />
            <div class="text-base-100">
                <h1 class="mb-3 text-5xl font-bold uppercase">{{ slug }}</h1>
                <h2 class="text-3xl">{{ name }}</h2>
                <h3 class="mb-4 text-xl font-medium">Agenda: {{ agenda }}</h3>
                <hr class="w-[60vw]">
                <p class="py-6 whitespace-pre-line">{{ text }}</p>
                <hr class="w-[60vw]">
                <div class="flex my-4 justify-between text-xl max-w-[60vw]">
                    <h3>{{ 'Under Secretary-General: ' + usg }}</h3>
                    <h3>{{ 'Academic Assistant: ' + acas }}</h3>
                </div>
                <hr class="mb-5 w-[60vw]">
                <NuxtLink :to="rop" class="mr-5"><span class="btn btn-primary">Rules of Procedure</span></NuxtLink>
                <NuxtLink :to="studyguide" class="mr-5"><span class="btn btn-primary">Study Guide</span></NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps({
    slug: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    agenda: {
        type: String,
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