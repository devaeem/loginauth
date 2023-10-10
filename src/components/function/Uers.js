import axios from 'axios';

export const register = async (value) => 
   await axios.post(import.meta.env.VITE_URL_API +'/user', value);



   export const Listuser  = async (authtoken) => 
   await axios.get(import.meta.env.VITE_URL_API +'/user', 
   {
      headers:{
         authtoken,
      },
   });


   export const changStatus  = async (authtoken,value) => 
   await axios.post(import.meta.env.VITE_URL_API +'/chang-status', value ,
   {
      headers:{
         authtoken,
      },
   });

   export const changRole  = async (authtoken,valuerole) => 
   await axios.post(import.meta.env.VITE_URL_API +'/chang-role', valuerole ,
   {
      headers:{
         authtoken,
      },
   });

   export const removeUser  = async (authtoken,id) => 
   await axios.delete(import.meta.env.VITE_URL_API +'/user/'+id ,
   {
      headers:{
         authtoken,
      },
   });

   export const resetPassword  = async (authtoken,id,values) => 
   await axios.put(import.meta.env.VITE_URL_API +'/user/'+id,values ,
   {
      headers:{
         authtoken,
      },
   });






//    export const currentUser  = async (authtoken) => 
// await axios.post(import.meta.env.VITE_URL_API +'/current-user', {},
// {
//    headers:{
//       authtoken,
//    },
// });