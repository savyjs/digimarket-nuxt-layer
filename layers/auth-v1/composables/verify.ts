export const useVerify = (credentials: Digimarket.Credential) => {
    console.info('You can override useVerify() composable')

    useLoader().start('auth')
    const resend = useStrapiAuth().sendEmailConfirmation({
        email: credentials?.email
    }).then(() => {
        let errorMessage = {
            target: 'toast',
            type: 'error',
            title: "Email sent",
            message: "The email has been sent successfully."
        }
        useMessages().pushMessage(message)

    }).catch(err => {
        let errorMessage = {
            target: 'toast',
            type: 'error',
            title: "Email Sending Error",
            message: "There was an issue sending the email. Please try again later."
        }
        useMessages().pushMessage(errorMessage)

    }).finally(() => {
        useLoader().stop('auth')
    })

    return {resend}
}