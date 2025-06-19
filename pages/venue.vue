<template>
    <div class="pt-8 hero text-neutral overflow-clip">
        <div class="flex-col-reverse hero-content lg:flex-row-reverse">
            <iframe class="lg:h-96 h-80 aspect-[4/3] border-4 border-primary" frameborder="0"
                referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCzdbHExaPDtTBBU09ntpUauoSbpdQYUQY
                    &q=%C3%9Csk%C3%BCdar%20%C3%9Cniversitesi%20%C3%87ar%C5%9F%C4%B1%20Yerle%C5%9Fkesi
                    &zoom=17
                    &maptype=satellite">
            </iframe>
            <div>
                <h1 class="text-5xl font-bold">Venue</h1>
                <h3 class="py-4 text-xl">Üsküdar University - Çarşı Campus
                </h3>
                <div class="m-0 divider divider-neutral"></div>
                <h3 class="py-4 text-lg">You can easily reach our venue by following these routes:</h3>
                <h4 class="font-bold">BUS - IETT</h4>
                <p>Kadıköy: 3ÜS, 12, 12A, 14F
                <br>Ümraniye / Ataşehir: 9ÜD, 11C, 11D, 11L, 320
                <br>Cevizlibağ: 500B
                </p><br>
                <h4 class="font-bold">METRO</h4>
                <p>M5 Üsküdar-Samandra Subway Line
                <br>Üsküdar Stop</p>
                <br>
                <h4 class="font-bold">MARMARAY</h4>
                <p>B1 Halkalı - Gebze & Ataköy - Pendik Suburbain Train
                <br>Üsküdar Stop</p><br>
                <h4 class="font-bold">FERRY</h4>
                <p>From Beşiktaş and Eminönü Piers to Üsküdar Pier</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
useSchemaOrg([
    defineWebPage({
        description: 'Learn how to reach the venue of ValidebağMUN\'25.',
    })
])
</script>

<style scoped>

</style>