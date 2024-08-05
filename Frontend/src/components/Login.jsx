import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const onSubmit = (data) => console.log(data);

  return (
    <div>
        <dialog id="my_modal_3" className="modal">
            <div className="modal-box dark:bg-slate-900 dark:text-white">
                <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                    {/* Close button */}
                    <Link to="/" className="btn btn-sm btn-circle  btn-ghost absolute right-2 top-2">✕</Link>
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
