<template>
    <div>
        <div class="min-h-[89vh] hero" style="background-image: url(/img/team/main.jpg);">
            <div class="hero-overlay bg-opacity-100 opacity-25 bg-base-100"></div>
            <div class="text-center hero-content text-base-content">
                <div class="max-w-md">
                    <h1 class="mt-[2em] mb-5 text-5xl font-bold">Introducing ValidebağMUN</h1>
                    <div class="grid justify-center grid-flow-col gap-5 mb-2 text-center auto-cols-max">
                        <div class="flex flex-col">
                            <span class="font-mono text-5xl countdown">
                                <span :style="'--value:' + date.days + ';'" id="days"></span>
                            </span>
                            days
                        </div>
                        <div class="flex flex-col">
                            <span class="font-mono text-5xl countdown">
                                <span :style="'--value:' + date.hours + ';'" id="hrs"></span>
                            </span>
                            hours
                        </div>
                        <div class="flex flex-col">
                            <span class="font-mono text-5xl countdown">
                                <span :style="'--value:' + date.minutes + ';'" id="min"></span>
                            </span>
                            min
                        </div>
                        <div class="flex flex-col">
                            <span class="font-mono text-5xl countdown">
                                <span :style="'--value:' + date.seconds + ';'" id="sec"></span>
                            </span>
                            sec
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="min-h-[80vh] py-10 pt-20 mx-20 text-neutral">
            <h2 class="text-3xl font-bold">Letter from the Secretary-General</h2>
            <div class="m-0 my-3 divider divider-neutral"></div>
            <h3 class="mb-2 text-2xl font-bold">Most Esteemed Delegates,</h3>
            <p class="text-xl">
            It is both an honor and a true pleasure to welcome each and every one of you to the very first edition of ValidebağMUN. My name is Zeynep Rüya Özdemir, and as your Secretary-General, I can confirm that our team has worked very hard with great diligence in order to create a memorable experience.
            <br><br>
            We have poured great effort into designing committees that provide an inclusive environment, where delegates can express themselves freely, regardless of their previous experience or background. Our aim was to eliminate any sense of hierarchy and ensure a space where everyone feels equally valued and empowered to speak.
            <br><br>
            In preparation for the sessions ahead, we have created comprehensive study guides that dive into each agenda item with careful attention to detail. These guides are meant to not only inform, but to inspire you deeply with the issues at hand and think critically about possible solutions. Apart from the committees, we have also prepared a variety of social activities and breaks that will allow you to relax, recharge, and build friendships with other delegates.
            <br><br>
            Throughout these three days, I hope you take full advantage of this opportunity, not only to show yourself as a delegate, but to connect with people who challenge you, support you, and remind you why Model United Nations is such a unique and special experience. While getting to know both the academy and organization, I whole-heartedly hope you have a great three days and get to know people that make you grateful you met them.
            <br><br>
            Thank you for being a part of this journey. I wish you all the very best in your debates, discussions, and discoveries.
            <br><br>
            Buona fortuna,
            </p>
            <h3 class="mt-4 text-2xl font-bold">Zeynep Rüya Özdemir<br>Secretary-General of ValidebağMUN'25</h3>
        </div>
    </div>
</template>

<script setup lang="ts">
const date = ref({ days: 15, hours: 5, minutes: 19, seconds: 19 });
onNuxtReady(() => {
    setInterval(() => {
        const eventStartTime = Date.now();
        const eventEndTime = new Date('2025-06-30 00:00:00Z');
        const duration = eventEndTime.valueOf() - eventStartTime.valueOf();
        date.value = { days: Math.floor(duration / (1000 * 60 * 60 * 24)), hours: Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)), minutes: Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60)), seconds: Math.floor((duration % (1000 * 60)) / 1000) };
    }, 1000);
})
</script>

<style scoped>

</style>