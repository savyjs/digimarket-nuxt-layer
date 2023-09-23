export const useRegister = (credentials: Digimarket.Credential) => {
    console.info('You can override useRegister() composable')
    useStrapiAuth().register({
        email: credentials?.email,
        username: credentials?.username,
        password: credentials?.password
    }).then(r => {
        alert('then')
    })
}