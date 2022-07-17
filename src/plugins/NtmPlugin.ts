const ClickOutside = {
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
export default defineNuxtPlugin(() => {

    return {
        provide: {}
    }
})
