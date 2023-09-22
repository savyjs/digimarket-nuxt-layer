export const useApi = () => {
    const options = useAppConfig().fetchOptions || {}
    // @ts-ignore
    const apiFetch = useFetch().create(options)
    return apiFetch
}