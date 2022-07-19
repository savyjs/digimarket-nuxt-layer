
export default defineNuxtPlugin((nuxtApp) => {
    // nuxtApp.vueApp.directive('clickOutside', ClickOutside)
    const router = useRouter();
    router.addRoute({
        name: 'NtmLogin',
        path: '/market/user/login',
    })
    return {
        provide: {}
    }
})
