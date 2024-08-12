import React from 'react'
import { useAuth } from '../context/AuthProvider'
import toast from 'react-hot-toast';

function Logout() {
    const [authUser,setAuthUser] = useAuth();
    const handleLogout=()=>{
        try{
            setAuthUser({
                ...authUser,
                user:null,
            });
            localStorage.removeItem('Users');
            toast.success("Logged out successfully");
            setTimeout(() =>{
             window.location.reload();
            },1000);
            
        } catch(error){
            toast.error("Couldn't log out"+error.message);
            setTimeout(()=>{},3000)

        }
    }
  return (
    <div>
        <button className='px-3 py-3 bg-red-500 text-white rounded-md cursor-pointer'
        onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout