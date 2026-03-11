const db=import.meta.env.VITE_DB_ID
const usercoll=import.meta.env.VITE_USER_ID
const bid=import.meta.env.VITE_BUCKET_ID
import { ID ,Query} from "appwrite";
import {tablesDB,storage} from "./config"
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

// get user data
 export const getuserdata=async(userid)=>{
    try{
        let res =  await tablesDB.listRows({
    databaseId: db,
    tableId: usercoll,
    queries: [
        Query.equal('userId', userid)
    ]
});
console.log(res)
return res.rows

    }
    catch(error){
        console.log("error occured while fetching user data",error)
    }
 }

//  update user profile 
export const updateuserprofile=async(docid,data)=>{
    try{
        // create image url
        console.log("data",data)
        let file=""
        if(data.image[0] instanceof File){
   const res=await storage.createFile({
    bucketId: bid,
    fileId: ID.unique(),
    file: data.image[0]
})
     

      file= storage.getFileView({
              bucketId: bid,
              fileId: res.$id
            });
console.log("image res=",res)
        }

        // 
        let d={}
        if(file){
            d.fullname=data.fullname
        d.bio=data.bio
       d.image= file
        }
        else{
        d.fullname=data.fullname
         d.bio=data.bio
        }

     const updateddata= await tablesDB.updateRow(
   db,
    usercoll,
    docid,
     
    {
        ...d
     }
);

console.log("update profile",updateddata)
return updateddata
    }
    catch(error){
        console.log("error occured while updating profile"+error)
    }
}