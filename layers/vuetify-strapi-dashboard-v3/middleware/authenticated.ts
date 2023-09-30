export default defineNuxtRouteMiddleware(async (to, _from) => {
    if (await useCheckAuth() != true) {
        useCookie('redirect', {path: '/'}).value = to.fullPath
        return useAuthNavigate('login')
    }
})