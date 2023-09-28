export const useLogin = (credentials: Digimarket.Credential) => {

    useStrapiAuth().login({
        identifier: credentials?.username,
        password: credentials?.password
    })

}