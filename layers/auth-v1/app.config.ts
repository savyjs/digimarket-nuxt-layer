const auth_schema = process?.env?.AUTH_SCHEMA ?? 'ntm' //other options is vsd

export default defineAppConfig({
    authSchema: auth_schema
})