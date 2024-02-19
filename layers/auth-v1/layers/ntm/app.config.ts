export default defineAppConfig({
    authRouting: {
        provider: 'strapi',
        logout: '/auth/logout',
        login: '/auth/login',
        register: '/auth/register',
        verify: '/auth/verify',
        forgot: '/auth/forgot',
        home: '/',
        profile: '/profile',
        admin: '/admin'
    }
})