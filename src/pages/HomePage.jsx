import React, { useEffect } from "react";
import "../App.css";
import Navbar from "../header/MyNavbar";
import About from "./sub-pages/about/About";
import Resume from "./sub-pages/resume/Resume";
import Skills from "./sub-pages/skills/Skills";
import ProjectSection from "./sub-pages/projects/ProjectSection";
import ContactForm from "./sub-pages/contact/ContactForm";
import Footer from "../footer/Footer";
import { TypeAnimation } from "react-type-animation";
import AOS from "aos";
import "aos/dist/aos.css";
import Button from "../common/button/Button";
export default function HomePage() {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  const SkillsArray = [
    {
      frontEnd: ["React.Js", "Tailwind CSS", "Bootstrap"],
      backEnd: ["ASP .Net Core", "ASP .Net Web API", "ASP .Net MVC"],
    },
  ];
  return (
    <>
      <Navbar></Navbar>
      <div  id="home" className=" tw-flex tw-flex-col  md:tw-flex-row tw-items-center lg:tw-gap-72 tw-bg-gray-800 tw-p-20 tw-gap-20 md:tw-justify-evenly  md:tw-items-center">
        <div className="tw-flex tw-items-center tw-flex-col md:tw-items-start tw-text-white">
          <p className="tw-text-lg fw-light text-uppercase">Hi There!</p>

          {/* animation typing  */}
          <h3 className="tw-text-4xl w-100 fw-bold text-uppercase">
           
            MADHURAJ K
          </h3>

          <h3 className="tw-text-xl fw-medium text-uppercase">
            
            <TypeAnimation
              sequence={["Web Developer"]}
              speed={500}
              style={{display: "inline-block" }}
              
            />
          </h3>
          <Button> My Works</Button>
          {/* <button className="tw-w-32"> My works </button> */}
        </div>

        <img
          className="md:w-25 tw-w-72 tw-rounded-3xl md:tw-rounded-full"
          src="\src\assets\images\me.jfif"
          alt="my photo"
        />
      </div>

      {/* about section */}
      <div data-aos="zoom-in-right">
        <About />
      </div>

      {/* resume section */}

      <div className="tw-flex tw-flex-col  tw-p-10 bg-body-secondary">
        <h3 className="tw-font-semibold tw-mx-auto">Resume</h3>
        <div className="tw-flex md:tw-flex-wrap tw-justify-center tw-gap-20 flex-wrap tw-p-20 bg-body-secondary">
          <Resume
            period="2017-2020"
            department="Computer Engineering"
            institute="Government Polytechnic College,kasaragod"
            para="Completed diploma in Computer Engineering"
          ></Resume>
        </div>

        <span className="tw-mx-auto">
          <Button>Download Cv</Button>
        </span>
      </div>

      {/* skills section */}

      <div className="tw-flex tw-flex-col tw-p-14 tw-gap-10 ">
        <h3 className="tw-mx-auto">My Skills</h3>
        <p className="tw-mx-auto tw-font-normal tw-text-xl">
          I have expertise in these skills and am continuously improving myself
          to expand my skill set
        </p>
        <div className="tw-flex tw-flex-col tw-items-center md:tw-flex-row tw-gap-20 tw-justify-evenly">
          {SkillsArray.map((skills, i) => (
            <div
              key={i}
              className=" tw-flex tw-flex-col md:tw-flex-row tw-gap-10"
            >
              <Skills>
                <h4>Front-End Skills</h4>
                <div>
                  {skills.frontEnd.map((skill, index) => (
                    <li className="text-danger" key={index}>
                      {skill}
                    </li>
                  ))}
                </div>
              </Skills>

              <Skills>
                <h4>Back-End Skills</h4>
                <div>
                  {skills.backEnd.map((skill, index) => (
                    <li className="text-danger" key={index}>
                      {skill}
                    </li>
                  ))}
                </div>
              </Skills>
            </div>
          ))}
        </div>
      </div>

      {/* project section  */}

      <div id="projects">
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
