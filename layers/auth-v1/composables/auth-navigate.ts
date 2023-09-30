export const useAuthNavigate = (to: string, query ?: string) => {
    console.info('You can override useAuthNavigate(to: string) composable')

    const path = useAuthRoutes(to,query)
    console.log(`navigating to ${path}`)
    return navigateTo(path)
}