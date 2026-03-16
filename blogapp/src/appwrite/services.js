const db=import.meta.env.VITE_DB_ID
const usercoll=import.meta.env.VITE_USER_ID
const bid=import.meta.env.VITE_BUCKET_ID
const posttable=import.meta.env.VITE_POST
import { ID ,Query,Operator} from "appwrite";
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

// create blog
export const CreateBlog=async(data,id)=>{
    try{
        let file=""
        if(data.thumbnail?.[0] instanceof File){
            const res=await storage.createFile({
    bucketId: bid,
    fileId: ID.unique(),
    file: data.thumbnail[0]
})
     

      file= storage.getFileView({
              bucketId: bid,
              fileId: res.$id
            });
console.log("image res=",res)
        }
    const res=await tablesDB.createRow({
    databaseId:db,
    tableId: posttable,
    rowId: ID.unique(), // Generates a unique ID automatically
    data: { 
       title:data.title,
       description:data.description,
       category:data.category,
       status:data.status,
       thumbnail:file,
       userid:id
    },
    })

    console.log("post =",res)
    // get user doc id
    let userdoc = await tablesDB.listRows({
    databaseId: db,
    tableId:usercoll,
    queries: [
        Query.equal('userId', id)
    ]
});
console.log("userdoc",userdoc)

    // send post id in userdata
     const updateddata= await tablesDB.updateRow(
   db,
    usercoll,
   userdoc.rows[0].$id,
     
    {
       posts:Operator.arrayAppend([res.$id])
     }
);
console.log("updated user doc",updateddata)
}

    catch(error){
        console.log("error occured while creating post"+error)
    }
}

// get all user posts

export const getalluserpost=async(userid)=>{
    try{
        let userposts = await tablesDB.listRows({
    databaseId: db,
    tableId:posttable,
    queries: [
        Query.equal('userid', userid)
    ]
});
console.log("all post=",userposts)
return userposts
    }
    catch(error){
        console.log("error occured while fetching all post"+error)
    }

}
// edit post

export const updatesinglenpost=async(docid,data)=>{
    try{

          const updateddata= await tablesDB.updateRow(
   db,
    posttable,
    docid,
     
    {
        ...data
       
     }
);
console.log("post updatd",updateddata)
    }
    catch(error){
        console.log("error occured while updating post"+error)
    }
}
// get singlepost data
export const getsinglepost=async(postid)=>{
    try{

  let d=await   tablesDB.getRow({
    databaseId: db,
    tableId: posttable,
    rowId: postid // The ID of the post you want to retrieve
});
console.log("post data",d)
return d
    }
    catch(error){
        console.log("erroroccured while fethcinh single post"+error)
    }


}