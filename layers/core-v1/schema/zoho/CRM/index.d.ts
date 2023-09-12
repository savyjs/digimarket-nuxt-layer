export declare namespace ZohoCRM {
    type ID = string | number | bigint

    interface CommonContact {
        salutation: string
        firstName: string
        lastName: string
    }

    interface Lead extends CommonContact {

    }

    interface Contact extends CommonContact {

    }

    interface SalesOrder {

    }


    interface Product {
        id: ID;
    }

    interface LineTax {
        percentage: number;
        name: string;
    }

    interface OrderedItem {
        Product_Name: Product;
        Quantity: number;
        Discount: number;
        Price_Book_Name: Product;
    }

    interface ProductDetail {
        product: Product;
        quantity: number;
        Discount: number;
        product_description: string;
        "Unit Price": number;
        line_tax: LineTax[];
    }

    interface DealData {
        Owner: {
            id: ID;
        };
        Deal_Name: {
            id: ID;
        };
        Account_Name: {
            id: ID;
        };
        Quote_Name: {
            id: ID;
        };
        Contact_Name: {
            id: ID;
        };
        Ordered_Items: OrderedItem[];
        Discount: number;
        Description: string;
        Customer_No: string;
        Shipping_State: string;
        Tax: number;
        Billing_Country: string;
        Carrier: string;
        Status: string;
        Sales_Commission: number;
        Due_Date: string;
        Billing_Street: string;
        Adjustment: number;
        Terms_and_Conditions: string;
        Billing_Code: string;
        Product_Details: ProductDetail[];
        Subject: string;
        Excise_Duty: number;
        Shipping_City: string;
        Shipping_Country: string;
        Shipping_Code: string;
        Billing_City: string;
        Purchase_Order: string;
        Billing_State: string;
        $line_tax: LineTax[];
        Pending: string;
        Shipping_Street: string;
    }

    interface DealResponse {
        data: DealData[];
    }
}