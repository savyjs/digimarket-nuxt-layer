const auth_schema = process?.env?.auth_schema ?? 'ntm' //other options is vsd

export default defineAppConfig({
    authSchema: auth_schema,
    authRouting: {
        login: '/auth/login',
        register: '/auth/login',
        verify: '/auth/verify',
        forgot: '/auth/forgot',
        home: '/',
        profile: '/profile',
        admin: '/admin'
    }
})