import axios from "axios";
import { 
        GET_AGENTS,
        GET_AGENT,
        LOCATION_CHANGE,
        GET_ERRORS 
 } from "../types";


 export const deleteAgent=(identifier,history)=>async dispatch=>{
  //console.log(id)
  const res =await axios.delete(`http://localhost:8080/api/agent/${identifier}`)
  const res1 =await axios.get("http://localhost:8080/api/agent/all")
  dispatch({
    type:GET_AGENTS,
    payload:res1.data
})
history.push("/agentDashboard")
}

export const addAgent=(agent,history)=>async dispatch=>{
    try{
        const res =await axios.post("http://localhost:8080/api/agent",agent)
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
    
  const res =await axios.get(`http://localhost:8080/api/agent/${identifier}`)
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