import axios from "axios";
import { 
        GET_AGENCIES,
        GET_AGENCIES_ALL,
        GET_AGENCIES_ADDRESS,
        GET_AGENCIES_CITY,
        GET_AGENCY,
        LOCATION_CHANGE,
        GET_ERRORS 
 } from "../types";

export const addAgency=(agency,history)=>async dispatch=>{
    try{
        const res =await axios.post("http://localhost:8080/api/agency",agency)
        dispatch({
          type:LOCATION_CHANGE,
          payload:history.location.pathname
        })
        history.push("/agencyDashboard")
      }catch (err) {
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        });
        dispatch({
          type:LOCATION_CHANGE,
          payload:""
        })
      }
}

/*export const getAgency=(agency_name)=>async dispatch=>{
    
  const res =await axios.get(`http://localhost:8080/api/agency/${agency_name}`)
  dispatch({
      type:GET_AGENCY,
      payload:res.data
  })
  dispatch({
    type:LOCATION_CHANGE,
    payload:""
  })
  

}*/
export const deleteAgency=(id,history)=>async dispatch=>{
  //console.log(id)
  const res =await axios.delete(`http://localhost:8080/api/agency/${id}`)
  const res1 =await axios.get("http://localhost:8080/api/agency/all")
  dispatch({
    type:GET_AGENCIES,
    payload:res1.data
})
history.push("/agencyDashboard")
}
export const getAgency=(agency)=>async dispatch=>{
  dispatch({
     type:GET_AGENCY,
      payload:JSON.parse(agency)
  })
}

export const getAgencyById=(id)=>async dispatch=>{
    
 const res =await axios.get(`http://localhost:8080/api/agency/${id}`)
  dispatch({
      type:GET_AGENCY,
      payload:res.data
  })
  dispatch({
    type:LOCATION_CHANGE,
    payload:""
  })

}

export const getAgencies=()=>async dispatch=>{
    
  const res =await axios.get("http://localhost:8080/api/agency/all")
  dispatch({
      type:GET_AGENCIES,
      payload:res.data
  })

}

export const getAgenciesByConditions=(conditions)=>async dispatch=>{
    
  let res;
  let city=conditions.city;
  let name=conditions.name;

     if(city!=="")
     {
       res =await axios.get(`http://localhost:8080/api/agency/all/${city}`)
       dispatch({
         type:GET_AGENCIES_CITY,
          payload:res.data
        })
      }
  
}
