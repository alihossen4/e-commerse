import type React from "react";
import { useAppSelector } from "./redux/hooks";


const Counter: React.FC = () =>{
    const count = useAppSelector(s => s.counter)
    return(
        <h1>
            count : {count}
        </h1>
    )
}
export default Counter