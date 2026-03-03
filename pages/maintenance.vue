<template>
    <div class="pt-20 hero">
        <div class="text-center hero-content text-neutral-content">
            <div class="max-w-md">
                <h1 class="text-5xl font-bold">Hello there</h1>
                <p class="mt-5">Thanks for your interest! But our site is currently under maintenance so all features
                    and pages have been disabled, but do come back later.</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
onBeforeMount(async () => {
    const isMaintenance = JSON.parse(await $fetch('/api/maintenance'))
    if (isMaintenance == false) {
        const router = useRouter();
        router.push('/');
    }
})
</script>