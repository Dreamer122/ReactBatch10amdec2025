import axios from "axios"
export const  getData=async(url)=>{
    const result=await axios.get(url)
    return result

}