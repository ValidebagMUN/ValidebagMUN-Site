<template>
    <div class="hero text-neutral-content overflow-clip">
        <div class="flex-col hero-content lg:flex-row">
            <div>
                <h1 class="mt-6 text-5xl font-bold text-center">COMMITTEES</h1>
                <div class="container flex flex-col items-center justify-center lg:flex-row">
                    <CommitteeCard img="/img/committees/logo/unga.png" slug="unga" name="United Nations General Assembly" />
                    <CommitteeCard img="/img/committees/logo/unep.png" slug="unep" name="United Nations Environment Programme" />
                    <CommitteeCard img="/img/committees/logo/unctad.png" slug="unctad" name="United Nations Conference on Trade and Development" />
                </div>
                <div class="container flex flex-col items-center justify-center lg:flex-row">
                    <CommitteeCard img="/img/committees/logo/unsc.png" slug="unsc" name="United Nations Security Council" />
                    <CommitteeCard img="/img/committees/logo/interpol.png" slug="interpol" name="International Criminal Police Organization" />
                    <CommitteeCard img="/img/committees/logo/senate.png" slug="senate" name="US Senate" />
                </div>
                <div class="container flex flex-col items-center justify-center lg:flex-row">
                    <CommitteeCard img="/img/committees/logo/ec.png" slug="ec" name="European Commission" />
                    <CommitteeCard img="/img/committees/logo/hcc.png" slug="hcc" name="HCC" />
                    <CommitteeCard img="/img/committees/logo/jcc.png" slug="jcc" name="JCC" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
useSchemaOrg([
    defineWebPage({
        name: 'Committees',
        description: 'Explore the committees of ValidebağMUN\'25.',
    })
])
</script>

<style scoped>

</style>