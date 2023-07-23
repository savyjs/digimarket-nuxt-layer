export declare namespace Ntm {
    interface Product {
        id?: number | string
        title?: string
        sub_title?: string
        brand?: Brand
        variants: Variant[]
        attributes: Attribute[]
    }

    interface Brand {
        id?: number | string
        title?: string
        to?: string
        link?: string
    }

    interface Variant {

    }

    interface Attribute {

    }
}