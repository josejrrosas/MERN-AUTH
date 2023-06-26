// this is where we'll have all of our end points to work with the backend
import {apiSlice} from './apiSlice';
const USERS_URL = '/api/users';

//allows us to create our own endpoints in this file and inject them into the endpoints 
//into the endpoints in apiSlice.js
export const usersApiSlice = apiSlice.injectEndpoints({
    //in this endpoints we can put all of our queries and mutations
    endpoints:(builder) => ({
        login:builder.mutation({
            query: (data) => ({
                //this its the authUser in userController.js
                url: `${USERS_URL}/auth`,
                method: 'POST',
                body:data
            })
        }),
        register:builder.mutation({
            query: (data) => ({
                //if we make a post request to api/users thats our register
                url: `${USERS_URL}`,
                method: 'POST',
                body:data
            })
        }),
        logout:builder.mutation({
            query: () => ({
                url: `${USERS_URL}/logout`,
                method: 'POST',
            })
        }),
        updateUser:builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/profile`,
                method: 'PUT',
                body:data,
            })
        }),
    })
})
//if we were using login:builder.query it would be useLoginQuery instead of mutation
export const {useLoginMutation, useLogoutMutation, useRegisterMutation, useUpdateUserMutation} = usersApiSlice;