export default defineNuxtRouteMiddleware((to, _from) => {
    if (useCheckAuth() !== true) {
        useCookie('redirect', { path: '/' }).value = to.fullPath
        return useAuthNavigate('login')
    }
})