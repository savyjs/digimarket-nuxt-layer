export declare namespace Ntm {
    interface Product {
        id?: ID // ID of product
        title: string // Main product title - could be a translatable key
        sub_title?: string // Subtitle product title - translatable
        name?: string // Factory name of product - short
        full_name?: string // Factory name for product - full name / model
        slug?: string // Slug for product - used for url and alias sku
        short_description?: string // Concise description of the product.
        description?: string // Detailed description of the product.
        brand?: Brand // Brand for product
        prices: Price[]  // Different Attribute groups for product
        variants: Variant[]  // Different Attribute groups for product
        specification: SpecificationGroup[]  // Different Specifications for product
        attributes: Attribute[] // Available attribute for specific product
        images: Image[] // Available images for product
        videos: Video[] // Available videos for product
        attached_labels: AttachedLabel[] // Available label to show on product, Sold, Off, Amazing, ...
        available_from_datetime?: DateObject // Price would be available from this time
        available_to_datetime?: DateObject // Price would be available until this time
    }

    interface Brand {
        id?: ID
        active?: ID
        title?: string // Translatable title
        full_name?: string // legal name of guarantee company
        to?: string
        link?: string
    }

    interface AttachedLabel {
        id?: ID
        active?: ID
        type?: string | "Amazing" | "Sold" | "OpenBox"
        title?: string // Translatable title for this label
        description?: string // Description of this label
    }


    interface Attribute {
        id?: id,
        title?: id,
        help?: id,
        active?: boolead,
        type?: "checkbox" | "select" | "radio" | "color" | "shape" | "size"
        // Options
        items?: {
            title?: string
            selected?: boolean,
            value?: number | string | {} | []
        }[]
    }

    // Specification
    interface SpecificationGroup {
        id?: ID
        title?: string // Title of specification group
        help?: string | {} // A Description about what is this specification
        items?: {
            title?: string | {} // Fileds
            help?: string | {}
            value: string | {} | []
        }[]
    }

    // The product price
    interface Price {
        id?: ID // Id
        title?: string // The label for this price
        co_id?: ID, // Company ID
        active?: boolean // Is price active?
        primary?: boolean // Is primary price
        quantity?: number // Available amounts in inventory
        guaranty?: Guaranty // Guarantee specification
        attribute?: Attribute[] // Selected attribute for price, for example 'yellow color' has different price than 'red color'
        sku?: ID // Stock keeping unit
        multiple_currency?: boolean // Show multiple currency?
        src_currency?: "USD" | "IRT" | string // The basic price source currency
        dst_currency?: "USD" | "IRT" | string // The destination price currency
        src_to_dst_factor?: number // The convert price factor
        commission_rate?: number // the commission rate
        retail_price?: number // The Retailer price
        retail_old_price?: number // Will show a line on this price
        tax?: number // Tax
        taxable?: boolean
        min_allowed_order?: number
        max_allowed_order?: number
        bulk_step?: number | number[] // The step for bulk sales , default 1 , could be 10,20, etc.
    }

    interface DateObject {
        datetime?: string
        jalaliDatetime?: string
        time?: string
        timestamp?: number
    }

    interface Guaranty {
        id?: ID
        logo?: Image // Label
        title?: string // Label
        sub_title?: string // Subtitle
        name?: string // Company legal name
        full_name?: string // Company legal full name
        description?: string // Full description of this guarantee
        price: ? string // Additional price
    }

    interface Image {
        id?: ID
        primary?: boolean // Is primary image
        order?: number // Showing priority , 1,2,3,4 ...
        url: string
        xs_size?: string
        sm_size?: string
        md_size?: string
        lg_size?: string
        xl_size?: string
        alt?: string // Alt text
        description?: string // Description text
    }

    interface Video {
        id?: ID
        primary?: boolean // Is primary video
        autoplay?: boolean
        qualities: string | {
            title?: string // Quality title
            format?: string
            url: ? string
            size: ? string // Video size, 10.3 mb
        }[]
        thumbnail?: Image
        cover?: Image
        link?: string
        to?: string
        duration?: string | number // Duration in seconds or as a text
        xs_size?: string
        sm_size?: string
        md_size?: string
        lg_size?: string
        xl_size?: string
        alt?: string // Alt text
        description?: string // Description text
    }

    type ID = string | number | bigint
}