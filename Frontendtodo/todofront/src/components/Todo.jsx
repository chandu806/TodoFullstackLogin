import React from 'react'

export const Todo = () => {
  return (
   
    // <div class="main">
    // <div id="main2">
    //     <input type="text" placeholder="Enter Tittle" id="title"> 
    //     <input type="checkbox" id="check">   
    // </div>
    // <button onclick="post()" id="addbutton">ADD</button>
    // <div id="contain">

    // </div>
    <div className='main'>
        <div id="main2">
            <input type={text} placeholder="Enter Todo" itemID='title'></input>
        </div>
        <button onClick={post()} id="addbutoon">ADD</button>
        <div id='contain'>
            
        </div>
    </div>



  )
  
}
