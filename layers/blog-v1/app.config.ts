import dotenv from 'dotenv'
dotenv.config();

export default defineAppConfig({
    blog: {
        version: "1.0.0-development-alpha.1",
        description: "meta description",
        keywords: "meta keywords",
        title: "vuetify strapi dashboard",
        mode: "dev.to",
        devto: {
            api: process.env?.DEV_TO_URL_API,
            username: process.env?.DEV_TO_USERNAME
        }
    }
})