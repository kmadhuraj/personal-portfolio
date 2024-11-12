import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ults from "../../../assets/images/ults.png";
import brq from "../../../assets/images/brq.png";
import "../../../App.css"
export default function Resume({ period, department, institute, para }) {

  const myStyle={
   screen
  }
  const experiences = [
    {
      jobTitle: "Software Engineer",
      company: "UL Technology Solutions",
      date: "Jan 2023 - Present",
      roleDescription:
        "Responsible for developing and maintaining web applications.",
      responsibilities: [
        "Developed reusable components in React to enhance frontend efficiency.",
        "Implemented CI/CD pipelines in Azure DevOps.",
        "Collaborated with cross-functional teams to design new features.",
      ],
      technologies: ["React", "ASP.NET Core", "Azure DevOps", "Git"],
      image: ults,
    },
    {
      jobTitle: "Intern",
      company: "BRQ Glob Tech Pvt Ltd.",
      date: "June 2022 - Dec 2022",
      roleDescription:
        "Assisted in the development of RESTful APIs and frontend interfaces.",
      responsibilities: [
        "Developed API endpoints in ASP.NET Web API.",
        "Created UI components with React and Bootstrap.",
        "Performed code reviews and tested applications for bugs.",
      ],
      technologies: ["ASP.NET Web API", "React", "Bootstrap", "Git"],
      image: brq,
    },
  ];

  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <>
      <div  >
        <section className="tw-py-8  ">
          {experiences.map((experience, index) => (
            //this is the experience card -- start

            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              key={index}
              style={{ backgroundColor: "#0a0a0b" }}
              className="tw-flex tw-flex-col tw-p-6 tw-text-zinc-200 tw-gap-6 tw-mb-6  tw-rounded-lg"
            >
              <div className="tw-flex tw-flex-col md:tw-flex-row tw-items-center tw-justify-between">
                <div className="tw-flex tw-gap-3 tw-items-center">
                  <img
                    className="tw-w-10 tw-h-10 tw-rounded-xl"
                    src={experience.image}
                    alt="company-img"
                  />
                  <p>{experience.company}</p>
                </div>

                <p>{experience.date}</p>
              </div>

              <div
                // style={{ width: "700px" }}
                
                className="responsive tw-flex tw-bg-black tw-flex-col   tw-justify-center tw-text-zinc-200 tw-h-auto tw-rounded-md tw-p-5"
              >

                <h5 className="">{experience.jobTitle}</h5>
                <p className="">{experience.responsibilities}</p>
              </div>
            </div>
          ))}
          {/* end */}
        </section>
      </div>
    </>
  );
}
