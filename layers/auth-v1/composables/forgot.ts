export const useForgot = (credentials: Digimarket.Credential) => {
    console.info('You can override useForgot() composable')
    // Start the loader
    useLoader().start('auth')

    // Sending the request
    return useStrapiAuth().forgotPassword({
        email: credentials?.email
    }).then(() => {
        let message = {
            target: 'toast',
            type: 'success',
            title: "Email sent",
            message: "The email has been sent successfully."
        }
        useMessages().pushMessage(message)

    }).catch(err => {
        let errorMessage = {
            target: 'toast',
            type: 'error',
            title: err?.error?.name ?? "Email Sending Error",
            message: err?.error?.message ?? "There was an issue sending the email. Please try again later."
        }
        useMessages().pushMessage(errorMessage)

    }).finally(() => {
        useLoader().stop('auth')
    })


}