import React from "react";

function Contact() {
  return (
    <div
      name="contact"
      className="w-full h-fit md:h-screen bg-gradient-to-b from-black to-gray-800 py-8 md:py-0 text-white md:px-10 lg:p-20
      xl:px-10"
    >
      <div className="flex flex-col p-4 justify-center  max-w-screen-lg mx-auto h-full">
        <div className="py-6 mt-6">
          <p className="text-4xl inline font-bold border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form to get in touch with me.</p>
        </div>
        <div className="flex justify-center items-center ">
          <form action="" className="flex flex-col w-full md:w-1/2 gap-2">
            <input
              type="text"
              name="name"
              placeholder="Enter your name*"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email*"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              rows={10}
              id=""
              placeholder="Enter your message*"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>
            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-6 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
