export default defineNuxtRouteMiddleware((to, from) => {
    const runtimeConfig = useRuntimeConfig().public
    if(runtimeConfig.maintenance=='true' && to.path!='/maintenance') {
        return navigateTo('/maintenance')
    }
    else if(runtimeConfig.maintenance=='false' && to.path=='/maintenance') {
        return navigateTo('/')
    }
})