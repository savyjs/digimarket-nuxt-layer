export default defineNuxtRouteMiddleware((to, _from) => {
    if (useCheckAuth() === true) {
        const newTo = useCookie('redirect').value || '/profile'
        return navigateTo(newTo)
    }
})