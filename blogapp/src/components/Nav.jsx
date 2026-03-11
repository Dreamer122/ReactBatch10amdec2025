import { Link } from "react-router";
import { useSelector,useDispatch } from "react-redux";
import { logout } from "../redux/loginSlice";
import { account } from "../appwrite/config";
import toast from "react-hot-toast";
const Nav = () => {
    const {session}=useSelector((state)=>state.blog)
    const dispatch=useDispatch()

    const logoutsession= async()=>{
        try{
             await account.deleteSession({
         sessionId: session.sessionid
        });
dispatch(logout())
toast.success("logoutr successfully")

        }
        catch(error){
            console.log("logout error",error)
        }
    }

    return(
      

    //   {/* Navbar */}
      <nav className=" shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-serif text-[#3e2c2c]">
            Dil Se Diary
          </h1>

          <div className="space-x-6 hidden md:flex">
            <Link to={'/'}  className="text-[#3e2c2c] hover:text-[#e8a0a8]">Home</Link>
        {!session &&  <Link to={'/Login'} className="bg-[#e8a0a8] text-white px-4 py-2 rounded-full">
              Login
            </Link>
}
            {session &&
            <button onClick={logoutsession} className="bg-pink-400 text-black px-3 py-2 rounded">LOgout</button>    
        }  
        {
            !session && <Link to={"/signup"}> <button> signup</button> </Link>
        }
        {
          session && <Link to={`/dashboard/${session.userId}`}>Dashboard</Link>
        }
          </div>
        </div>
      </nav>
    )
}



export default Nav;