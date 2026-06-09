import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../utility/url";


const initialState = {
    isLoading: false,
    appointment: [],
    error: null
}

export const getdepartment = createAsyncThunk(
    'department/getdepartment',
    async (data) => {
        try {

            const response = await axios.get(BASE_URL + 'department/getappoinment');
            console.log(response.data.data);
            return response.data.data;

        } catch (error) {
            console.log(error)
        }
    }
)

export const addappointment = createAsyncThunk(
    'appointment/addappointment',
    async (data) => {
        try {

            const response = await axios.post(BASE_URL + 'appointment/adddappointment', data);
            console.log(response.data.data);
            return response.data.data;

        } catch (error) {
            console.log(error)
        }
    }
)

export const updateappointment = createAsyncThunk(
    'appointment/updateappointment',
    async (data) => {
        try {
            const response = await axios.put(BASE_URL + `appointment/updateappoinment/${data.id}`, data);
            console.log(response.data.data);
            return response.data.data;

        } catch (error) {
            console.log(error)
        }
    }
)

export const deleteappointment = createAsyncThunk(
    'appointment/deleteappointment',
    async (data) => {
        try {
            const response = await axios.delete(BASE_URL + `appointment/deleteappoinment/${id}`);
            console.log(response.data.data);
            return response.data.data;

        } catch (error) {
            console.log(error)
        }
    }
)


const appointmentslice = createSlice({
    name: "appointment",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(addappointment.fulfilled, (state, action) => {
            state.appointment.push(action.payload)
        }),
            builder.addCase(updateappointment.fulfilled, (state, action) => {
                state.department = action.payload
            }),
            builder.addCase(deleteappointment.fulfilled, (state, action) => {
                state.department = action.payload
            }),
            builder.addCase(getdepartment.fulfilled, (state, action) => {
                state.department = action.payload
            })
    }
})

export default appointmentslice.reducer;