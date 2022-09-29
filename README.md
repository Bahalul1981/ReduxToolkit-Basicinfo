BASIC  REDUX TOLLKIT  TUTORIAL
  
1.	npx create-react-app learnredux
2.	npm install @reduxjs/toolkit react-redux  (Install this)
3.	Then create a new folder (redux) in src.
4.	Make a store there by (store.js)

Making Store
এখানে আমি মূল স্টোর  তৈরী করবো
5.	Type this command on store.js   import {configureStore} from “@reduxjs/toolkit”
  Under that command type 
  const store = configureStore({
reducer:{
}
     })
    export default store
এবার এটাকে index.js এর মাদ্ধমে পুরো application টাকে এর মধ্যে জমা রাখবো।

6.	Then go to index.js and import {store} folder import {store} from “./redux/store”
7.	Also import there  import {Provider} from “react-redux”
8.	Then wrap the app with provider like this:
<Provider store={store}>
<App />
<Provider/>
Now time to make reducer:
এবার reducer তৈরী করবো।
9.	Make  reducer.js  file in redux file.
Then import {createReducer} from “@reduxjs/toolkit”
Under that const initialState={
initialState মূলত একটা অবজেক্ট। যত খুশি অবজেক্ট এখানে দেওয়া যাবে।
  Anyname(allname): “”, 
/ anyname (count): 0,
/ anyname: []
}

এবার  reducer তৈরী করে সেটা export করবো। Reducers মূলত function যা অবজেক্ট আকারে বসবে।

export const anyname= createReducer(initialState,
{
increment: (state,action)=>{
state.count+= 1
},
diccrement: (state,action)=>{
state.count-= 1

}

}
) 

10.	এবার এই reducer কে  store.js থেকে  গেট  যে নামে এক্সপোর্ট করা হয়েছে সে নামে।

Import { anyname } from “./redux/reducer.js”

  const store = configureStore({
reducer:{
  aminsreducer: anyname
}
     })


11.	যে পেজ থেকে অ্যাকশন পাঠানো হবে বা  reducer/store  এ রিকোয়েস্ট পাঠানো হবে , সে পেজ এ চলে যাবো।
•	Need to import useDispatch to send action
•	Need to import useSelector to get new changed data from store by reducer

Import {useDispatch, useSelector} from “react-redux”
Then indide component need to type:

dispatch=useDispatch()
  // USING DISPATCH TO SEND REQUEST
    dispatch({
      type:"incriment"
    })

 // USING USECELECTOR TO GET DATA
 const gettingnewdatafromstore= useSelector(state=>state.newdata.mynum)




// HERE COD EXAMPLE

import{useDispatch,useSelector} from "react-redux"

function Counter() {

  // Wiht useDispath we can send action to reduce/store
  const dispatch=useDispatch()

  // To get new changed data from store ny saving name ("newdata") then changed initial state from reducer(mynum)
  const gettingnewdatafromstore= useSelector(state=>state.newdata.mynum)

  const addnumber=()=>{
    // By helping of dispatch we gonna send request in reducers exact location by TYPE key

    // USING DISPATCH TO SEND REQUEST
    dispatch({
      type:"incriment"
    })

  }
  const reducenumber=()=>{
    // By helping of dispatch we gonna send request in reducers exact location by TYPE key
    dispatch({
      type:"dicriment"
    })
    
  }

   // SENDING PAYLOAD VALUE. ITS CAN BE ANY VALUE FROM USESES OR ANY OBJET OR ANY 
 API etc.
  const addbyuser=()=>{
    dispatch({
      type:"fromuser",
      payload:30
    })
  }
  return (
    <div>
        <h1>{gettingnewdatafromstore}</h1>
        <button onClick={addnumber}>Incriment</button>
        <button onClick={reducenumber}>Dicriment</button>
        <button onClick={addbyuser}>Incriment by users</button>
      
    </div>
  )
}







	
