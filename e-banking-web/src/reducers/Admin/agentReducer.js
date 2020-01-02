import { 
    GET_AGENTS,
    GET_AGENT
} from "../../actions/types";


const initialState={
    agents:[],
    agent:{}

}

export default function(state=initialState,action){
    switch (action.type) {
        case GET_AGENTS:
            
            return{
                ...state,agents:action.payload
            };
            case GET_AGENT:
            
                return{
                    ...state,agent:action.payload
                };
        default:
            return state;
    }
}