import _ from 'lodash'
import {ModuleOptions} from "../module";

export const useNtm = () => {
    return {
        options: (): ModuleOptions => {
            return useRuntimeConfig()?.public?.ntm;
        }
    }
}