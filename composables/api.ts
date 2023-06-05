export const useApi = () => {
    const options = useAppConfig().fetchOptions || {}
    const apiFetch = useFetch().create(options)
    return apiFetch
}