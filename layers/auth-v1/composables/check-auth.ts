export const useCheckAuth = async () => {

    const {fetchUser} = useStrapiAuth()
    const user = await fetchUser()

    if (user?.value?.confirmed) console.info(`User is logged in`)
    else console.info(`User isn't  logged in`)
    console.log({user})
    return user?.confirmed
}