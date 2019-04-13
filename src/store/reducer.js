import * as actionTypes from './actions';

const initialState={
    isSignin: false,
    user:{
        email: "",
        password:""
    }
}

const reducer = (state = initialState, action) => {

    switch (action.type){
        case actionTypes.CLICK_SIGNIN:
            return{
                ...state,
                isSignin:true
            }
        case actionTypes.CHANGE_ACCOUNT:
            console.log(action.email, action.password);
            return{
                ...state,
                user:{
                    email:action.email,
                    password:action.password
                },
            }
    } 
    
    return state;
};




export default reducer;