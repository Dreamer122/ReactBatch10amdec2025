
import { Blog } from "./Blog"

export function Home(){
    return (
        <div>
             <h2 style={{color:"red",fontSize:"35px",fontFamily:"fantasy"}}>Home component</h2>
            <Blog/>
        </div>
    )
}