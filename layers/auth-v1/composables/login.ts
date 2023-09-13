export const useLogin = (credentials: Digimarket.Credential) => {

    alert('alert hello from core package')

    useStrapiAuth().login({
        identifier: credentials?.username,
        password: credentials?.password
    })


}