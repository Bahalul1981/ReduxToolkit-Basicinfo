import{createReducer} from "@reduxjs/toolkit";


// This is an object
// This is like initial state
const initialState={
    mynum:0,
}

export const anyname = createReducer(initialState,{

    //Here we gonna make reduces. Reducer is a funcation
    // This is like setInitialstate
    
        incriment: (state)=>{
            state.mynum +=1;
        },
        dicriment: (state)=>{
            state.mynum -=1;
        },

    // This value will be taking from users
        fromuser:(state,action)=>{
            state.mynum +=action.payload

        },

    });