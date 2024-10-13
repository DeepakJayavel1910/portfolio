// src/components/Contact.jsx
import { Typography } from "@material-tailwind/react";

const Contact = () => {
    return (
      <section id="contact" className="py-20 ">
        <Typography variant="h2" className="text-[#4EA571] text-center font-bold mb-10">
            Contact
          </Typography>
        <form className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              className="w-full p-2 border rounded"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border rounded"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="message">Message</label>
            <textarea
              id="message"
              className="w-full p-2 border rounded"
              rows="4"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button className="w-full bg-[#4EA571] text-white p-2 rounded hover:bg-[#337CA0] transition duration-200">
            Send Message
          </button>
        </form>
      </section>
    );
  };
  
  export default Contact;
  