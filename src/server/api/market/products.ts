export default defineEventHandler(async (event) => {
    const items = await fetch(`https://dummyjson.com/products`).then((res) => res.json());
    return items
})
