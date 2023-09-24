import {defineRule, configure} from 'vee-validate';
import * as AllRules from '@vee-validate/rules';
import en from '@vee-validate/i18n/dist/locale/en.json';
import fa from '@vee-validate/i18n/dist/locale/fa.json';
import {setLocale, localize} from '@vee-validate/i18n';

export default defineNuxtPlugin((nuxtApp) => {
    Object.keys(AllRules).forEach(rule => {
        let ruleFn = AllRules?.[rule]
        if (typeof ruleFn == 'function') {
            defineRule(rule, ruleFn)
        }
    });
    setLocale('en');
    configure({
        generateMessage: localize({
            en,
            fa,
        }),
    });

})