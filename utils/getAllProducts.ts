export const getAllProducts = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/products`, {
            cache: 'no-store'
        })
        if (!res.ok) {
            throw new Error(`Failed to fetch products`)
        }
        const data = await res.json()
        return data
    } catch (error: any) {
        console.log(error)
    }
}