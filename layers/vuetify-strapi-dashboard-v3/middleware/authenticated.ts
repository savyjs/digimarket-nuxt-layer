export default defineNuxtRouteMiddleware((to, from) => {
    if (useAuth().checkLogin() !== true) {
        return navigateTo('/admin/login')
    }
})