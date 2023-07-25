import {defineEventHandler} from "h3";
import {Zoho} from "~/schema/zoho";

export default defineEventHandler(async (event) => {
    const id = event.context.params.id
    const module = event.context.params.module

    // generate Auth token for CRM
    let AuthUrl = 'https://accounts.zoho.com'


    let product: Zoho.Product = {}
    product.name = "Product number 1"
    product.variants = [
        {
            id
        }
    ]
    let url = `https://commerce.zoho.com/storefront/api/v1/products/${id}?format=json`
    let headers = new Headers()
    headers.set('domain-name', "savyjs.zohocommerce.com")

    let productDetail = await $fetch(url, {
        method: "GET",
        headers
    })
    return productDetail
})