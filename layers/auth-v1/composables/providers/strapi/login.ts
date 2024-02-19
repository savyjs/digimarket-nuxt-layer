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
            type: user?.value?.blocked ? 'error' : 'success',
            title: user?.value?.blocked ? "Account Blocked" : "Login Successful",
            message: user?.value?.confirmed ? "Welcome back! You've logged in successfully." : "Almost there! Please check your email to confirm your registration."
        }
        useMessages().pushMessage(message)

        // Redirect user
        if (user?.value?.confirmed) {
            useAuthNavigate("dashboard")
        } else {
            console.warn(`User isn't confirmed yet`)
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