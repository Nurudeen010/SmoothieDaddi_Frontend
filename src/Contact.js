import React, { useState } from 'react';
import axios from 'axios';
import Footer from './footer';
import Nav from './NavBar';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/contact/', { name, email, message });
      if (response.status === 200) {
        setSubmitted(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Nav />
      <div className="max-w-md mx-auto p-6 bg-white rounded shadow">
        {submitted ? (
          <p className="text-green-500 font-bold">Form submitted successfully!</p>
        ) : (
          <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
            <div className="mb-8">
              <form className="max-w-lg" onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                    Name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
                    Message:
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded"
                    rows="4"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                >
                  Submit
                </button>
              </form>
            </div>
            <div>
              <div className="bg-gray-100 p-4 rounded">
                <h3 className="text-xl font-bold mb-2">Contact Information</h3>
                <p>
                  <span className="font-bold">Email:</span> smoothiedaddi@gmail.com
                </p>
                <p>
                  <span className="font-bold">Phone Number:</span> +2348078983638
                </p>
                <p>
                  <span className="font-bold">Location:</span> Mushin Lagos
                </p>
                <p>
                  <span className="font-bold">Address:</span> 18, Cardoso Street, Mushin Lagos
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ContactForm;
