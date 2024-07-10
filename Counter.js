import { useState ,useEffect} from 'react';
function Counter(){
    const[Count,setCount]=useState(0);
    const[Calculation,setCalculation]=useState(0);
    useEffect(()=>{
        setCalculation(()=>Count*2);
    },[Count]);
    return(
        < >
        <p>Count:{Count}</p>
        <button onclick={()=>setCount((c)=>c+1)}>+</button>
        <p> Calculation:{Calculation}</p>
        </>
    );
}
export default Counter;