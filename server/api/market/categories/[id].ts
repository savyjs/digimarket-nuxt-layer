export default defineEventHandler(async (event) => {
    const items = await fetch(`https://dummyjson.com/products/category/${event.context.params.id}`).then((res) => res.json());
    return items
})
