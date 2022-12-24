import _ from 'lodash'
import {ModuleOptions} from "../module";

export const useNtm = () => {
    const appConfig = useRuntimeConfig().ntm || []
    return {
        options: (): ModuleOptions => {
            return appConfig;
        }
    }
}

