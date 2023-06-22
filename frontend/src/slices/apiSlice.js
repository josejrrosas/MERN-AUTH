/*This is gonna implement the thunk middleare 
this is a parent to any other api slices, for this app its just for Users/
Thunk middleware is a middleware for Redux that allows you to write 
action creators that return functions instead of plain action objects.
It is commonly used to handle asynchronous actions in Redux.*/

import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

//uses empty string bc we used a proxy otherwise it would be http:localhost:5000
const baseQuery = fetchBaseQuery({baseUrl: ''});



export const apiSlice = createApi(
   { baseQuery,
    tagTypes: ['Users'], //has to do with caching, so we dont have to fetch everytime for ex
    endpoints:(builder) => ({ }), //built in builder to make our requests, to interact with backend
});