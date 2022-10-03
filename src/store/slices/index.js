import { createSlice } from "@reduxjs/toolkit";
//axios 
import axios from "axios";
export const userSlice = createSlice({
    name:'users',
    initialState:{
        list:[]
    },
    reducers:{
        //action
        setUserList: (state, action) =>{
            state.list = action.payload; // propiedad del action que trae los datos de los nuevos datos, los usuarios de la apo
        }

    }
});

//exportamos las action para que queden visible por fuera de los reducers
export const {setUserList} = userSlice.actions; 
export default userSlice.reducer;


//debo subir los datos de la api al estado de la app "reducers"
//y para esto necesitamos un medio de comunicacion 
// y este medio de comunicacion se llama action
export const fecthAllUsers = ()=>(dispacht)=>{
  axios.get('https://reqres.in/api/users?per_page=12')
  .then((response) =>{
    //ejecutamos la action que recibe los datos que vinieron de la consulta del app 
    dispacht(setUserList(response.data.data));
  })
  .catch((error) => console.log(error));

}