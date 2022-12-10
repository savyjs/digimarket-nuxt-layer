import _ from 'lodash'
import {ModuleOptions} from "../module";

export const useNtm = () => {
    const appConfig = useAppConfig().ntm || []
    return {
        options: (): ModuleOptions => {
            return appConfig;
        }
    }
}