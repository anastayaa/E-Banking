import axios from "axios";
import { 
        GET_AGENCIES,
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

export const getAgency=(agency_name)=>async dispatch=>{
    
  const res =await axios.get(`http://localhost:8080/api/agency/${agency_name}`)
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

