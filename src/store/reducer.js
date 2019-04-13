import * as actionTypes from './actions';

const initialState={
    isSignin:false
}

const reducer = (state = initialState, action) => {
    if(action.type===actionTypes.CLICK_SIGNIN){
        return {
            ...state,
            isSignin: true
        }
    }
    return state;
};

export default reducer;