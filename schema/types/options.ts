import {Layout} from "./layout";

export interface DigimarketConfig extends Layout {
    lang: string,
    rtl: boolean,
    title: string,
    logo: string,
    divisions?: divisions[];
    profileMenuItems?: { title: string; to: string; icon?: string }[];
}

export interface divisions {
    key?: any,
    title?: string,
    childs?: divisions[]
}
