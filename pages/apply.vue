<template>
    <div class="pt-8 hero text-neutral-content">
        <div class="flex-col hero-content lg:flex-row">
            <div class="lg:ml-[-5em]">
                <h1 class="text-5xl font-bold mb-6">Application Forms</h1>
                <div class="flex flex-col gap-4 py-4">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLScvrMhn7sNihzMJUOU1xQwhH3wv-Tv6WBTG6KqpQUe-LrrRHQ/viewform?usp=header" target="_blank" rel="noopener"
                        class="btn btn-primary text-lg py-6">Apply as a Delegation</a>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLScF7AplSzyK-m31LV93es2o1UMuil-IE_pO8U4kwod6I39klA/viewform?usp=header" target="_blank" rel="noopener"
                        class="btn btn-primary text-lg py-6">Apply as an Individual Delegate</a>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSexn_l9m0zl5xVRV_ntjlo1BN3J_pVmkmj0kS89O--Pb4C_JA/viewform?usp=header" target="_blank" rel="noopener"
                        class="btn btn-primary text-lg py-6">Apply as an Admin</a>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLScCoJxccyVqr8tmUkSkG0UDGSn6sQ4oPfEie-Oy7yoZEbCIqQ/viewform?usp=header" target="_blank" rel="noopener"
                        class="btn btn-primary text-lg py-6">Apply as a Press Member</a>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSdn4ERpaojocHMbtmyo5lwjsLDVKgRzTNW7eHuKUPqNqu3xRg/viewform?usp=header" target="_blank" rel="noopener"
                        class="btn btn-primary text-lg py-6">Apply as a PR Member</a>
                </div>
            </div>
            <div class="divider divider-horizontal max-sm:hidden"></div>
            <div>
                <h1 class="text-5xl font-bold mb-6 lg:mt-[-1.75em]">Fees</h1>
                <div class="flex flex-col gap-4 py-4">
                    <h4 class="text-lg">Delegations: 700₺ per delegate</h4>
                    <h4 class="text-lg">Individual Delegates: 750₺</h4>
                    <h4 class="text-lg">Admins, Press & PR Members: 500₺</h4>
                </div>
            </div>
            <!-- <div>
                <h1 class="text-5xl font-bold mb-6">Applications to ValidebağTrain'26 have been closed.</h1>
                <h2 class="text-4xl font-bold mb-6">Thank you for your interest.</h2>
            </div> -->
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