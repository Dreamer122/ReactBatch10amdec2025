const db=import.meta.env.VITE_DB_ID
const usercoll=import.meta.env.VITE_USER_ID
import { ID } from "appwrite";
import {tablesDB} from "./config"
// insert data into user table
export const createUser=async(data,userid)=>{
    try{

    const result = await tablesDB.createRow({
    databaseId: db,
    tableId: usercoll,
    rowId: ID.unique(),
    data: {
        "userId":userid,
        "email": data.email,
        "fullname": data.fullname,
        
    },
});
console.log("usercreated",result)
    }
catch(error){
    console.log("error occured while creating user",error)
}
}