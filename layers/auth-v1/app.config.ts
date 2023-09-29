const auth_schema = process?.env?.auth_schema ?? 'ntm' //other options is vsd

export default defineAppConfig({
    authSchema: auth_schema
})