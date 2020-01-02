import axios from "axios";
import { 
       // GET_DEMANDS,
        LOCATION_CHANGE,
        /* GET_DEMAND,
        GET_DEMANDS_ALL,
        GET_DEMANDS_ACCOUNT,
        GET_DEMANDS_STATUS,
        GET_DEMANDS_DATE,
        GET_DEMANDS_DATE_ACCOUNT,
        GET_DEMANDS_DATE_STATUS,
        GET_DEMANDS_ACCOUNT_STATUS,*/
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

