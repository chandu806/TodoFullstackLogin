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
            <input type={text} placeholder="Enter Todo" id='title'></input>
        </div>
        <button onClick={post()} id="addbutoon">ADD</button>
        <div id='contain'>

        </div>
    </div>

    const getting=async()=>{
        try {
            let res= await fetch(`http://localhost:3000/tasks`);
            let data= await res.json();
            console.log(data);
             
             update(data);
        } catch (error) {
            console.log(error);
        }
    }
    getting();
    
    
    const post=async()=>{
        
        try {
            let tasks={
            title:document.getElementById('title').value,
        
            }
        
            if(tasks.title.length!==0){
                let res=await fetch(`http://localhost:3000/tasks`,{
                    method:"POST",
                    body:JSON.stringify(tasks),
                    headers:{
                        "Content-Type":"application/json"
                    }
                
                });
                let data= await res.json();
        
            
            }else{
            alert("Please fill")
            }
        
        } catch (error) {
            console.log(error);
        }
    
        
    }
    
    
    function update(data){
        data.forEach(function(text){
            console.log(text);
            let div=document.createElement('div');
    
            div.setAttribute('id',"row1")
            let tr=document.createElement('h3');
            let tr1=document.createElement('button');
            let tr2=document.createElement('button')
            tr.setAttribute('id',"row2")
            if(text.check===true){
                tr.style.color="gray";
            }else{
                tr.style.color="orange";
            }
            
            
            tr.innerText=text.title;
            tr1.innerText="Edit";
            tr2.innerText="Delete"
    
            tr1.style.color="green";
            tr2.style.color="red";
            div.append(tr);
            tr1.setAttribute('id',"tr1");
            tr2.setAttribute("id","tr2");
            document.querySelector('#contain').append(div,tr1,tr2);
    
        });
    }


  )
  
}
