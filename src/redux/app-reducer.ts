import { getAuthUserData } from "./auth-reducer";
import { InferActionsTypes } from "./redux-store";

// const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initialState = {
  initialized: false,
}

export type initialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>


const appReducer = 
  (state: initialStateType = initialState, action: ActionsType): initialStateType => {
  switch(action.type){
    case 'INITIALIZED_SUCCESS':
      return {
        ...state,
        initialized: true,  
      }

    default: return state;
  }
}

// type initializedSuccessActionType = {
//   type: typeof 'INITIALIZED_SUCCESS'
// } 

export const actions = {
  initializedSuccess: () => ({type: 'INITIALIZED_SUCCESS'} as const)
}


export const initializeApp = () => (dispatch: any) => {
  let promise = dispatch(getAuthUserData());

  promise.then(() => {
    dispatch(actions.initializedSuccess());
  })
}

export default appReducer;
