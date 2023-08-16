<template>
    <Title>ValidebağMUN</Title>
    <div class="hero min-h-[92vh] bg-base-300 dark:bg-neutral text-secondary dark:text-base-100">
        <div class="hero-content text-center">
            <div class="min-w-lg">
                <h1 class="text-5xl font-bold">Welcome to the Avant-garde</h1>
                <p class="py-6"><em>"In a gentle way, you can shake the world"</em></p>
                <button class="btn btn-primary" @click="scrollToElement">Shall we?</button>
            </div>
        </div>
    </div>
    <div class="hero min-h-[60vh] bg-base-300 dark:bg-neutral text-secondary dark:text-base-100">
        <div class="hero-content text-center">
            <div class="min-w-lg">
                <h1 class="text-5xl font-bold text-left">Letter from the Secretary-General</h1>
                <p class="py-6 text-left max-w-[70vw]" id="letter">
                    Esteemed participants, <br> as the Secretary-General of the Validebağ Model United Nations Conference 2023, I have the pleasure to welcome you all to a conference that sticks to the ideals of the United Nations and inspiring the youth to take on a path to become future world leaders. Model United Nations holds a critical role in an average highschooler's or a college student's life with its ability to unleash our potential. Two centuries ago, Voltaire criticized the Germans for being neither "holy" nor "Roman" nor an "empire", and in a similar setting no Model United Nations conference is either a model of the United Nations system or representing the functioning of the United Nation with an accurate take. The origins and ideals are corrupted and a reform of our understanding of MUNs is much needed than ever. With ValidebağMUN, we take the United Nations as an example and implement it for the youth, the jewel of our future; and I can assure you to give you, dear participants, not just a model but a real United Nations experience.
                    <br><br>
                    <span>
                        Hakan Rüzgar KOCAOĞLU<br>
                        Secretary-General of ValidebağMUN 2023
                    </span>
                </p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const scrollToElement = () =>  {
  const letter = document.getElementById('letter');

  if (letter) {
    letter.scrollIntoView({ behavior: 'smooth' });
  }
}
</script>

<style scoped>

</style>