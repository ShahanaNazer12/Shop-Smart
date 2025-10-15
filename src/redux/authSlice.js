import { createSlice} from "@reduxjs/toolkit"

const authSlice = createSlice(
    {
        initialState:{
            users:JSON.parse(localStorage.getItem("users")) || [],
            user:null,
            isAuthenticate:false
        },
        name: "authSlice",
        reducers:{
            userRegister:(state,action)=>{
              
                state.users.push(action.payload);
                localStorage.setItem("users", JSON.stringify(state.users))   

            },
            userLogin:(state,action)=>{
                state.user = action.payload
                state.isAuthenticate = true
                 localStorage.setItem("user", JSON.stringify(state.user)) 
                 localStorage.setItem("isAuthenticate", JSON.stringify(state.isAuthenticate))  
                 
            }


        }
    }
)

export const {userRegister,userLogin} = authSlice.actions


export default authSlice.reducer
