export default defineEventHandler(async (event) => {
    const items = await fetch(`https://dummyjson.com/products/categories`).then((res) => res.json());
    return items
})
