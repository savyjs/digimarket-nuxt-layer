export const useRegister = (credentials: Digimarket.Credential) => {
    console.info('You can override useRegister() composable')

    useLoader().start('auth')
    useStrapiAuth().register({
        email: credentials?.email,
        username: credentials?.username,
        password: credentials?.password
    }).then(r => {
        let message = {
            target: 'auth',
            type: 'success',
            title: "Succeed!",
            message: r?.user?.username ?? "Please check your email to conform registration"
        }
        useMessages().pushMessage(r.user)
        alert('then')
    }).catch(err => {
        let errorMessage = {
            target: 'auth',
            type: 'error',
            title: err?.error?.name ?? "Error",
            message: err?.error?.message ?? "Please check the form and try again"
        }
        useMessages().pushMessage(errorMessage)
        console.error({err})
        alert(err?.error)
    }).finally(() => {
        useLoader().stop('auth')
    })
}