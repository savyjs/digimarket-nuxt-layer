export default defineNuxtRouteMiddleware(async (to, _from) => {
    const user = useStrapiUser()
    if (user.value) {
        return useAuthNavigate("dashboard")
    }
})