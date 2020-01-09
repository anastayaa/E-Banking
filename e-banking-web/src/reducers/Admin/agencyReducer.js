import { 
    GET_AGENCIES,
    GET_AGENCY,
    GET_AGENCIES_ADDRESS,
    GET_AGENCIES_NAME
} from "../../actions/types";


const initialState={
    agencies:[],
    agency:{}

}

export default function(state=initialState,action){
    switch (action.type) {
        case GET_AGENCIES:
            
            return{
                ...state,agencies:action.payload
            };
        case GET_AGENCIES_ADDRESS:
            
            return{
                ...state,agencies:action.payload
                };
        case GET_AGENCIES_NAME:
            
                return{
                ...state,agencies:action.payload
                    };
            case GET_AGENCY:
            
                return{
                    ...state,agency:action.payload
                };
        default:
            return state;
    }
}