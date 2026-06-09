import { configureStore } from "@reduxjs/toolkit"
import departmentReducer from './slice/department.slice'
import doctoreReducer from './slice/doctore.slice'
import appointmentReducer from './slice/appointment.slice'

export const storeconfig = () => {
    const store = configureStore({
        reducer:{
            department:departmentReducer,
            doctore:doctoreReducer,
            appointment:appointmentReducer
        }
    })
    return store
}