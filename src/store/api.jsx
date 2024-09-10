import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const token = localStorage.getItem("token")

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: "https://ecommerse.davidhtml.xyz/" }),
    tagTypes: ['Category', 'Brand'],
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
        editSubCategory : builder.mutation({
            query : ({id, obj}) => ({
                url : `/categories/subcategory/update/${id}`,
                method : "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: obj
            })
        }),
        deleteSubCategory : builder.mutation({
            query : (id) => ({
                url : `/categories/subcategory/delete/${id}`,
                method : "DELETE",
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
        getBrandById : builder.query({
            query : (id) => ({
                url : `/brands/get/${id}`
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
    })
})

export const {
    useLoginUserMutation,
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
    useDeleteSubCategoryMutation
} = api;
