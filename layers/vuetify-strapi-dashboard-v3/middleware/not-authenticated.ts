export default defineNuxtRouteMiddleware(async (to, _from) => {
    /*if (await useCheckAuth() == true) {
        const newTo = useCookie('redirect').value ?? useAuthRoutes('profile') ?? '/'
        return navigateTo(newTo)
    }*/
    const user = useStrapiUser()
    if (user.value) {
        useCookie('redirect', { path: '/' }).value = to.fullPath
        return navigateTo('/admin')
    }
})