<template>
    <div class="flex-col w-full rounded-none join join-vertical text-neutral-content">
        <h1 class="mx-8 text-5xl font-bold my-14">Frequently Asked Questions</h1>
        <div class="border collapse collapse-plus join-item">
            <input type="radio" name="faq-accordion" />
            <div class="text-xl font-medium collapse-title">
                Which MUN procedure will ValidebağTrain follow?
            </div>
            <div class="collapse-content">
                <p>All committees will be following the HarvardMUN rules of procedure.</p>
            </div>
        </div>
        <div class="border collapse collapse-plus join-item">
            <input type="radio" name="faq-accordion" />
            <div class="text-xl font-medium collapse-title">
                What are the prescribed limits on the number of delegates per delegation?
            </div>
            <div class="collapse-content">
                <p>A delegation must consist of at least 5 delegates and may have a maximum of 20 delegates.</p>
            </div>
        </div>
        <div class="border collapse collapse-plus join-item">
            <input type="radio" name="faq-accordion" />
            <div class="text-xl font-medium collapse-title">
                What is the dress code of ValidebağTrain?
            </div>
            <div class="collapse-content">
                <p>Our dress code is "Western Business Attire". A delegate failing to abide by the dress code may have their right to audience suspended.</p>
            </div>
        </div>
        <div class="border collapse collapse-plus join-item">
            <input type="radio" name="faq-accordion" />
            <div class="text-xl font-medium collapse-title">
                Does ValidebağTrain have a refund policy?
            </div>
            <div class="collapse-content">
                <p>Due to the nature of the application process, it is unfortunately not possible for us to provide refunds. The ValidebağTrain Directorate will only provide refunds in case of an error on our side.</p>
            </div>
        </div>
        <div class="border collapse collapse-plus join-item">
            <input type="radio" name="faq-accordion" />
            <div class="text-xl font-medium collapse-title">
                What is the venue of ValidebağTrain?
            </div>
            <div class="collapse-content">
                <p>The venue of ValidebağTrain is set to be the Validebağ Science High School. For information on how to reach the venue, please check our <NuxtLink to="/venue" class="link">venue page</NuxtLink>.</p>
            </div>
        </div>
        <div class="border collapse collapse-plus join-item">
            <input type="radio" name="faq-accordion" />
            <div class="text-xl font-medium collapse-title">
                What is the schedule of ValidebağTrain?
            </div>
            <div class="collapse-content">
                <p>The scheduled date of this years edition of ValidebağTrain is 17-18 October 2026. <NuxtLink to="/schedule" class="link">here</NuxtLink>.</p>
            </div>
        </div>
        <div class="border collapse collapse-plus join-item">
            <input type="radio" name="faq-accordion" />
            <div class="text-xl font-medium collapse-title">
                Is there an eligibility criterion for delegates?
            </div>
            <div class="collapse-content">
                <p>ValidebağTrain is open to students of secondary or higher educational institutions.</p>
            </div>
        </div>
        <div class="border collapse collapse-plus join-item">
            <input type="radio" name="faq-accordion" />
            <div class="text-xl font-medium collapse-title">
                Will ValidebağTrain provide accommodation for applicants from outside Istanbul?
            </div>
            <div class="collapse-content">
                <p>Unfortunately, we cannot provide accommodation for any applicants. It is the responsibility of the applicant.</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
useHead({ title: 'FAQ' })
useSchemaOrg([
    defineWebPage({
        '@type': 'FAQPage'
    }),
    defineQuestion({
        question: 'Which MUN procedure will ValidebağTrain follow?',
        answer: 'All committees will be following the HarvardMUN rules of procedure.'
    }),
    defineQuestion({
        question: 'What are the prescribed limits on the number of delegates per delegation?',
        answer: 'A delegation must consist of at least 5 delegates and may have a maximum of 20 delegates.'
    }),
    defineQuestion({
        question: 'What is the dress code of ValidebağTrain?',
        answer: 'Our dress code is "Western Business Attire". A delegate failing to abide by the dress code may have their right to audience suspended.'
    }),
    defineQuestion({
        question: 'Does ValidebağTrain have a refund policy?',
        answer: 'Due to the nature of the application process, it is unfortunately not possible for us to provide refunds. The ValidebağTrain Directorate will only provide refunds in case of an error on our side.'
    }),
    defineQuestion({
        question: 'What is the venue of ValidebağTrain?',
        answer: 'The venue of ValidebağTrain is set to be Üsküdar University\'s Çarşı Campus. For information on how to reach the venue, please check our <a href="/venue" class="link">venue page</a>.'
    }),
    defineQuestion({
        question: 'What is the schedule of ValidebağTrain?',
        answer: 'The scheduled date of this years edition of ValidebağTrain is 30 June and 1-2 July 2025. <a href="/schedule" class="link">here</a>.'
    }),
    defineQuestion({
        question: 'Is there an eligibility criterion for delegates?',
        answer: 'ValidebağTrain is open to students of secondary or higher educational institutions.'
    }),
    defineQuestion({
        question: 'Will ValidebağTrain provide accommodation for applicants from outside Istanbul?',
        answer: 'Unfortunately, we cannot provide accommodation for any applicants. It is the responsibility of the applicant.'
    })
])
</script>

<style scoped>

</style>