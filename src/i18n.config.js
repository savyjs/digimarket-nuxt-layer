"use strict";
exports.__esModule = true;
var composables_1 = require("@nuxtjs/i18n/dist/runtime/composables");
exports["default"] = (0, composables_1.defineI18nConfig)(function () { return ({
    locales: ['en', 'fr', 'es'],
    defaultLocale: 'en',
    vueI18n: {
        fallbackLocale: 'en',
        messages: {
            en: {
                welcome: 'Welcome'
            },
            fr: {
                welcome: 'Bienvenue'
            },
            es: {
                welcome: 'Bienvenido'
            }
        }
    }
}); });
