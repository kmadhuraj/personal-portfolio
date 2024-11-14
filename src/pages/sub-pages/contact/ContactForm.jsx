import React from "react";
import { useState, useEffect, useRef } from "react";
import Button from "../../../common/button/Button";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import StyledButton from "../../../common/StyledButton";
export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const data = {
    Name: formData.name,
    Email: formData.email,
    Message: formData.message,
  };
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  const SocialArray = [
    {
      Icon: faInstagram,
      Name: "Instagram",
      Link: "https://www.instagram.com/itsmemk___/",
    },
    {
      Icon: faLinkedin,
      Name: "Linked In",
      Link: "https://www.linkedin.com/in/madhuraj-k-96aa8b218/",
    },
    {
      Icon: faGithub,
      Name: "GitHub",
      Link: "https://github.com/kmadhuraj",
    },
  ];
  const [SuccesMsg, SetSuccesMessage] = useState("");
  const [timer, setTimer] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // alert(`Thank you, ${formData.name}! Your message has been sent.`);
    // Add form submission logic here

    axios.post(
      "https://api.sheetbest.com/sheets/5c0e674e-b45b-4db4-ae00-c67135b4ffbe",
      data
    );
    SetSuccesMessage("Message Sent Successfully");
    setTimer(true);
    setTimeout(() => setTimer(false), 3000);
  };

  return (
    <>
      <section
        data-aos="fade-up"
        data-aos-duration="1000"
        className="tw-py-8 tw-w-72 md:tw-w-auto "
        id="contact"
      >
        <h2 className="md:tw-text-center tw-text-start tw-mb-4">Contact Me</h2>
        <div className="  tw-mx-auto max-w-lg">
          <h2 className="mb-8">I would be happy to hear from you</h2>
          <p>Connect with Me Today. Let's Create Something Amazing Together!</p>

          <div className="tw-flex tw-flex-col-reverse md:tw-flex-row tw-gap-5">
            <form
              // ref={form}
              // style={{ width: "400px" }}
              onSubmit={handleSubmit}
              className="shadow-md rounded  px-8 pt-6 pb-8 mb-4"
            >
              <div className="tw-flex tw-gap-5">
                <div className="mb-4 w-50 ">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name *"
                    className="shadow appearance-none border rounded tw-w-full  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                  />
                </div>
                <div className="mb-4 w-50">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    placeholder="Email *"
                    onChange={handleChange}
                    className="shadow appearance-none border tw-w-full  rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                  />
                </div>
              </div>
              <div className="mb-6 w-100 ">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  placeholder="Message"
                  onChange={handleChange}
                  className="shadow appearance-none tw-w-full  tw-h-24 border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className=" tw-mt-5 tw-flex w-100 tw-items-center tw-justify-center md:tw-justify-start ">
                <Button
                  type="submit"
                  className="tw-bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Send Message
                </Button>
              </div>

              {timer && (
                <p className="tw-text-lg text-success text-center mt-4">
                  {SuccesMsg}
                  {}
                </p>
              )}
            </form>
            <div className="tw-flex tw-flex-col tw-items-center tw-gap-5 tw-mb-5">
              {SocialArray.map((social, i) => (
                <StyledButton key={i} data={social}></StyledButton>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
