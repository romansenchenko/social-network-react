import { InferActionsType } from './redux-store';
import { getAuthUserData } from "./auth-reducer";

let initialState = {
    initialized: false
};

export type InitialStateType = typeof initialState 
type ActionsType = InferActionsType<typeof actions> 

const appReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'SN/APP/INITIALIZED_SUCCESS':
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}
 
export const actions = {
    initializedSuccess: () => ({ type: 'SN/APP/INITIALIZED_SUCCESS' })
}

export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(getAuthUserData());
    
    Promise.all([promise])
        .then(() => {
            dispatch(actions.initializedSuccess());
        });
}

export default appReducer;