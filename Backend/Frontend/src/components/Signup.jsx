import React from 'react'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from 'react-hot-toast';

function Signup() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const onSubmit =async (data) =>{
         const userInfo={
          fullname: data.fullname,
          email: data.email,
          password: data.password,
         }
        await axios.post(`${window.location.origin}/user/signup`,userInfo)
         .then((res)=>{
          console.log(res.data)
          if(res.data){
            // alert("signup successfully");
            toast.success('signup successfully');
            navigate(from,{replace:true});

          }
          localStorage.setItem("Users",JSON.stringify(res.data));
          // window.location.reload("/");
         }).catch((err)=>{
          if(err.response){
            console.log(err);
            toast.error("Error:"+err.response.data.message);
          }
          alert("Error:"+err) 
         })
      }
  return (
    <>
    <div className='flex justify-center items-center h-screen'> 
        <div  className="w-[600px]">
  <div className="modal-box dark:bg-slate-900 dark:text-white">
    <form onSubmit={handleSubmit(onSubmit)}  method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to="/"  className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
    
    <h3 className="font-bold text-lg">Signup</h3>
    <div className='mt-4 space-y-2'>
        <span>Name</span>
        <br />
        <input type="text" placeholder='Enter Your Name' className='w-80 px-3 py-1 rounded-md dark:text-black' 
       {...register("fullname", { required: true })}
       />
       <br />
       {errors.fullname && <span className='text-sm text-red-500'>This field is required</span>}
   </div>
    {/* email */}
   <div className='mt-4 space-y-2'>
        <span>Email</span>
        <br />
        <input type="email" placeholder='Enter Your Email' className='w-80 px-3 py-1 rounded-md dark:text-black'
        {...register("email", { required: true })}
                        />
                        <br />
                        {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
   </div>
   {/* Password */}
   <div className='mt-4 space-y-2'>
        <span>Password</span>
        <br />
        <input type="password" placeholder='Enter Your Password' className='w-80 px-3 py-1 rounded-md dark:text-black' 
        {...register("password", { required: true })}
        />
        <br />
        {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
   </div>
   <div className='flex justify-around mt-4'>
   <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-900 duration-200'>Signup</button>
   <p className='text-xl]'>Have account?{" "} <button className='underline text-blue-500 cursor-pointer'
   onClick={()=> document.getElementById("my_modal_3").showModal()}
   >Login</button>{" "}
   <Login/>
   </p>
   </div>
   </form>
  </div>
  
</div>
    </div>
    </>
  )
}

export default Signup