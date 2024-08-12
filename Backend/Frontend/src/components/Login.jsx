import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from 'react-hot-toast';

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const onSubmit =async (data) =>{
        const userInfo={
         email: data.email,
         password: data.password,
        }
       await axios.post(`${window.location.origin}/user/login`,userInfo)
        .then((res)=>{
         console.log(res.data)
         if(res.data){
        //    alert("login successfully");
           toast.success('login successfully');
           document.getElementById("my_modal_3").close();
           setTimeout(() =>{
            window.location.reload();
            localStorage.setItem("Users",JSON.stringify(res.data));
           },3000);

         }
        }).catch((err)=>{
         if(err.response){
           console.log(err);
        //    alert("Error:"+err.response.data.message);
           toast.error("Error:"+err.response.data.message);
            setTimeout(()=>{},3000)
         }
         
        })
     }

  return (
    <div>
        <dialog id="my_modal_3" className="modal">
            <div className="modal-box dark:bg-slate-900 dark:text-white">
                <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                    {/* Close button */}
                    <Link to="/" className="btn btn-sm btn-circle  btn-ghost absolute right-2 top-2"
                    onClick={()=> document.getElementById("my_modal_3").close()}>✕</Link>
                    <h3 className="font-bold text-lg">Login</h3>

                    {/* Email */}
                    <div className='mt-4 space-y-2'>
                        <span>Email</span>
                        <br />
                        <input 
                            type="email" 
                            placeholder='Enter Your Email' 
                            className='w-80 px-3 py-1 rounded-md dark:text-black'
                            {...register("email", { required: true })}
                        />
                        <br />
                        {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
                    </div>

                    {/* Password */}
                    <div className='mt-4 space-y-2'>
                        <span>Password</span>
                        <br />
                        <input 
                            type="password" 
                            placeholder='Enter Your Password' 
                            className='w-80 px-3 py-1 rounded-md dark:text-black'
                            {...register("password", { required: true })}
                        />
                        <br />
                        {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
                    </div>

                    {/* Submit button */}
                    <div className='flex justify-around mt-4'>
                        <button type="submit" className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-900 duration-200'>Login</button>
                        <p>Not Registered? <Link to="/signup" className='underline text-blue-500 cursor-pointer'>Signup</Link></p>
                    </div>
                </form>
            </div>
        </dialog>
    </div>
  );
}

export default Login;
