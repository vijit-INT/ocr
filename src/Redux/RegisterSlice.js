
import { createSlice } from '@reduxjs/toolkit';

const RegisterSlice = createSlice({
    name: 'register',
    initialState:{
        registerData: [],
        auth: false
    },
    reducers:{
        updateRegister(values, action){
            const newItem = action.payload;
            values.registerData.push({
                id:newItem.id,
                Name: newItem.name,
                Address: newItem.address,
                Phone: newItem.phone,
                Email: newItem.email,
                Password: newItem.password
            })
           
        },
        createRegister(values, action){
           
            values.registerData=action.payload
            // console.log("redux action",action)
        },
        updateAuth(values, action){
            values.auth= action.payload
        }


    }
})

export const RegisterAction = RegisterSlice.actions;

export default RegisterSlice;