import React from "react";
import ProjectCard from "../projects/ProjectCard";
export default function ProjectSection() {
  const projects = [
    {
      title: "Invoice Management System",
      description:
        "An Invoice Management System built using PHP and XAMPP, designed to streamline the process of generating and printing invoices for product purchases.",
      image:
        "https://plus.unsplash.com/premium_photo-1683865776032-07bf70b0add1?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "SMS Spam Detection System ",
      description:
        "An SMS Spam Detection System leveraging LSTM (Long Short-Term Memory) deep learning techniques, developed with the Flask framework.",
      image: "src/assets/images/spam.png",
    },
    {
      title: "Netflix Clone",
      description:
        "A Netflix clone built with React, featuring a user-friendly interface to browse, search, and view movies and TV shows. ",
      image: "src/assets/images/netflix.png",
    },
    {
      title: "Student Registration System ",
      description:
        "A Student Registration System developed with React and ASP.NET Web API, designed to manage student data efficiently.",
      image: "src/assets/images/student.jfif",
    },
  ];
  return (
    <>
      {/* <section className=" "> */}
        <div className=" tw-flex tw-flex-col tw-items-center  tw-text-zinc-200">
          <h3 className=" tw-mb-8">
            Projects
          </h3>
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
