import {defineRule, configure} from 'vee-validate';
import * as AllRules from '@vee-validate/rules';
import en from '@vee-validate/i18n/dist/locale/en.json';
import fa from '@vee-validate/i18n/dist/locale/fa.json';

export default defineNuxtPlugin((nuxtApp) => {
    Object.keys(AllRules).forEach(rule => {
        let ruleFn = AllRules?.[rule]
        if (typeof ruleFn == 'function') {
            defineRule(rule, ruleFn)
        }
    });

    configure({
        generateMessage: localize({
            en,
            fa,
        }),
    });

})