export const useCheckAuth = () => {
    const user = useStrapiUser()
    return user?.confirmed
}