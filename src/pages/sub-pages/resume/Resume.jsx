import React from "react";

export default function Resume({ period, department, institute, para }) {
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
    },
    {
      jobTitle: "Intern",
      company: "Tech Innovations Ltd.",
      date: "June 2022 - Dec 2022",
      roleDescription:
        "Assisted in the development of RESTful APIs and frontend interfaces.",
      responsibilities: [
        "Developed API endpoints in ASP.NET Web API.",
        "Created UI components with React and Bootstrap.",
        "Performed code reviews and tested applications for bugs.",
      ],
      technologies: ["ASP.NET Web API", "React", "Bootstrap", "Git"],
    },
  ];
  return (
    <>
      {/* <div className='tw-flex tw-flex-col tw-mx-auto tw-p-10 tw-box-content tw-w-96 tw-rounded-lg tw-gap-3 tw-bg-stone-400'>
            <h4>{period}</h4>
            <h4>{department} </h4>
            <h6>{institute}</h6>
            <p>{para} </p>

        </div> */}

      <div>
        <section className="tw-py-8 tw-bg-gray-100">
          <h2 className="tw-text-center tw-text-3xl tw-font-bold tw-text-gray-800 tw-mb-8">
            Work Experience
          </h2>
          <div className="tw-flex tw-flex-wrap tw-gap-6 tw-justify-center">
            {experiences.map((experience, index) => (
              <div
                className="tw-w-72 tw-bg-white tw-p-6 tw-rounded-lg tw-shadow-md"
                key={index}
              >
                <h3 className="tw-text-lg tw-font-bold tw-text-blue-600">
                  {experience.jobTitle}
                </h3>
                <h4 className="tw-text-sm tw-font-semibold tw-text-gray-600">
                  {experience.company} |{" "}
                  <span className="tw-text-xs tw-text-gray-500">
                    {experience.date}
                  </span>
                </h4>
                <p className="tw-my-4 tw-text-gray-700">
                  {experience.roleDescription}
                </p>
                <ul className="tw-list-disc tw-pl-5 tw-space-y-1 tw-text-gray-600">
                  {experience.responsibilities.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <div className="tw-mt-4 tw-text-sm tw-text-gray-800">
                  <strong>Technologies:</strong>{" "}
                  {experience.technologies.join(", ")}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
