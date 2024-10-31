import React from "react";
import "../App.css";
import { useEffect } from "react";
import Navbar from "../header/MyNavbar";
import About from "./sub-pages/about/About";
import Resume from "./sub-pages/resume/Resume";
import Skills from "./sub-pages/skills/Skills";
import ProjectSection from "./sub-pages/projects/ProjectSection";
import ContactForm from "./sub-pages/contact/ContactForm";
import Footer from "../footer/Footer";
import { TypeAnimation } from "react-type-animation";
export default function HomePage() {
  const skillSet1 = ["React.js", "Blazor", "Tailwind CSS", "Bootstrap"];
  const skillSet2 = ["ASP .Net Core Web API", "ASP .Net MVC"];

 
  return (
    <>
      <Navbar></Navbar>
      <div className=" tw-flex tw-flex-col  md:tw-flex-row tw-items-center lg:tw-gap-72 tw-bg-gray-800 tw-p-20 tw-gap-20 md:tw-justify-evenly  md:tw-items-center">
        <div  className="tw-flex tw-items-center tw-flex-col md:tw-items-start tw-text-white">
          <p className="tw-text-lg fw-light text-uppercase">Hi There!</p>

            {/* animation typing  */}
          <h5 className="tw-text-xl w-100 fw-bold text-uppercase">
            <TypeAnimation
              sequence={["Madhuraj K"]}
              speed={500}
              style={{ fontSize: "2em", display: "inline-block" }}
              repeat={Infinity}
            />
           
          </h5>

          <h3 className="tw-text-xl fw-medium text-uppercase">Web Developer</h3>

          <button className="tw-w-32"> My works </button>
        </div>

        <img 
          className="md:w-25 tw-w-72 tw-rounded-3xl md:tw-rounded-full"
          src="\src\assets\images\me.jfif"
          alt="my photo"
          
        />
      </div>

      {/* about section */}
      <div>
        <About />
      </div>

      {/* resume section */}

      <div className="tw-flex tw-flex-col  tw-p-10 bg-body-secondary">
        <h3 className="tw-font-semibold tw-mx-auto">Resume</h3>
        <div
        
          className="tw-flex md:tw-flex-wrap tw-justify-center tw-gap-20 flex-wrap tw-p-20 bg-body-secondary"
        >
          <Resume
            period="2017-2020"
            department="Computer Engineering"
            institute="Government Polytechnic College,kasaragod"
            para="Completed diploma in Computer Engineering"
          ></Resume>

          <Resume
            period="2010-2023"
            department="Computer Science and Engineering"
            institute="LBS College of Engineering ,kasaragod"
            para="Completed Bachelor of Technology in Computer Sceince and  Engineering"
          ></Resume>

          <Resume
            period="2023-2023"
            department="Front End Developer"
            institute="BRQ Glob Tech Pvt Ltd ,kasaragod"
            para="Worked as Front End Developer and gained knowledge in React.js"
          ></Resume>

          <Resume
            period="2023-2024"
            department="Software Engineer"
            institute="UL Technology Solution Pvt Ltd, UL Cyberpark "
            para="Currently working as a Software Engineer and contineusly gaining knolwdge in evolving technology"
          ></Resume>
        </div>

        <span className="tw-mx-auto">
          <button>Download Cv</button>
        </span>
      </div>

      {/* skills section */}

      <div className="tw-flex tw-flex-col tw-p-14 tw-gap-10 ">
        <h3 className="tw-mx-auto">My Skills</h3>
        <p className="tw-mx-auto tw-font-normal tw-text-xl">
          I have expertise in these skills and am continuously improving myself
          to expand my skill set
        </p>
        <div
          
          className="tw-flex tw-flex-col tw-items-center md:tw-flex-row tw-gap-20 tw-justify-evenly"
        >
          <Skills title="Front End " skills={skillSet1}></Skills>
          <Skills title="Back End" skills={skillSet2}></Skills>
        </div>
      </div>

      {/* project section  */}

      <div>
        <ProjectSection></ProjectSection>
      </div>

      {/* contact form  */}
      <div>
        <ContactForm></ContactForm>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
