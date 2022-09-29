import{configureStore} from "@reduxjs/toolkit";
import{anyname}from "./reducer"


const store= configureStore({

    reducer:{
        newdata:anyname,

    },

});
export default store