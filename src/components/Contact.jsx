// src/components/Contact.jsx
import { Typography } from "@material-tailwind/react";

const Contact = () => {
    return (
      <section id="contact" className="py-10 mt-12 mb-2 lg:mt-20">
        <Typography variant="h2" className="text-[#4EA571] text-center text-2xl lg:text-4xl font-bold mb-10">
            Contact
          </Typography>
        <form className="max-w-full mx-auto bg-white p-6 lg:w-1/2 rounded-lg shadow-lg">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-1 lg:text-lg" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              className="w-full p-1 border rounded text-sm lg:text-lg" 
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-1 lg:text-lg" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-1 border rounded text-sm lg:text-lg" 
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-1 lg:text-lg" htmlFor="message">Message</label>
            <textarea
              id="message"
              className="w-full p-1 border rounded text-sm lg:text-lg"
              rows="4"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button className="w-full bg-[#4EA571] text-white text-md p-1 lg:text-lg lg:p-2 rounded hover:bg-[#337CA0] transition duration-200">
            Send Message
          </button>
        </form>
      </section>
    );
  };
  
  export default Contact;
  