import _ from 'lodash'
import {ModuleOptions} from "../module";
import {useRuntimeConfig} from "nuxt/app";

export const useNtm = () => {
    const appConfig = useRuntimeConfig().ntm || []
    return {
        options: (): ModuleOptions => {
            return appConfig;
        }
    }
}

