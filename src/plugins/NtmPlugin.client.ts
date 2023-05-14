import {defineNuxtPlugin, useRouter} from "nuxt/app";

export default defineNuxtPlugin((nuxtApp) => {

    const vClickoutside = {
        beforeMount: function (el, binding, vnode) {
            binding.event = function (event) {
                if (!(el === event.target || el.contains(event.target))) {
                    if (binding.value instanceof Function) {
                        binding.value(event)
                    }
                }
            }
            document.body.addEventListener('click', binding.event)
        },
        unmounted: function (el, binding, vnode) {
            document.body.removeEventListener('click', binding.event)
        }
    }

    nuxtApp?.vueApp?.directive('clickoutside', vClickoutside)
    const router = useRouter();
    router?.addRoute({
        name: 'NtmLogin',
        path: '/market/user/login',
    })
    return {
        provide: {}
    }
})
