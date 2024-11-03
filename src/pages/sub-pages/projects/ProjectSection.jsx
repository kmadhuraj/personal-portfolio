import React from "react";
import ProjectCard from "../projects/ProjectCard";
export default function ProjectSection() {
  const projects = [
    {
      title: "Invoice Management System",
      description:
        "An Invoice Management System built using PHP and XAMPP, designed to streamline the process of generating and printing invoices for product purchases. The system allows users to create detailed, professional invoices, capturing essential transaction details to simplify billing and record-keeping",
      image:
        "https://plus.unsplash.com/premium_photo-1683865776032-07bf70b0add1?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "SMS Spam Detection System ",
      description:
        "An SMS Spam Detection System leveraging LSTM (Long Short-Term Memory) deep learning techniques, developed with the Flask framework. This system accurately identifies and filters out spam messages by learning from patterns in SMS content, ensuring effective message screening and enhanced communication security.",
      image: "src/assets/images/spam.png",
    },
    {
      title: "Netflix Clone",
      description:
        "A Netflix clone built with React, featuring a user-friendly interface to browse, search, and view movies and TV shows. The app replicates core streaming platform features with responsive design and smooth navigation for an engaging user experience.",
      image: "src/assets/images/netflix.png",
    },
    {
      title: "Student Registration System ",
      description:
        "A Student Registration System developed with React and ASP.NET Web API, designed to manage student data efficiently. The system allows administrators to register new students, update personal details, and delete records when necessary. It also supports the addition of student hobbies, creating a well-rounded profile for each individual. The integration between React and ASP.NET Web API ensures smooth data handling and a responsive, user-friendly interface, making it ideal for educational management applications.",
      image: "src/assets/images/student.jfif",
    },
  ];
  return (
    <>
      <section className="py-10 tw-bg-gray-100" >
        <div className="tw-container tw-flex tw-flex-col tw-items-center mx-auto px-5">
          <h2 className="tw-text-3xl tw-font-bold text-center tw-mb-8">
            Projects
          </h2>
          <div className="tw-flex tw-flex-col md:tw-justify-center md:tw-flex-row tw-flex-wrap tw-gap-20 ">
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
      </section>
    </>
  );
}
