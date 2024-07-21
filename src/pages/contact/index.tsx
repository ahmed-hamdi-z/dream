import Footer from '@/components/footer';
import React from 'react';

const Contact: React.FC = () => {
  return (
    <>

<div className="container mx-auto p-6 bg-gray-50">
      <div className="flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden">
        <div className="md:w-1/2 p-6">
          <h2 className="text-3xl font-bold mb-4 text-purple-700">Get In Touch</h2>
          <p className="mb-4">Get in touch with us and our experts and developers would love to contribute their expertise and insights and help you today.</p>
          <div className="mb-4">
            <p className="flex items-center mb-2">
              <svg className="w-6 h-6 text-purple-700 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2 7c0 10 8 15 10 15s10-5 10-15c0-2.5-1.5-4-4-4h-12c-2.5 0-4 1.5-4 4zm9 8h2v2h-2v-2zm0-6h2v5h-2v-5z"/>
              </svg>
              99999999999999
            </p>
            <p className="flex items-center mb-2">
              <svg className="w-6 h-6 text-purple-700 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
              Dreamwedding@hotmail.com
            </p>
            <p className="flex items-center mb-2">
              <svg className="w-6 h-6 text-purple-700 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10-10-4.48-10-10 4.48-10 10-10zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
              </svg>
              785 15th Street, Office 478 Denver, DE 81566
            </p>
          </div>
        </div>
        <div className="md:w-1/2 p-6 bg-gray-100">
          <form className="space-y-4">
            <div className="flex flex-col">
              <label htmlFor="firstName" className="mb-1">First name</label>
              <input type="text" id="firstName" name="firstName" className="p-2 border border-gray-300 rounded" placeholder="John"/>
            </div>
            <div className="flex flex-col">
              <label htmlFor="lastName" className="mb-1">Last name</label>
              <input type="text" id="lastName" name="lastName" className="p-2 border border-gray-300 rounded" placeholder="Smith"/>
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-1">Email</label>
              <input type="email" id="email" name="email" className="p-2 border border-gray-300 rounded" placeholder="John123@gmail.com"/>
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="mb-1">Message</label>
              <textarea id="message" name="message" className="p-2 border border-gray-300 rounded" placeholder="Lorem ipsum dolor sit amet consectetur..."></textarea>
            </div>
            <button type="submit" className="px-4 py-2 bg-purple-700 text-white rounded">Send Email</button>
          </form>
        </div>
      </div>
   
    </div>
       <Footer />
       </>
  );
};

export default Contact;
