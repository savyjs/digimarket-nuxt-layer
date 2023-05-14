
export default defineEventHandler(async (event) => {
    const product = await fetch(`https://dummyjson.com/products/${event.context.params.id}`).then((res) => res.json());
    return product
})
