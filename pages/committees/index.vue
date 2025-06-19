<template>
    <div class="hero text-neutral overflow-clip">
        <div class="flex-col hero-content lg:flex-row">
            <div>
                <h1 class="mt-6 text-5xl font-bold text-center">COMMITTEES</h1>
                <div class="container flex flex-col items-center justify-center lg:flex-row">
                    <CommitteeCard img="/img/committees/unga.png" slug="unga" name="United Nations General Assembly" />
                    <CommitteeCard img="/img/committees/unhrc.png" slug="unhrc" name="United Nations Human Rights Council" />
                    <CommitteeCard img="/img/committees/unodc.png" slug="unodc" name="United Nations Office on Drugs and Crime" />
                </div>
                <div class="container flex flex-col items-center justify-center lg:flex-row">
                    <CommitteeCard img="/img/committees/hunsc.png" slug="hunsc" name="Historical United Nations Security Council" />
                    <CommitteeCard img="/img/committees/nato.png" slug="nato" name="North Atlantic Treaty Council" />
                    <CommitteeCard img="/img/committees/lon.png" slug="lon" name="League of Nations" />
                </div>
                <div class="container flex flex-col items-center justify-center lg:flex-row">
                    <CommitteeCard img="/img/committees/hcc.png" slug="hcc" name="HCC: Gothic War" />
                    <CommitteeCard img="/img/committees/jcc.png" slug="jcc" name="JCC: Imjin War" />
                    <CommitteeCard img="/img/committees/fjcc.png" slug="fjcc" name="FJCC: Dance of the Dragons" />
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