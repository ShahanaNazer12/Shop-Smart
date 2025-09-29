import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";


function About(){
    const [state,setState]=useState(0);
    const[inc,setInc]=useState(0);
    function handle(){
        setState(state+1)
    }
    function increment(){
        setInc(inc-1)
    }
   

    useEffect(()=>{
         console.log("this is about page")

    },[inc])
    return(
        <div>
            <h1> this is about page</h1>
            <h2>{state}</h2>
            <h3>{inc}</h3>
            <Button onClick={handle} >+</Button>
            <Button  onClick={increment}>-</Button>

        </div>
    )
}
export default About;