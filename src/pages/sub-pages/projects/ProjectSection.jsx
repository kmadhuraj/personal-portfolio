import React from "react";
import ProjectCard from "../projects/ProjectCard";
import sms from "../../../assets/images/spam.png"
import invoice from "../../../assets/images/invoice.png";
import netflix from "../../../assets/images/netflix.png";
import student from "../../../assets/images/student.png"
export default function ProjectSection() {
  const projects = [
    {
      title: "Invoice Management System",
      description:
        "An Invoice Management System built using PHP and XAMPP, designed to streamline the process of generating and printing invoices for product purchases.",
      image:invoice
        
    },
    {
      title: "SMS Spam Detection System ",
      description:
        "An SMS Spam Detection System leveraging LSTM (Long Short-Term Memory) deep learning techniques, developed with the Flask framework.",
      image: sms
    },
    {
      title: "Netflix Clone",
      description:
        "A Netflix clone built with React, featuring a user-friendly interface to browse, search, and view movies and TV shows. ",
      image: netflix
    },
    {
      title: "Student Registration System ",
      description:
        "A Student Registration System developed with React and ASP.NET Web API, designed to manage student data efficiently.",
      image: student
    },
  ];
  return (
    <>
      {/* <section className=" "> */}
      <div className=" tw-flex tw-flex-col tw-items-center  tw-text-zinc-200">
        {/* <div className="tw-flex tw-flex-col tw-items-start">
          <h3 className=" tw-mb-8">Projects</h3>
        </div> */}

        <div className="tw-flex tw-flex-col md:tw-justify-center md:tw-flex-row tw-flex-wrap tw-gap-10 ">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
            />
          ))}
        </div>
      </div>
      {/* </section> */}
    </>
  );
}
