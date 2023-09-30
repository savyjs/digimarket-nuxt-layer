export const useLogin = (credentials: Digimarket.Credential) => {
    console.info('You can override useLogout() composable')

    // Start the loader
    useLoader().start('auth')

    // Sending the request
    return useStrapiAuth().logout().then(() => {
        // Showing the success message
        let message = {
            target: 'toast',
            type: 'success',
            title: "Logout Successful",
            message: "You've logged out successfully."
        }
        useMessages().pushMessage(message)

        // Redirect user
        useAuthNavigate("login")

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