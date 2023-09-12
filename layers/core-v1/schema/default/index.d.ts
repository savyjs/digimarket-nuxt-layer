export declare namespace Ntm {
    interface Category {
        id?: ID;
        title: string;
        slug: string;
        description: string;
        tax_id: number;
        products: Product[];
        brands: Brand[];
        attributes: Attribute[];
        images: Image[];
        videos: Video[];
        documents: Document[];
        active: boolean;
        visibility: boolean;
        sort_by_options: SortByOption[];
        bread_crumbs: BreadCrumb[];
        specifications: Specification[];
        parent_id: string;
        items: Category[];
        number_columns: number;
        seo: SEO;
        order: number;
    }

    interface Collection extends Category {
        is_selected?: boolean // Denotes whether the sort by option is selected.
    }

    interface SEO {
        description: string;
        keyword: string;
        title: string;

    }


    interface Product {
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

    interface Cart {
        id?: ID;
        code: string;
        customer: Customer[]
        total_price: number;
        quantity: number;
        items: CartItem[];
    }


    interface CartItem {
        id?: ID
        quantity: number;
        product_id: ID;
        product: Product;
        price_id: ID;
        price: Price;
        label_price: number;
        total_price: number;
        discount_amount: number;
        custom_fields: CustomField[];
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
        active?: boolean // Is label active?
        filterable?: boolean // Filter product using this label?
        type?: string | "Amazing" | "Sold" | "OpenBox" // This is used for
        title?: string // Translatable title for this label
        description?: string // Description of this label
    }

    // some fixed attribute groups
    interface FixedAttribute {
        key?: "size" | "country" | "width" | "height" | "weight" | "store"
        items?: Shapes | Sizes | {}[] | []
        value?: Organization | Size | Shapes | string | number | {} | {}[] | []
    }

    type Sizes = "small" | "medium" | "large" | string;
    type Shapes = "round" | "square" | "triangle" | string;

    interface Attribute {
        id?: id,
        title?: id,
        help?: id,
        active?: boolead,
        filterable?: boolean // Can search product using this filter?
        type?: "checkbox" | "select" | "radio" | "color" | "shape" | "size" | string
        // Options
        items?: {
            id?: ID
            title?: string
            selected?: boolean,
            value?: number | string | {} | []
            meta?: Meta
        }[]
    }

    type Meta = {} | {}[] | string // could be json, object or array

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
        active?: boolean // Is price active?
        primary?: boolean // Is primary price
        quantity?: number // Available amounts in inventory
        guaranty?: Guaranty // Guarantee specification
        attribute?: Attribute[] // Selected attribute for price, for example 'yellow color' has different price than 'red color'
        sku?: ID // Stock keeping unit
        unit?: "item" | "box" | "hour" | "service" | "file" | string
        multiple_currency?: boolean // Show multiple currency?
        currencies: Currency[]
        items?: InventoryItem[] // Available inventory items
        countries: Country[]
        commission_rate?: number // the commission rate
        retail_price?: number // The Retailer price
        retail_old_price?: number // Will show a line on this price
        tax?: number // Tax
        taxable?: boolean
        min_allowed_order?: number
        max_allowed_order?: number
        bulk_step?: number | number[] // The step for bulk sales , default 1 , could be 10,20, etc.
    }


    interface Currency {
        id?: ID
        title: string;
        symbol: string;
        price_precision: number;
        format: string;
        is_base_currency: boolean;
        icon?: string
        image?: Image
        code: string;
        symbol_formatted: string;
        code_on_left: boolean;
        symbol_on_left: boolean;
    }

    interface CurrencyConvert {
        id?: ID
        src_currency?: "USD" | "IRT" | string // The basic price source currency
        src_price?: string | number
        dst_currency?: "USD" | "IRT" | string // The destination price currency
        dst_price?: string | number
        exchange_rate?: number // The convert price factor
    }

    interface Country {
        id?: ID // Country ID
        title?: string // Country name
        code?: string // Country locale code
        icon?: string
        image?: Image
        time_zone?: string // Time zone
        items: Division // List of country divisions, State[] | Province[] | City[]
    }

    // A vendor is a supplier or a company that provides goods or services to another business entity
    interface Vendor {

    }

    interface InventoryItem {

    }

    interface Division {
        id?: ID
        title?: string // The name of division
        code?: string // Specific code for division
        items?: Division[] // Sub divisions, cities, ...
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

    interface Address {
        id?: ID
        customer?: Customer
        street_address1: string;
        street_address2: string;
        city: string;
        state: string;
        country: string;
        zip: string;
    }

    interface Organization {
        id?: ID
        title?: string
        full_name?: string
        active?: boolean // Is active
        has_branch?: boolean // Has branches
        stage?: "Development" | "Test" | "Production"
        logo?: Image
        images?: Image[]
        description?: string
        country?: string
        is_default: boolean;
        time_zone: string;
        language_code: string;
        tax_group_enabled: boolean;
        user_status: string;
        industry_type: string;
        address: Address[];
        members: User[];
    }

    interface User {
        id?: ID

    }

    interface Address {
        street_address1: string;
        street_address2: string;
        city: string;
        state: string;
        country: string;
        zip: string;
    }

    interface CustomField {
        value: string;
        index: number;
        label: string;
    }

    interface ContactPerson {
        id?: ID; // ID of the contact person
        contact_person_id: string; // The ID of the contact person
        salutation: string; // Salutation for the contact. Maximum length allowed [25]
        first_name: string; // First Name of the contact. Maximum length allowed [100]
        last_name: string; // Last Name of the contact. Maximum length allowed [100]
        email: string; // Email ID of the contact person. Maximum length allowed [100]
        phone: string; // Phone number of the contact person. Maximum length [50]
        mobile: string; // Mobile/Cell number of the contact person. Maximum length [50]
        is_primary_contact: boolean; // To mark contact person as primary for communication.
        skype: string; // Skype address of the contact person. Maximum length [50]
        designation: string; // Designation of the contact person in the organization. Maximum length [50]
        department: string; // Department to which the contact person belongs. Maximum length [50]
        is_added_in_portal: boolean; // Tells whether the contact person has portal access or not
    }


    interface DefaultTemplates {
        invoice_template_id: number;
        invoice_template_name: string;
        estimate_template_id: number;
        estimate_template_name: string;
        creditnote_template_id: number;
        creditnote_template_name: string;
        invoice_email_template_id: number;
        invoice_email_template_name: string;
        estimate_email_template_id: number;
        estimate_email_template_name: string;
        creditnote_email_template_id: number;
        creditnote_email_template_name: string;
    }

    interface Contact {
        id?: ID;
        title?: string;
        active?: boolean
        company_name: string;
        has_transaction: boolean;
        contact_type: string;
        website: string;
        primary_contact_id?: ID;
        payment_terms: number;
        payment_terms_label: string;
        currency_id?: ID;
        currency_code: string;
        currency_symbol: string;
        language_code: string;
        outstanding_receivable_amount: number;
        outstanding_receivable_amount_bcy: number;
        unused_credits_receivable_amount: number;
        unused_credits_receivable_amount_bcy: number;
        status: string;
        payment_reminder_enabled: boolean;
        custom_fields: CustomField[];
        billing_address: Address;
        shipping_address: Address[];
        facebook: string;
        twitter: string;
        contact_persons: ContactPerson[];
        default_templates: DefaultTemplates;
        notes: string;
        created_time: string;
        last_modified_time: string;
        is_taxable: boolean;
        tax_id?: boolean;
        tax_name?: string;
        tax_percentage?: number;
        tax_authority_id?: string;
        tax_exemption_id?: string;
        tax_authority_name?: string;
        tax_exemption_code?: string;
        place_of_contact?: string;
        gst_no?: string;
        vat_treatment?: string;
        tax_treatment?: string;
        tax_regime?: string;
        is_tds_registered?: boolean;
        gst_treatment?: string;
    }

    interface Customer {

    }

    interface Order {
        id: ID; // Sales order ID
        tracking_code: ID; // Sales order number
        order_date: DateObject; // Date of the sales order
        status: "pending" | "processing" | "shipped" | "delivered" | "cancelled" | "refunded" | "partially_shipped" | "partially_delivered" | string; // Status of the sales order (fulfilled, pending, etc.)
        shipment_date: DateObject; // Shipment date for the sales order
        customer_id: ID; // ID of the customer associated with the sales order
        customer: Customer; // Name of the customer
        contact_persons: ContactPerson[]; // Contact persons associated with the customer
        currency_id: ID; // Currency ID for the sales order
        currency?: Currency
        discount_amount: number; // Discount amount applied to the sales order
        discount: number | string; // Discount percentage (e.g., "20.00%")
        is_discount_before_tax: boolean; // Indicates if the discount is applied before tax
        discount_type: string; // Type of discount (e.g., entity_level, item_level)
        estimate_id: number; // ID of the associated estimate
        delivery_method: string; // Delivery method for the sales order (e.g., FedEx, UPS)
        delivery_method_id: number; // ID of the delivery method
        line_items: LineItem[]; // Array of line items for the sales order
        shipping_charge: number; // Shipping charge for the sales order
        adjustment: number; // Adjustment amount for the sales order
        adjustment_description: string; // Description of the adjustment
        sub_total: number; // Subtotal amount for the sales order
        tax_total: number; // Total tax amount for the sales order
        total: number; // Total amount for the sales order
        taxes: { tax_name: string; tax_amount: number }[]; // Array of taxes applied to the sales order
        price_precision: number; // Precision for displaying prices (number of decimal places)
        pricebook_id: number; // Pricebook ID for the sales order
        shipping_address: Address[]; // Shipping address for the sales order
        billing_address: Address[]; // Billing address for the sales order
        notes: string; // Notes for the sales order
        terms: string; // Terms and conditions for the sales order
        template_id: number; // ID of the template used for the sales order
        template_name: string; // Name of the template used for the sales order
        template_type: string; // Type of the template (e.g., standard, custom)
        created_time: string; // Date and time when the sales order was created
        last_modified_time: string; // Date and time when the sales order was last modified
        salesperson_id: number; // ID of the salesperson associated with the sales order
        salesperson_name: string; // Name of the salesperson
        documents: Document[]; // Array of documents associated with the sales order
    }

// Interface for a line item in the sales order
    interface LineItem {
        id?: ID; // Item ID
        line_item_id: ID; // Line item ID
        title: string; // Name of the item
        description: string; // Description of the item
        item_order: number; // Order of the item in the sales order
        bcy_rate: number; // Rate of the item in base currency
        rate: number; // Rate of the item
        quantity: number; // Quantity of the item
        quantity_invoiced: number; // Quantity invoiced for the item
        quantity_packed: number; // Quantity packed for the item
        quantity_shipped: number; // Quantity shipped for the item
        unit: string; // Unit of measurement (e.g., qty, hours)
        tax_id: number; // Tax ID for the item
        tds_tax_id: string; // TDS tax ID for the item
        tax_name: string; // Name of the tax applied to the item
        tax_type: string; // Type of tax (e.g., tax, tds)
        tax_percentage: number; // Percentage of tax applied to the item
        item_total: number; // Total amount for the item
        is_invoiced: boolean; // Indicates if the item is invoiced
        image_id: number; // Image ID of the item
        image_name: string; // Name of the image associated with the item
        image_type: string; // Type of the image (e.g., jpg, png)
        warehouse_id: number; // Warehouse ID for the item
        hsn_or_sac: number; // HSN or SAC code for the item
        sat_item_key_code: number; // SAT item key code for the item
        unitkey_code: string; // Unit key code for the item
    }

    interface Package {
        id?: ID;
        package_number: string;
        order_id: number;
        order: Order;
        tracking_code: ID;
        date: DateObject;
        customer_id: number;
        customer_name: string;
        email: string;
        phone: string;
        mobile: string;
        is_emailed: boolean;
        notes: string;
        total_quantity: number;
        created_time: DateObject;
        last_modified_time: string;
        template_id: number;
        template_name: string;
        template_type: string;
        billing_address: Address;

        shipping_address: Address;

        contact_persons: ContactPerson[];

        line_items: LineItem[];
    }

    interface Shipment {
        id?: ID
        order_id: number;
        order: Order
        tracking_code: string;
        date: DateObject;
        status: string;
        detailed_status: string;
        status_message: string;
        carrier: string;
        service: string;
        delivery_days: number;
        delivery_guarantee: boolean;
        reference_number: string;
        customer_id: number;
        customer: Customer
        currency_id: number;
        currency: Currency
        discount_amount: number;
        discount: string;
        is_discount_before_tax: boolean;
        discount_type: string;
        estimate_id: number;
        delivery_method: string;
        delivery_method_id: number;
        line_items: LineItem[];
        shipping_charge: number;
        sub_total: number;
        tax_total: number;
        total: number;
        taxes: Tax[];
        price_precision: number;
        is_emailed: boolean;
        billing_address: Address[];
        shipping_address: Address[];
        template_id: number;
        template_name: string;
        template_type: string;
        notes: string;
        created_time: DateObject;
        last_modified_time: DateObject;
    }


    interface PaymentGateway {
        configured: boolean;
        additional_field: string;
        custom_fields: CustomField;
        gateway_name: string;
    }

    interface PaymentOptions {
        payment_gateways: PaymentGateway[];
    }

    interface Invoice {
        id?: ID
        customer_id: number;
        customer: Customer
        contact_persons: ContactPerson[];
        invoice_number: string;
        reference_number: string;
        template_id: number;
        date: DateObject;
        payment_terms: number; // Payment terms in days e.g. 15, 30, 60. Invoice due date will be calculated based on this. Maximum length [100]
        payment_terms_label: string;
        due_date: DateObject;
        discount: number;
        is_discount_before_tax: boolean;
        discount_type: string;
        is_inclusive_tax: boolean;
        exchange_rate: number;
        recurring_invoice_id: string;
        invoiced_estimate_id: string;
        salesperson_name: string;
        custom_fields: CustomField[];
        project_id: string;
        line_items: LineItem[];
        payment_options: PaymentOptions;
        allow_partial_payments: boolean;
        custom_body: string;
        custom_subject: string;
        notes: string;
        terms: string;
        shipping_charge: number;
        adjustment: number;
        adjustment_description: string;
        reason: string;
        tax_authority_id: number;
        tax_exemption_id: number;
        avatax_use_code: string;
        avatax_exempt_no: string;
        vat_treatment: string;
        tax_treatment: string;
        billing_address_id: number;
        billing_address: Address[];
        shipping_address_id: number;
        shipping_address: Address[];
        is_retainer_invoice: boolean; // Is retainer invoice?
    }

    interface Coupon {
        id?: ID
        customer_id?: ID[]
        price_id?: ID[]
        limit?: number
        from_date?: DateObject
        to_date?: DateObject
        product_id?: ID[]
        category_id?: ID[]
        enabled: boolean;
        coupon_code: string;
        discount: string;
        max_discount?: number
        min_price?: number
        discount_type: "flat" | "percentage";
    }

    interface Payment {
        id?: string;                 // Unique ID of the payment generated by the server. Maximum length allowed [2000]
        payment_mode: string;               // Mode through which payment is made. This can be check, cash, creditcard, banktransfer, bankremittance, autotransaction or others. Maximum length [100]
        amount: number;                     // Amount paid in the respective payment.
        amount_refunded: number;            // Amount that is refunded. Refunds are applicable only for payments whose payment_mode is autotransaction. Refunds would be made to the respective card provided by the customer.
        bank_charges: number;               // Denotes any additional bank charges.
        payment_date: DateObject;            // Date on which payment is made. Date Format [yyyy-mm-dd]
        status: string;                     // Status of the payment. It can either be success or failure.
        reference_number: string;           // Reference number generated for the payment. A string of your choice can also be used as the reference number. Maximum length of the reference number [100]
        description: string;                // Description about the payment.
        customer_id: string;                // Customer ID of the customer involved in the payment.
        customer: Customer;                // The customer involved in the payment.
        email: string;                      // Email address of the customer involved in the payment.
        tax_amount_withheld: number;        // Amount withheld for tax.
        invoices: Invoice[];                // Invoice related to a payment (array of Invoice objects)
        currency_id: string;                // ID of the currency used in the payment
        currency: Currency;
        account_id: string;                 // ID of the cash/bank account the payment has to be deposited.
        account_name: string;               // Name of the cash/bank account the payment has to be deposited.
        tax_account_id: string;             // ID of the tax account, in case of withholding tax.
        tax_account_name: string;           // Name of the tax account, in case of withholding tax.
        unused_amount: number;              // Amount which is not used for invoice payment yet.
        last_four_digits: number;           // Last four digits of the card.
        custom_fields: CustomField[];       // Additional field for a payment (array of CustomField objects)
    }

    interface Warehouse {
        id?: ID
        active?: boolean
        warehouse_name: string;
        address: string;
        city: string;
        state: string;
        country: string;
        zip: number;
        phone: string;
        email: string;
    }


    type ID = string | number | bigint
}