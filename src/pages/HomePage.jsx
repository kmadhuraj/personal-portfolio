import React, { useEffect, useRef } from "react";
import "../App.css";
import Navbar from "../header/MyNavbar";
import About from "./sub-pages/about/About";
import Resume from "./sub-pages/resume/Resume";
import ProjectSection from "./sub-pages/projects/ProjectSection";
import ContactForm from "./sub-pages/contact/ContactForm";
import Skills from "./sub-pages/skills/Skills";
import Footer from "../footer/Footer";
import { TypeAnimation } from "react-type-animation";
import AOS from "aos";
import "aos/dist/aos.css";
import Button from "../common/button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
//images for skills
import dotnet from "../assets/images/aspdotnet.png";
import react from "../assets/images/reactpng.png";
import csharp from "../assets/images/c-sharp.png";
import js from "../assets/images/javascript-1.svg";
import git from "../assets/images/Git.png";
import tailwind from "../assets/images/Tailwind.png";
import bootstrap from "../assets/images/bootstrap-icons.png";
import myImg from "./../assets/images/me.jfif"
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


export default function HomePage() {
  //useref is used to access the project section
  const sectionRef = useRef(null);

  // const navigate = useNavigate();
  useEffect(() => {
    AOS.init({
      // once: true,
      // disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  const SkillsArray = [
    {
      skill: "ASP.NET Core",
      symbol: dotnet,
    },
    {
      skill: "React.js",
      symbol: react,
    },
    {
      skill: "C#",
      symbol: csharp,
    },
    {
      skill: "Javascript",
      symbol: js,
    },
    {
      skill: "Tailwind CSS",
      symbol: tailwind,
    },
    {
      skill: "Bootstrap",
      symbol: bootstrap,
    },
    {
      skill: "Git",
      symbol: git,
    },
  ];

  const handleButtonNavigate = () => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar></Navbar>
      <div
        style={{
          backgroundColor: "#0f0f0f",
          fontFamily: "Space Grotesk,serif",
          fontWeight: "500",
        }}
        className="tw-text-zinc-200 tw-flex tw-flex-col tw-items-center tw-gap-20 "
      >
        <div className="tw-flex tw-justify-center ">
          <div
            id="home"
            className=" tw-flex tw-flex-col tw-gap-5 md:tw-flex-row tw-items-center  md:tw-justify-evenly  md:tw-items-center"
          >
            <div className="tw-flex tw-items-center tw-flex-col tw-w-72 md:tw-w-96  md:tw-items-start tw-text-zinc-200">
              {/* animation typing  */}
              <div className=" tw-flex-col">
                <p className="tw-text-lg fw-light text-uppercase">Hi There!</p>
                <h3 className="tw-text-2xl w-100 fw-bold text-uppercase">
                  MADHURAJ K
                </h3>
                <p>
                  Enthusiastic software engineer with over a year of experience
                  in ASP.NET Core and React.js. Skilled in developing
                  user-friendly web applications with a focus on performance and
                  a seamless user experience.
                </p>
              </div>

              <div className="tw-flex-col tw-flex md:tw-flex-row tw-gap-6">
                <Link to="mailto:madhurajofficail7@gmail.com">
                  <Button> Email Me </Button>
                </Link>
                <Button onClick={handleButtonNavigate}> My Works</Button>
              </div>
            </div>

            <div className="tw-w-80 tw-flex tw-justify-center">
              <img
                className="md:tw-w-60 tw-w-72 tw-rounded-3xl md:tw-rounded-3xl"
                src={myImg}
                alt="my photo"
              />
            </div>
          </div>
        </div>

        {/* about section */}
        {/* <div style={{ backgroundColor: "" }} data-aos="zoom-in-right">
          <About />
        </div> */}

        {/* resume section */}

        <div className="tw-flex tw-flex-col tw-items-center  container tw-text-zinc-200">
          <div className="tw-flex tw-flex-col tw-w-72 sm:tw-w-auto tw-items-start md:tw-items-center">
            <h3 className="tw-font-semibold ">My Experiences</h3>
            <p>
              Navigating diverse environments with adaptability and expertise
              for holistic solutions.
            </p>
          </div>

          <div className="tw-flex md:tw-flex-wrap tw-justify-center  flex-wrap ">
            <Resume />
          </div>
        </div>

        {/* skills section */}

        <div className="container ">
          <div className="tw-flex tw-text-md tw-flex-col tw-gap-10 tw-items-center tw-text-zinc-200 ">
            <div className="tw-flex tw-flex-col tw-w-72 sm:tw-w-auto tw-items-start md:tw-items-center">
            {/* tw-flex tw-flex-col tw-w-72 tw-items-start md:tw-items-center */}
                         
              <h3 className="">My Skills</h3>
              <p className="tw-mx-auto tw-font-normal">
                I have expertise in these skills and am continuously improving
                myself to expand my skill set
              </p>
            </div>

            <div className="tw-grid lg:tw-grid-cols-3 md:tw-grid-cols-2 tw-gap-5 md:tw-gap-5 tw-place-self-center ">
              {SkillsArray.map((skill, index) => (
                <Skills key={index} data={skill} />
              ))}
            </div>
          </div>
        </div>

        {/* project section  */}

        <div className="container tw-flex tw-flex-col tw-items-center" ref={sectionRef} id="projects">
        {/* tw-flex tw-flex-col tw-w-72 sm:tw-w-auto tw-items-start md:tw-items-center */}
          <div className="tw-flex tw-flex-col tw-w-72 sm:tw-w-auto tw-items-start md:tw-items-center">
            <h3 className=" tw-mb-8">Projects</h3>
            <p>
              Explore some of my recent projects that showcase my skills and
              experience across various technologies and frameworks.
            </p>
          </div>
          <ProjectSection></ProjectSection>
        </div>

        {/* contact form  */}
        <div className="tw-flex tw-flex-col tw-items-center container">
          <h2>Contact Me</h2>
          <ContactForm></ContactForm>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}
