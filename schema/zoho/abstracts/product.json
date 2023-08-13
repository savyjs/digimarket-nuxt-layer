import {Zoho} from "~/schema/zoho";

abstract class NtmProductAPI {
    abstract find(arg: string | {} | null | undefined): Zoho.Product[];

    abstract findOne(id: number): Zoho.Product;

    abstract findBySku(sku: string): Zoho.Product;

    abstract variants(id: number): Zoho.Variant[];
}