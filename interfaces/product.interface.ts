export interface IFeature{
    key: string,
    value: string | number
}

export interface Iproduct {
    _id?: string,
    title: string,
    featuredImage: string,
    shortDescription: string,
    longDescription: string,
    category: string,
    oldPrice: number,
    price: number,
    features: IFeature[],
    isOnCart?: boolean,
    isOnWishlist?: boolean
}

export interface IProductCategory{
    _id?: string,
    name: string
}