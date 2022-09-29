import React from 'react'
import{useDispatch,useSelector} from "react-redux"

function Counter() {

  // Wiht useDispath we can send action to reduce/store
  const dispatch=useDispatch()

  // To get new changed data from store
  const gettingnewdatafromstore= useSelector(state=>state.newdata.mynum)


  const addnumber=()=>{
    // By helping of dispatch we gonna send request in reducers exact location by TYPE 
    dispatch({
      type:"incriment"
    })

  }
  const reducenumber=()=>{
    dispatch({
      type:"dicriment"
    })
    
  }
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

export default Counter
