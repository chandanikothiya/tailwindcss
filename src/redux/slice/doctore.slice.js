import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";
import { BASE_URL } from "../../utility/url";


const initialState = {
    doctore: [],
    isLoading: false,
    error: null
}

export const getalldoctore = createAsyncThunk(
    'doctore/getalldoctore',
    async (data) => {
        try {
            const response = await axios.get(BASE_URL + 'doctore/getalldoctore');
            return response.data.data;

        } catch (error) {
            console.log(error)
        }
    }
)

export const getdoctore = createAsyncThunk(
    'doctore/getdoctore',
    async (id) => {
        try {
            const response = await axios.get(BASE_URL + `doctore/getdoctore/${id}`);
            return response.data.data;

        } catch (error) {
            console.log(error)
        }
    }
)

export const adddoctore = createAsyncThunk(
    'doctore/adddoctore',
    async (data) => {
        try {
            console.log("data", data)

            const formdata = new FormData();

            formdata.append("fname", data.fname)
            formdata.append("lname", data.lname)
            if (data.email) {
                formdata.append("email", data.email)
            }
            formdata.append("gender", data.gender)
            formdata.append("designation", data.designation)
            formdata.append("departments", data.dept)
            formdata.append("lno", data.lno)
            formdata.append("pno", data.pno)
            formdata.append("password", data.pass)
            formdata.append("bod", data.bod)
            formdata.append("address", data.address)
            formdata.append("education", data.eduction)
            formdata.append("profile_img", data.profile_img)

            if (data.languages) {
                formdata.append("languages", data.languages);
            }

            if (data.linkdin) {
                formdata.append("linkdin", data.linkdin);
            }

            const response = await axios.post(BASE_URL + 'doctore/adddoctore', formdata);
            return response.data.data;
        } catch (error) {
            console.log(error)
        }
    }
)

export const updatedoctore = createAsyncThunk(
    'doctore/updatedoctore',
    async (data) => {
        try {

            const formdata = new FormData();

            formdata.append("fname", data.fname)
            formdata.append("lname", data.lname)
            if (data.email) {
                formdata.append("email", data.email)
            }
            formdata.append("gender", data.gender)
            formdata.append("designation", data.designation)
            formdata.append("departments", data.dept)
            formdata.append("lno", data.lno)
            formdata.append("pno", data.pno)
            formdata.append("password", data.pass)
            formdata.append("bod", data.bod)
            formdata.append("address", data.address)
            formdata.append("education", data.eduction)
            formdata.append("profile_img", data.profile_img)

            if (data.languages) {
                formdata.append("languages", data.languages);
            }

            if (data.linkdin) {
                formdata.append("linkdin", data.linkdin);
            }

            const response = await axios.put(BASE_URL + `doctore/updatedoctore/${data?.id}`, formdata);
            return response.data.data;

        } catch (error) {
            console.log(error)
        }
    }
)

export const deletedoctore = createAsyncThunk(
    'doctore/deletedoctore',
    async (id) => {
        try {

            const response = await axios.put(BASE_URL + `doctore/deletedoctore/${id}`);
            return response.data.data;

        } catch (error) {
            console.log(error)
        }
    }
)


const doctoreslice = createSlice({
    name: 'doctore',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getalldoctore.fulfilled, (state, action) => {
            state.doctore = action.payload
        }),
            builder.addCase(getdoctore.fulfilled, (state, action) => {
                state.doctore = [];
                state.doctore.push(action.payload)
            }),
            builder.addCase(adddoctore.fulfilled, (state, action) => {
                state.doctore.push(action.payload)
            }),
            builder.addCase(updatedoctore.fulfilled, (state, action) => {
                // const index = state?.doctore?.findIndex(v => v._id === action.payload._id)
                // if (index !== -1) {
                //     state.doctores[index] = action.payload
                // }

                state.doctore = action.payload
            })
    }
})


export default doctoreslice.reducer;


