export declare interface DigimarketConfig extends Layout {
    commerce?: "zoho" | "storino"
    schema?: "ntm" | "zoho" | string
    zoho?: {
        commerce?: {
            domain?: string
        }
    }
    abstract?: "zoho" | "storino" | string,

    rtlDictionary?: {
        [index: string]: boolean
    },
    lang?: string,
    rtl?: boolean,
    title: string,
    logo: string,
    divisions?: divisions[]
    profileMenuItems?: { title?: string; to?: string; link?: string; icon?: string, svg?: string }[];
}

export declare interface divisions {
    key?: any,
    title?: string,
    items?: divisions[]
}
