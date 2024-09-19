import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const token = localStorage.getItem("token")

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: "https://ecommerse.davidhtml.xyz/" }),
    tagTypes: ['Category', 'Brand', 'Product', 'Cart'],
    endpoints: (builder) => ({
        loginUser: builder.mutation({
            query: (obj) => ({
                url: `/login`,
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: obj
            })
        }),
        registerUser: builder.mutation({
            query: (obj) => ({
                url: `/register`,
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: obj
            })
        }),
        updateUser: builder.mutation({
            query: (obj) => ({
                url: `/user/update`,
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: obj
            })
        }),
        addCategory: builder.mutation({
            query: ({ name, slug }) => ({
                url: `/categories/create`,
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: { name, slug }
            }),
            invalidatesTags: ['Category'],
        }),
        allCategory: builder.query({
            query: () => ({
                url: `/categories/all`
            }),
            providesTags: ['Category'],
        }),
        deleteCategory: builder.mutation({
            query: (id) => ({
                url: `/categories/delete/${id}`,
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            }),
            invalidatesTags: ['Category'],
        }),
        addSubCategory: builder.mutation({
            query: (data) => ({
                url: `/categories/subcategory/create`,
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: data
            })
        }),
        editSubCategory: builder.mutation({
            query: ({ id, obj }) => ({
                url: `/categories/subcategory/update/${id}`,
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: obj
            })
        }),
        deleteSubCategory: builder.mutation({
            query: (id) => ({
                url: `/categories/subcategory/delete/${id}`,
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            })
        }),
        getCategoryById: builder.query({
            query: (id) => ({
                url: `/categories/get/${id}`
            })
        }),
        editCategory: builder.mutation({
            query: ({ id, obj }) => ({
                url: `/categories/update/${id}`,
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: obj
            }),
            invalidatesTags: ['Category'],
        }),
        addBrand: builder.mutation({
            query: (obj) => ({
                url: `/brands/create`,
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: obj
            }),
            invalidatesTags: ['Brand']
        }),
        allBrand: builder.query({
            query: () => ({
                url: `/brands/all`
            }),
            providesTags: ['Brand']
        }),
        deleteBrand: builder.mutation({
            query: (id) => ({
                url: `/brands/delete/${id}`,
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            }),
            invalidatesTags: ['Brand']
        }),
        getBrandById: builder.query({
            query: (id) => ({
                url: `/brands/get/${id}`
            })
        }),
        editBrand: builder.mutation({
            query: ({ id, obj }) => ({
                url: `/brands/update/${id}`,
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: obj
            }),
            invalidatesTags: ['Brand'],
        }),
        uploadFile: builder.mutation({
            query: (obj) => ({
                url: `/img/upload`,
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${token}`
                },
                body: obj
            })
        }),
        addProduct: builder.mutation({
            query: (obj) => ({
                url: `/products/create`,
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: obj
            }),
            invalidatesTags: ['Product']
        }),
        allProduct: builder.query({
            query: () => ({
                url: `/products/all`
            }),
            providesTags: ['Product']
        }),
        deleteProduct: builder.mutation({
            query: (id) => ({
                url: `/products/delete/${id}`,
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
            }),
            invalidatesTags: ['Product']
        }),
        getProductById: builder.query({
            query: (id) => ({
                url: `/products/get/${id}`
            })
        }),
        editProduct: builder.mutation({
            query: ({ id, obj }) => ({
                url: `/products/update/${id}`,
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: obj
            }),
            invalidatesTags: ['Product']
        }),
        searchProduct: builder.query({
            query: (params) => {
                const {
                    page,
                    limit,
                    sortBy,
                    sortOrder,
                    categoryId,
                    subcategoryId,
                    brandId,
                    color = [],
                    size = [],
                    minPrice,
                    maxPrice,
                    discount
                } = params;
                
                const queryParams = new URLSearchParams({
                    page: String(page),
                    limit: String(limit),
                    sortBy,
                    sortOrder,
                });

                // Koşullu parametreler ekliyoruz
                if (categoryId) queryParams.append('categoryId', categoryId);
                if (subcategoryId) queryParams.append('subcategoryId', subcategoryId);
                if (brandId) queryParams.append('brandId', brandId);
                if (minPrice) queryParams.append('minPrice', String(minPrice));
                if (maxPrice) queryParams.append('maxPrice', String(maxPrice));
                if (discount) queryParams.append('discount', String(discount));

                // Dizi olan color ve size parametreleri
                if (color.length > 0) queryParams.append('color', color.join(','));
                if (size.length > 0) queryParams.append('size', size.join(','));

                // Query parametrelerini URL'e ekliyoruz
                const url = `products/all?${queryParams.toString()}`;

                return url; // URL'yi döndür

                // const colorStr = color.length > 0 ? color.join(',') : '';
                // const sizeStr = size.length > 0 ? size.join(',') : '';

                // let url = `products/all?page=${page}&limit=${limit}&sortBy=${sortBy}&sortOrder=${sortOrder}`;

                // if (categoryId) url += `&categoryId=${categoryId}`;
                // if (subcategoryId) url += `&subcategoryId=${subcategoryId}`;
                // if (brandId) url += `&brandId=${brandId}`;
                // if (minPrice) url += `&minPrice=${minPrice}`;
                // if (maxPrice) url += `&maxPrice=${maxPrice}`;
                // if (discount) url += `&discount=${discount}`;

                // if (colorStr) url += `&color=${colorStr}`;
                // if (sizeStr) url += `&size=${sizeStr}`;

                // return url; 
            },
        }),
        allCart: builder.query({
            query: () => ({
                url: `/cart/all`,
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }),
            providesTags: ["Cart"]
        }),
        addCart: builder.mutation({
            query: (obj) => ({
                url: `/cart/add`,
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: obj
            }),
            invalidatesTags: ["Cart"]
        }),
        deleteCart: builder.mutation({
            query: (id) => ({
                url: `/cart/delete/${id}`,
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            }),
            invalidatesTags: ["Cart"]
        }),
        updateCart: builder.mutation({
            query: ({ productId, count }) => ({
                url: `/cart/change`,
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: { productId, count }
            }),
            invalidatesTags: ["Cart"]
        })
    })
})

export const {
    useLoginUserMutation,
    useRegisterUserMutation,
    useUpdateUserMutation,
    useAddCategoryMutation,
    useAllCategoryQuery,
    useDeleteCategoryMutation,
    useAddSubCategoryMutation,
    useGetCategoryByIdQuery,
    useEditCategoryMutation,
    useAddBrandMutation,
    useAllBrandQuery,
    useDeleteBrandMutation,
    useGetBrandByIdQuery,
    useEditBrandMutation,
    useEditSubCategoryMutation,
    useDeleteSubCategoryMutation,
    useUploadFileMutation,
    useAddProductMutation,
    useAllProductQuery,
    useDeleteProductMutation,
    useGetProductByIdQuery,
    useEditProductMutation,
    useSearchProductQuery,
    useAllCartQuery,
    useAddCartMutation,
    useDeleteCartMutation,
    useUpdateCartMutation
} = api;
