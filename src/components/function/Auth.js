import axios from 'axios';


export const login = async (value) => 
await axios.post(import.meta.env.VITE_URL_API +'/auth', value);

export const currentUser  = async (authtoken) => 
await axios.post(import.meta.env.VITE_URL_API +'/current-user', {},
{
   headers:{
      authtoken,
   },
});

export const currentAdmin  = async (authtoken) => 
await axios.post(import.meta.env.VITE_URL_API +'/current-admin', {},
{
   headers:{
      authtoken,
   },
});


export const gettUser  = async (authtoken,id) => 
await axios.get(import.meta.env.VITE_URL_API +'/user/'+id,
{
   headers:{
      authtoken,
   },
});