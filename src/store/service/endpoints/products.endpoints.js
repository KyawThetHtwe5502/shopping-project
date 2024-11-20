import { ApiService } from "../apiService";

const productsEndpoints = ApiService.injectEndpoints({
    endpoints: (builder) => ({
        getProduct : builder.query({
            query : () => "/products"
        }),
        getSingleProduct : builder.query({
            query : (id) => `/products/${id}`
        }),
        getCategory : builder.query({
            query : () => "/products/categories"
        }),
        getCategoryProducts : builder.query({
            query : (category) => `/products/category/${category}`
        })
    })
});

export const { useGetProductQuery, useGetSingleProductQuery, useGetCategoryQuery, useGetCategoryProductsQuery} = productsEndpoints;