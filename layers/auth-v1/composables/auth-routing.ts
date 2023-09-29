export const useAuthRouting = (to: string, query ?: string) => {
    console.info('You can override useAuthRouting(to: string) composable')

    const path = useAppConfig?.authRouting ?? {
        login: '/auth/login',
        register: '/auth/login',
        verify: '/auth/verify',
        forgot: '/auth/forgot',
        profile: '/profile',
        admin: '/admin'
    }

    return navigateTo(path?.[to] || to)
}