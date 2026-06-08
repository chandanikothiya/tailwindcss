import { configureStore } from "@reduxjs/toolkit"
import departmentReducer from './slice/department.slice'

export const storeconfig = () => {
    const store = configureStore({
        reducer:{
            department:departmentReducer
        }
    })
    return store
}