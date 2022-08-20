import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categories: [
        {
            category: 'Fiction'
        },
        {
            category: 'Adventure'
        },
        {
            category: 'Crime & Mystery'
        },
        {
            category: 'Health'
        },
        {
            category: 'Tech'
        },
        {
            category: 'Development'
        }
    ].map((cat, id) => ({...cat, id: id + 1 }))
}

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers:[]
})
export const getCats = state => state.categories.categories
export default categoriesSlice.reducer;