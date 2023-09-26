export default defineEventHandler((event) => {
    const url = useAppConfig()?.blog?.devto?.api
    const username = useAppConfig()?.blog?.devto?.username
    const id = getRouterParam(event, 'id') || 1
    const fetchUrl = url + '/articles/' + id

    return `${fetchUrl}!`
})