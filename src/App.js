import React from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap'


const  App=() =>{
    const [count,SetCount] = useState(0);
    
     
    return(
    <div>
    <center > 
     <h1>Counter</h1>
     <div  style={{ margin : "15%", width : "300" , height : "300" ,  padding :"5px" ,  justifyContent :"space-between"}}>
     <h1>{count} </h1>
    <Button  variant="success"    onClick={ ()=> SetCount(count + 1)}> Increment</Button>
    
    <Button  variant="danger"  onClick= { ()=> SetCount(count - 1)}> Decrement</Button>
     </div>
     </center>
    </div>
    )
};

 
export default App;
