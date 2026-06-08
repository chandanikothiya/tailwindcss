import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../utility/url";


const initialState = {
    isLoading:false,
    department:[],
    error:null
}

export const adddepartment = createAsyncThunk(
    'department/adddepartment',
    async (data) => {
        try {
            
            const response = await axios.post(BASE_URL + 'department/adddepart',data);
            console.log(response.data.data);
            return response.data.data;

        } catch (error) {
            console.log(error)
        }
    }
)


const departmentslice = createSlice({
    name:"department",
    initialState,
    extraReducers:(builder) => {
        builder.addCase(adddepartment.fulfilled,(state,action) => {
            state.department.push(action.payload)
        })
    }
})

export default departmentslice.reducer;