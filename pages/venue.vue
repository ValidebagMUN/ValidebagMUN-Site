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
                <h3 class="py-4 text-lg">You can easily reach our venue by following these precise routes:</h3>
                <!-- <h4 class="font-bold">IETT</h4>
                <p>Kadıköy: 15BK, 130, 130A, 130Ş, 14A, 19E, 10T, 21G, 21U, 20Ü, 16C, 16K, 14DK, 20E, E11, E10
                <br>Üsküdar: 320A, 11T, 13M, 16A, 16U, 16F
                <br>Sabiha Gökçen Airport: E10, E11
                <br>"İstanbul Medeniyet Üniversitesi" stop
                <br>
                <br>Ümraniye: 14ES, 8E, 14B, 14DK
                <br>Taksim: 129T
                <br>"Göztepe Köprüsü" stop
                </p>
                <br> -->
                <h4 class="font-bold">METRO</h4>
                <p>M4 Üsküdar-Samandra Subway Line
                <br>Üsküdar Stop</p>
                <br>
                <h4 class="font-bold">MARMARAY</h4>
                <p>B1 Halkalı – Gebze & Ataköy – Pendik Suburbain Train
                <br>Üsküdar Stop</p>
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