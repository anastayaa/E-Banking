import axios from "axios";
import { 
        GET_AGENTS,
        GET_AGENT,
        LOCATION_CHANGE,
        GET_ERRORS 
 } from "../types";

export const addAgent=(agent,agency_name,history)=>async dispatch=>{
    try{
        const res =await axios.post(`http://localhost:8080/api/agent/${agency_name}`,agent)
        dispatch({
          type:LOCATION_CHANGE,
          payload:history.location.pathname
        })
        history.push("/agentDashboard")
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

export const getAgent=(identifier)=>async dispatch=>{
    
  const res =await axios.get(`http://localhost:8080/api/agency/${identifier}`)
  dispatch({
      type:GET_AGENT,
      payload:res.data
  })
  dispatch({
    type:LOCATION_CHANGE,
    payload:""
  })

}

export const getAgents=()=>async dispatch=>{
    
  const res =await axios.get("http://localhost:8080/api/agent/all")
  dispatch({
      type:GET_AGENTS,
      payload:res.data
  })

}