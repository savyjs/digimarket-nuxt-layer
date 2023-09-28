export const useLogin = (credentials: Digimarket.Credential) => {
    console.info('You can override useLogin() composable')

    // Start the loader
    useLoader().start('auth')

    // Sending the request
    return useStrapiAuth().login({
        identifier: credentials?.identifier,
        password: credentials?.password
    }).then(({user, jwt}) => {
        // Showing the success message
        let message = {
            target: 'toast',
            type: user?.blocked ? 'error' : 'success',
            title: user?.blocked ? "Account Blocked" : "Login Successful",
            message: user?.confirmed ? "Welcome back! You've logged in successfully." : "Almost there! Please check your email to confirm your registration."
        }
        useMessages().pushMessage(message)

        // Redirect user
        if (user?.confirmed) {
            // If confirmed u
            useStrapiAuth().setToken(jwt)
            useStrapiAuth().setUser(user)
            useAuthRouting("profile")
        }
    }).catch(err => {
        // Showing the error
        let errorMessage = {
            target: 'toast',
            type: 'error',
            title: err?.error?.name ?? "Error",
            message: err?.error?.message ?? "Please check the form and try again"
        }
        useMessages().pushMessage(errorMessage)

    }).finally(() => {
        // Stopping the loader
        useLoader().stop('auth')
    })

}