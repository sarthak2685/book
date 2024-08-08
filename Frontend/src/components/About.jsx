import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';

function About() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white dark:bg-gray-900 pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">About Bookscape</h1>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Discover a world of books at your fingertips. Bookscape is your go-to platform for an immersive reading experience.
            </p>
            <img 
              src="https://images.pexels.com/photos/2041540/pexels-photo-2041540.jpeg?auto=compress&cs=tinysrgb&w=600" 
              alt="Bookshelf" 
              className="mt-6 mx-auto rounded-lg shadow-lg w-3/4 max-w-md"
            />
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4 text-center">Our Mission</h2>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl">
              <p className="text-gray-700 dark:text-gray-300 text-center">
                At Bookscape, our mission is to provide readers with a diverse collection of books and an unparalleled reading experience. We aim to foster a love for reading and knowledge by offering a platform that is both accessible and engaging.
              </p>
              <img 
                src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=500" 
                alt="Mission" 
                className="mt-6 mx-auto rounded-lg shadow-lg w-3/4 max-w-md"
              />
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4 text-center">Our Vision</h2>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl">
              <p className="text-gray-700 dark:text-gray-300 text-center">
                Our vision is to become the leading online destination for book lovers around the world, where every reader can find their next favorite book and every book finds its reader.
              </p>
              <img 
                src="https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500" 
                alt="Vision" 
                className="mt-6 mx-auto rounded-lg shadow-lg w-3/4 max-w-md"
              />
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4 text-center">Why Choose Bookscape?</h2>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl space-y-4">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-blue-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm12 10a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V12zM4 12a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V12z"/>
                </svg>
                <p className="text-gray-700 dark:text-gray-300">A vast collection of books across various genres.</p>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-blue-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8zm6 6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-4h8a2 2 0 0 1 2 2v4h4V10h-2V8h-2V6h-4V4h-4V2h-2V0H6a2 2 0 0 1 2 2v2h8zm2 2h-2V8h2v2zM0 10h2v2H0v-2z"/>
                </svg>
                <p className="text-gray-700 dark:text-gray-300">User-friendly interface with customizable reading settings.</p>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-blue-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8zm6 6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-4h8a2 2 0 0 1 2 2v4h4V10h-2V8h-2V6h-4V4h-4V2h-2V0H6a2 2 0 0 1 2 2v2h8zm2 2h-2V8h2v2zM0 10h2v2H0v-2z"/>
                </svg>
                <p className="text-gray-700 dark:text-gray-300 text-center">Personalized book recommendations based on your reading history.</p>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1665789318391-6057c533005e?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Features" 
                className="mt-6 mx-auto rounded-lg shadow-lg w-3/4 max-w-md"
              />
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4 text-center">Meet Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: 'Sarthak Rai', role: 'Founder & CEO', imgSrc: 'https://img.freepik.com/free-photo/3d-illustration-cute-boy-with-sad-expression-his-face_1142-57893.jpg?size=626&ext=jpg&uid=R158213146&ga=GA1.1.658118028.1722491959&semt=ais_hybrid' },
                { name: 'John Smith', role: 'CTO', imgSrc: 'https://img.freepik.com/premium-photo/man-with-shirt-that-says-he-is-real-man_1057389-84799.jpg?uid=R158213146&ga=GA1.1.658118028.1722491959&semt=ais_hybrid' },
                { name: 'Alice Johnson', role: 'Lead Developer', imgSrc: 'https://img.freepik.com/premium-psd/woman-yellow-sweater-with-nose-ring-her-face_1233986-1841.jpg?uid=R158213146&ga=GA1.1.658118028.1722491959&semt=ais_hybrid' }
              ].map((member, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl text-center">
                  <img src={member.imgSrc} alt={member.name} className="w-24 h-24 mx-auto rounded-full mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{member.name}</h3>
                  <p className="text-gray-700 dark:text-gray-300">{member.role}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4 text-center">Get In Touch</h2>
            <Link to="/contact">
            <button
                type="submit"
                className="btn btn-primary  bg-pink-500 hover:bg-pink-900 duration-200 border-white"
              >
                Contact Us
              </button>
              </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
