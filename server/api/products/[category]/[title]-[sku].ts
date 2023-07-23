import {defineEventHandler} from "h3";
import {Ntm} from "~/schema/default";
import {Zoho} from "~/schema/zoho";

export default defineEventHandler((event) => {
    let sku = event.context.params.sku
    let product: Zoho.Product = {}
    product.name = "Product number 1"
    product.variants = [
        {
            sku
        }
    ]
    let request = new Request(`https://commerce.zoho.com/storefront/api/v1/products/${sku}?format=json`,
        {
            headers: {
                'domian-name': "sitebuilder-818934439.zohositescontent.com"
            }
        })
    let productDetail = $fetch(request)
    return product
})