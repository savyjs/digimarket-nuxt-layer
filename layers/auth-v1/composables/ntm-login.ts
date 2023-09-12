export const useNtmLogin = (credentials: {}, path: string, method: 'POST' | 'GET' | 'PUT') => {
    alert('hello')

    useApi(path).then(res => {
        useRouter().push('./verify')
    })

}