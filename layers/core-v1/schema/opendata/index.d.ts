// Common Attributes
port
declare namespace OpenData {
    interface GDSNProduct {
        GTIN: string;
        brandName: string;
        productDescription: string;
        packagingDimensions: {
            length: number;
            width: number;
            height: number;
        };
        netWeight: number;
        grossWeight: number;
        countryOfOrigin: string;
        ingredientStatement: string[];
        storageInstructions: string;
        expirationDate: Date;
        safetyWarnings: string[];
        handlingInstructions: string;
    }

// Common Code Lists
    interface PackagingType {
        code: string;
        description: string;
    }

    interface UnitOfMeasure {
        code: string;
        description: string;
    }

    interface ProductCategory {
        code: string;
        description: string;
    }

    interface ProductClass {
        code: string;
        description: string;
    }

    interface Country {
        code: string;
        name: string;
    }

    interface Currency {
        code: string;
        name: string;
    }

    interface Language {
        code: string;
        name: string;
    }

// Common Attributes
    interface GDSNProduct {
        GTIN: string;
        brandName: string;
        productDescription: string;
        packagingDimensions: {
            length: number;
            width: number;
            height: number;
        };
        netWeight: number;
        grossWeight: number;
        countryOfOrigin: string;
        ingredientStatement: string[];
        storageInstructions: string;
        expirationDate: Date;
        safetyWarnings: string[];
        handlingInstructions: string;
    }

// Common Code Lists
    interface PackagingType {
        code: string;
        description: string;
    }

    interface UnitOfMeasure {
        code: string;
        description: string;
    }

    interface ProductCategory {
        code: string;
        description: string;
    }

    interface ProductClass {
        code: string;
        description: string;
    }

    interface Country {
        code: string;
        name: string;
    }

    interface Currency {
        code: string;
        name: string;
    }

    interface Language {
        code: string;
        name: string;
    }

// Common Attributes
    interface GDSNProduct {
        GTIN: string;
        brandName: string;
        productDescription: string;
        packagingDimensions: {
            length: number;
            width: number;
            height: number;
        };
        netWeight: number;
        grossWeight: number;
        countryOfOrigin: string;
        ingredientStatement: string[];
        storageInstructions: string;
        expirationDate: Date;
        safetyWarnings: string[];
        handlingInstructions: string;
    }

// Common Code Lists
    interface PackagingType {
        code: string;
        description: string;
    }

    interface UnitOfMeasure {
        code: string;
        description: string;
    }

    interface ProductCategory {
        code: string;
        description: string;
    }

    interface ProductClass {
        code: string;
        description: string;
    }

    interface Country {
        code: string;
        name: string;
    }

    interface Currency {
        code: string;
        name: string;
    }

    interface Language {
        code: string;
        name: string;
    }

    interface EDIFACTData {
        messageReference: string;
        messageType: string;
        messageVersion: string;
        sender: string;
        recipient: string;
        creationDate: Date;
        documentReference: string;
        documentDate: Date;
        messageFunction: string;
        messageText: string;
        additionalInfo: string;
        items: {
            itemCode: string;
            itemName: string;
            quantity: number;
            unitPrice: number;
            currency: string;
        }[];
    }


    interface EDIFACTData {
        messageReference: string;
        messageType: string;
        messageVersion: string;
        sender: string;
        recipient: string;
        creationDate: Date;
        documentReference: string;
        documentDate: Date;
        messageFunction: string;
        messageText: string;
        additionalInfo: string;
        items: {
            itemCode: string;
            itemName: string;
            quantity: number;
            unitPrice: number;
            currency: string;
        }[];
    }


}