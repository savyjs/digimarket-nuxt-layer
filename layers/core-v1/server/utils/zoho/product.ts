import {Zoho} from "~/schema/zoho";
import {Ntm} from "~/schema/default";

export class ProductConvert {
    inbound(ntmProduct: Ntm.Product): Zoho.Product {
        let zohoProduct = <Zoho.Product>{}
        zohoProduct.product_id = ntmProduct.
        return zohoProduct
    }
}