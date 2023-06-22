//implements redux thunk middleware
import { createSlice } from "@reduxjs/toolkit";

//checks local storage
const initialState = {
 //check localstorage and get item - userinfo, if its there then we want to use it
 //and parse it. otherwise userinfo is gonna be null
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null,
};

//
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        /*set user info to local storage when we call this we're gonna pass 
        the user in as an action, then we're gonna set it to our userInfo state
        and save that also to local storage*/
        setCredentials:(state, action) =>{
            //payload is gonna be the name, user, id and set it to localstorage
            state.userInfo = action.payload;
            localStorage.setItem('userInfo', JSON.stringify(action.payload))
        },
        //front end logout to kill localstorage
        logout:(state, action) => {
            state.userInfo = null;
            localStorage.removeItem('userInfo')
        },
    },
});

//
export const {setCredentials, logout} = authSlice.actions;

export default authSlice.reducer;

//when you call a function thats an action, when you change its state, thats the reducer