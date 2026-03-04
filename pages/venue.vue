<template>
    <div class="pt-8 hero text-neutral-content overflow-clip">
        <div class="flex-col-reverse hero-content lg:flex-col-reverse">
            <!-- Train -->
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.5942732924304!2d29.039484177063027!3d41.0122527713501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab9d47a2cdcd7%3A0xa003f63ae86dd751!2sValideba%C4%9F%20Fen%20Lisesi!5e0!3m2!1str!2str!4v1754575623911!5m2!1str!2str" 
                class="lg:h-60 h-40 w-full aspect-[4/3] border-4 border-info" frameborder="0"
                referrerpolicy="no-referrer-when-downgrade">

            </iframe>
            <!--
            ValidebagMUN
            <iframe class="lg:h-96 h-80 aspect-[4/3] border-4 border-primary" frameborder="0"
                referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCzdbHExaPDtTBBU09ntpUauoSbpdQYUQY
                    &q=%C3%9Csk%C3%BCdar%20%C3%9Cniversitesi%20%C3%87ar%C5%9F%C4%B1%20Yerle%C5%9Fkesi
                    &zoom=17
                    &maptype=satellite">
            </iframe> -->
            <div>
                <h1 class="text-5xl font-bold">Venue</h1>
                <h3 class="py-4 text-xl">Validebağ Science High School
                </h3>
                <div class="m-0 divider divider-info"></div>
                <h3 class="py-4 text-lg">You can easily reach our venue by following these routes:</h3>
                <div class="grid grid-cols-2 grid-rows-2 gap-1">
                    <div class="border-1 p-2 border-info">
                        <h4 class="font-bold">BUS - IETT</h4>
                        <p>Kadıköy: 14C
                        <br>Üsküdar: 6, 11T, 12C</p>
                        <br>
                        <h4 class="font-bold">MINIBUS</h4>
                        <p>Kadıköy - Acıbadem Minibus</p>
                    </div>
                    <div class="border-1 border-info p-2">
                        <h4 class="font-bold">METRO</h4>
                        <p>>M5 Üsküdar-Samandıra Subway Line
                        <br>Altunizade Stop - Exit 7
                        <br>>M4 Kadıköy-Sabiha Gökçen Airport Subway Line
                        <br>Ayrılık Çeşmesi Stop</p>
                    </div>
                    <div class="border-1 border-info p-2">
                        <h4 class="font-bold">MARMARAY</h4>
                        <p>B1 Halkalı - Gebze & Ataköy - Pendik Suburban Train
                        <br>Ayrılık Çeşmesi Stop</p><br>
                    </div>
                    <div class="border-1 border-info p-2">
                        <h4 class="font-bold">METROBUS</h4>
                        <p>Altunizade Stop</p><br>
                    </div>
                </div>
                <!-- <h4 class="font-bold">FERRY</h4>
                <p>From Beşiktaş and Eminönü Piers to Üsküdar Pier</p> -->
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
useSchemaOrg([
    defineWebPage({
        description: 'Learn how to reach the venue of Validebağ MUN 2025.',
    })
])
</script>

<style scoped>

</style>