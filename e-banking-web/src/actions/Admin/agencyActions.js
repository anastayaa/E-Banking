import axios from "axios";
import { 
        GET_AGENCIES,
        GET_AGENCIES_ALL,
        GET_AGENCIES_ADDRESS,
        GET_AGENCIES_NAME,
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
export const deleteAgency=(name,history)=>async dispatch=>{
  //console.log(id)
  const res =await axios.delete(`http://localhost:8080/api/agency/${name}`)
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

export const getAgencyByName=(name)=>async dispatch=>{
    
 const res =await axios.get(`http://localhost:8080/api/agency/${name}`)
 //const res =await axios.get("http://localhost:8080/api/agency/CIH")
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
  let name=conditions.name;
  let address=conditions.address;

     if(name!=="" && address==="")
     {
       res =await axios.get(`http://localhost:8080/api/agency/${name}`)
       dispatch({
         type:GET_AGENCIES_NAME,
          payload:res.data
        })
      }
      if(name==="" && address!=="")
    {
      res =await axios.get(`http://localhost:8080/api/agency/all/${address}`)
      dispatch({
        type:GET_AGENCIES_ADDRESS,
         payload:res.data
       })
     }

}
