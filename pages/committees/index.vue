<template>
    <div class="hero text-neutral-content overflow-clip">
        <div class="flex-col hero-content lg:flex-row">
            <div>
                <h1 class="mt-6 text-5xl font-bold text-center">COMMITTEES</h1>
                <div class="container flex flex-col items-center justify-center lg:flex-row">
                    <CommitteeCard img="/img/committees/logo/disec.png" slug="disec" name="Disarmament and International Security Committee" />
                    <CommitteeCard img="/img/committees/logo/sochum.png" slug="sochum" name="Social, Humanitarian and Cultural Committee" />
                    <CommitteeCard img="/img/committees/logo/unhrc.png" slug="unhrc" name="United Nations Human Rights Council" />
                </div>
                <div class="container flex flex-col items-center justify-center lg:flex-row">
                    <CommitteeCard img="/img/committees/logo/unep.png" slug="unep" name="United Nations Environmental Programme" />
                    <CommitteeCard img="/img/committees/logo/unodc.png" slug="unodc" name="United Nations Office of Drugs and Crime" />
                    <CommitteeCard img="/img/committees/logo/who.png" slug="who" name="World Health Organization" />
                </div>
                <div class="container flex flex-col items-center justify-center lg:flex-row">
                    <CommitteeCard img="/img/committees/logo/hunsc.png" slug="hunsc" name="Historical United Nations Security Council" />
                </div> 
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
useSchemaOrg([
    defineWebPage({
        name: 'Committees',
        description: 'Explore the committees of ValidebağTrain\'26.',
    })
])
</script>

<style scoped>

</style>