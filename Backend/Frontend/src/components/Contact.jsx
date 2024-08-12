import React from 'react';
import { useForm } from 'react-hook-form';
import Navbar from './Navbar';
import Footer from './Footer';

function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-white dark:bg-gray-900 pt-20">
        <div className="w-full max-w-lg p-8 space-y-8 bg-gray-100 rounded-lg shadow-2xl dark:bg-gray-800">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Contact Us</h2>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">We would love to hear from you!</p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="form-control">
              <label htmlFor="name" className="label">
                <span className="label-text dark:text-gray-200">Name</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="input input-bordered w-full dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                {...register("name", { required: true })}
              />
              {errors.name && <span className="text-red-500 text-sm">This field is required</span>}
            </div>

            <div className="form-control">
              <label htmlFor="email" className="label">
                <span className="label-text dark:text-gray-200">Email</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="input input-bordered w-full dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                {...register("email", { required: true })}
              />
              {errors.email && <span className="text-red-500 text-sm">This field is required</span>}
            </div>
            <div className="form-control">
              <label htmlFor="number" className="label">
                <span className="label-text dark:text-gray-200">Number</span>
              </label>
              <input
                id="Number"
                name="Number"
                type="Number"
                className="input input-bordered w-full dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                {...register("Number", { required: true })}
              />
              {errors.Number && <span className="text-red-500 text-sm">This field is required</span>}
            </div>

            <div className="form-control">
              <label htmlFor="message" className="label">
                <span className="label-text dark:text-gray-200">Message</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="textarea textarea-bordered w-full dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                {...register("message", { required: true })}
              ></textarea>
              {errors.message && <span className="text-red-500 text-sm">This field is required</span>}
            </div>

            <div>
              <button
                type="submit"
                className="btn btn-primary w-full bg-pink-500 hover:bg-pink-900 duration-200 border-white"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className='mt-10'>
      <Footer />
      </div>
     
    </>
  );
}

export default Contact;
