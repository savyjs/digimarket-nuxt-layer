export const useCheckAuth = async () => {

    const {fetchUser} = useStrapiAuth()
    const user = await fetchUser()

    return user?.confirmed
}