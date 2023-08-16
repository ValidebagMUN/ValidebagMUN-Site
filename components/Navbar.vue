<template>
    <div class="navbar bg-base-100 dark:bg-secondary dark:text-base-200">
        <div class="navbar-start">
            <div class="dropdown">
                <label tabindex="0" class="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </label>
                <ul tabindex="0"
                    class="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-30 dark:bg-secondary dark:text-primary">
                    <li>
                        <NuxtLink to="/">Home</NuxtLink>
                    </li>
                    <li tabindex="0">
                        <NuxtLink to="" class="justify-between">
                            Our Team
                            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                viewBox="0 0 24 24">
                                <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                            </svg>
                        </NuxtLink>
                        <ul class="p-2 bg-base-100 dark:bg-secondary dark:text-primary">
                            <li>
                                <NuxtLink to="/team/secretariat/">Secretariat</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/team/directorate/">Directorate</NuxtLink>
                            </li>
                        </ul>
                    </li>
                    <li tabindex="0">
                        <NuxtLink to="/committees/" class="justify-between">
                            Committees
                            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                viewBox="0 0 24 24">
                                <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                            </svg>
                        </NuxtLink>
                        <ul class="p-2 bg-base-100 dark:bg-secondary dark:text-primary">
                            <li><NuxtLink to="/committees/unga/">UNGA</NuxtLink></li>
                            <li><NuxtLink to="/committees/ecosoc/">ECOSOC</NuxtLink></li>
                            <li><NuxtLink to="/committees/unodc/">UNODC</NuxtLink></li>
                            <li><NuxtLink to="/committees/unsc/">UNSC</NuxtLink></li>
                            <li><NuxtLink to="/committees/ecowas/">ECOWAS</NuxtLink></li>
                            <li><NuxtLink to="/committees/icj/">ICJ</NuxtLink></li>
                            <li><NuxtLink to="/committees/jcc/">JCC</NuxtLink></li>
                            <li><NuxtLink to="/committees/hcc/">HCC</NuxtLink></li>
                            <li><NuxtLink to="/committees/cjcc/">CJCC</NuxtLink></li>
                        </ul>
                    </li>
                    <li>
                        <NuxtLink to="/faq">FAQ</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/contact">Contact Us</NuxtLink>
                    </li>
                </ul>
            </div>
            <ClientOnly>
                <img class="w-14 ml-1 z-5 hidden lg:flex" :src="icon" @click="incrementCounter" />
            </ClientOnly>
            <NuxtLink to="/"
                class="btn normal-case bg-inherit hover:bg-inherit text-[#2F3128] border-0 dark:text-primary pl-0.5 text-2xl">
                ValidebağMUN
            </NuxtLink>
        </div>
        <div class="navbar-center hidden lg:flex">
            <ul class="menu menu-horizontal px-1">
                <li>
                    <NuxtLink to="/">Home</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="">
                        Our Team
                        <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                            viewBox="0 0 24 24">
                            <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                        </svg>
                    </NuxtLink>
                    <ul class="bg-base-100 dark:bg-secondary z-10 p-2 w-[134px]">
                        <li>
                            <NuxtLink to="/team/secretariat/">Secretariat</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/team/directorate/">Directorate</NuxtLink>
                        </li>
                    </ul>
                </li>
                <li tabindex="0">
                    <NuxtLink to="">
                        Committees
                        <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                            viewBox="0 0 24 24">
                            <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                        </svg>
                    </NuxtLink>
                    <ul class="bg-base-100 dark:bg-secondary z-10 p-2 w-[152px]">
                        <li><NuxtLink to="/committees/unga/">UNGA</NuxtLink></li>
                        <li><NuxtLink to="/committees/ecosoc/">ECOSOC</NuxtLink></li>
                        <li><NuxtLink to="/committees/unodc/">UNODC</NuxtLink></li>
                        <li><NuxtLink to="/committees/unsc/">UNSC</NuxtLink></li>
                        <li><NuxtLink to="/committees/ecowas/">ECOWAS</NuxtLink></li>
                        <li><NuxtLink to="/committees/icj/">ICJ</NuxtLink></li>
                        <li><NuxtLink to="/committees/jcc/">JCC</NuxtLink></li>
                        <li><NuxtLink to="/committees/hcc/">HCC</NuxtLink></li>
                        <li><NuxtLink to="/committees/cjcc/">CJCC</NuxtLink></li>
                    </ul>
                </li>
                <li>
                    <NuxtLink to="/faq/">FAQ</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/contact/">Contact Us</NuxtLink>
                </li>
            </ul>
        </div>
        <div class="navbar-end mr-1">
            <NuxtLink to="/apply/"><span class="btn btn-ghost bg-base-200 dark:bg-primary dark:text-secondary shadow">Apply
                    Now</span>
            </NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts">
const counter = ref(0)
function incrementCounter() {
    counter.value++
}
watchEffect(() => {
    if(counter.value % 5 == 0 && counter.value != 0) {
        console.log("theme change!")
        useHead({
            htmlAttrs: {
                'data-theme': 'century',
                class: 'light'
            }
        })
    }
    else{
        useHead({
            htmlAttrs: {
                'data-theme': 'vmun'
            }
        })
    }
})

const props = defineProps({
    isDark: {
        type: Boolean,
        default: false
    }
})
const icon = computed(() => props.isDark ? '/vmun-light.svg' : '/vmun-dark.svg')
</script>

<style scoped></style>