import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from './features/categories/categoriesSlice'
//What we need redux to wrap?
//Event Handler such as Like a book or Star a book, getAllBooks, getBooksByCategory

export const store = configureStore({
    reducer: {
        categories: categoriesReducer
    }
})