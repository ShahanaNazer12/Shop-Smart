import { createSlice} from "@reduxjs/toolkit"

const authSlice = createSlice(
    {
        initialState:{
            users: JSON.parse(localStorage.getItem("users")) || [],
  user: JSON.parse(localStorage.getItem("user")) || null,
  isAuthenticate: JSON.parse(localStorage.getItem("isAuthenticate")) || false
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
                 
            },
             userLogout:(state)=>{
                state.user = null
                state.isAuthenticate = false
                 localStorage.setItem("user", JSON.stringify(state.user)) 
                 localStorage.setItem("isAuthenticate", JSON.stringify(state.isAuthenticate))  
                 
            },
            updateUserRole:(state,action)=>{
                const userIndex = state.users.findIndex((u)=>u.id === action.payload.id)
                if(userIndex !== -1){
                     state.users[userIndex].role= action.payload.role
                      localStorage.setItem("users", JSON.stringify(state.users)) 
                  
                }

                if(state.user.id === action.payload.id){
                    state.user.role = action.payload.role
                     localStorage.setItem("user", JSON.stringify(state.user)) 
                }

            },
            editUser:(state,action)=>{
                const userIndex = state.users.findIndex((usr)=>usr.id === action.payload.id)
                if(userIndex !== -1){
                    state.users[userIndex] = action.payload
                    localStorage.setItem("users", JSON.stringify(state.users)) 
                }
                if (state.user && state.user.id === action.payload.id) {
                state.user = action.payload;
                localStorage.setItem("user", JSON.stringify(state.user));
            }

            },
            deleteUser:(state,action)=>{
                state.users.splice(action.payload,1)
                 localStorage.setItem("users", JSON.stringify(state.users)) 
            },
            updateUserStatus:(state,action)=>{
                const userIndex = state.users.findIndex((user)=>user.id === action.payload)
                if(userIndex !== -1){
                    state.users[userIndex].status = !state.users[userIndex].status
                     localStorage.setItem("users", JSON.stringify(state.users)) 
                }
            }
            



        }
    }
)

export const {userRegister,userLogin,userLogout,updateUserRole,editUser,deleteUser,updateUserStatus} = authSlice.actions


export default authSlice.reducer
