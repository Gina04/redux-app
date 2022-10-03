import { configureStore } from "@reduxjs/toolkit";
//reducer 
import users from './slices/index'
export default configureStore({
    reducer:{
        users

    }
});


