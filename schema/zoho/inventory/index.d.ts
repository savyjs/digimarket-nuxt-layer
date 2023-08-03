
export declare namespace ZohoInventory {

    interface Item {
        id?: ID // ID of product
        title: string // Main product title
        sub_title?: string // Subtitle for product
        name?: string // Factory name of product - short
        full_name?: string // Factory name for product - full name / full model name
        slug?: string // Slug or url for product - could be used as sku alias
        product_type?: "good" | "service" | "file" | "text" | string // what kind of product it is
        short_description?: string // Concise description of the product.
        description?: string // Detailed description of the product.
        brand?: Brand // Brand of the product
        combo_items: Product[] // Mapped items for combo products
        prices: Price[]  // Prices list
        is_combo: boolean  // Prices list
        fixedAttributes: FixedAttribute[] // Common fiexed attributes for all products, weight, size, ...
        specifications: SpecificationGroup[]  // Different Specifications for product
        attributes: Attribute[] // Available attribute for specific product
        images: Image[] // Available images for product
        videos: Video[] // Available videos for product
        attached_labels: AttachedLabel[] // Available label to show on product, Sold, Off, Amazing, ...
        available_from_datetime?: DateObject // Price would be available from this time
        available_to_datetime?: DateObject // Price would be available until this time
    }

    type ID = string | number | bigint
}