import {Layout} from "./layout";

export interface digimarketConfig extends Layout {
    divisions?: divisions[];
    profileMenuItems?: { title: string; to: string; icon?: string }[];
}

export interface divisions {
    key?: any,
    title?: string,
    childs?: divisions[]
}
