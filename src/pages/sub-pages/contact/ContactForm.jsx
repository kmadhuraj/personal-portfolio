import React from "react";
import { useState,useEffect } from "react";
import Button from "../../../common/button/Button";
import AOS from "aos";
import "aos/dist/aos.css";
export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been sent.`);
    // Add form submission logic here
    setFormData({ name: "", email: "", message: "" });
  };
  return (
    <>
      <section
        data-aos="zoom-in-right"
        className="tw-py-12 tw-bg-gray-100"
        id="contact"
      >
        <div className="container  tw-mx-auto px-5 max-w-lg">
          <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>
          <form
            onSubmit={handleSubmit}
            className=" shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <div className="mb-4 w-100">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="shadow appearance-none border rounded w-100  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4 w-100">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                placeholder="Email"
                onChange={handleChange}
                className="shadow appearance-none border w-100 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-6 w-100">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                placeholder="Message"
                onChange={handleChange}
                className="shadow appearance-none w-100 border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className=" tw-mt-6 tw-flex tw-items-center tw-justify-center">
              <Button
                type="submit"
                className="tw-bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
