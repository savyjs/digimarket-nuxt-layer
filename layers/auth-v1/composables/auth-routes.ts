export const useAuthRoutes = (to: string, query ?: string) => {
    console.info('You can override useAuthNavigate(to: string) composable')

    const path = useAppConfig?.authRouting ?? {
        login: '/auth/login',
        register: '/auth/login',
        verify: '/auth/verify',
        forgot: '/auth/forgot',
        profile: '/profile',
        admin: '/admin'
    }

    return path?.[to] || to
}