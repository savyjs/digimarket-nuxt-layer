export default defineEventHandler((event) => {

    const url = useAppConfig()?.blog?.devto?.api
    const username = useAppConfig()?.blog?.devto?.username

    const query = getQuery(event)
    const page = query?.page || 1

    const fetchUrl = url + '/articles?' + username


    return {
        fetchUrl
    }
});