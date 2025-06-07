<template>
    <div class="pt-8 hero text-neutral">
        <div class="flex-col hero-content lg:flex-row">
            <div class="lg:ml-[-5em]">
                <h1 class="text-5xl font-bold mb-6">Application Forms</h1>
                <div class="flex flex-col gap-4 py-4">
                    <a href="https://forms.gle/PQhq8KoCTkrKjHXF7" target="_blank" rel="noopener"
                        class="btn btn-primary text-lg py-6">Apply as a Delegation</a>
                    <a href="https://forms.gle/xNnVPwGJ6GnKuKnW7" target="_blank" rel="noopener"
                        class="btn btn-primary text-lg py-6">Apply as an Individual Delegate</a>
                    <a href="https://forms.gle/sgEHSSr2cbRgFpk86" target="_blank" rel="noopener"
                        class="btn btn-primary text-lg py-6">Apply as an Admin</a>
                    <a href="https://forms.gle/S7M3A7ZJxqWmondF7" target="_blank" rel="noopener"
                        class="btn btn-primary text-lg py-6">Apply as a Press Member</a>
                </div>
            </div>
            <div class="divider divider-horizontal max-sm:hidden"></div>
            <div>
                <h1 class="text-5xl font-bold mb-6 lg:mt-[-1.75em]">Fees</h1>
                <div class="flex flex-col gap-4 py-4">
                    <h4 class="text-lg">Delegations: 1275₺ per delegate</h4>
                    <h4 class="text-lg">Individual Delegates: 1290₺</h4>
                    <h4 class="text-lg">Admins: 675₺</h4>
                    <h4 class="text-lg">Press: 650₺</h4>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
useSchemaOrg([
    defineWebPage({
        name: 'Apply',
        description: 'Application forms and fees for ValidebağMUN\'25.',
    })
])
</script>

<style scoped></style>