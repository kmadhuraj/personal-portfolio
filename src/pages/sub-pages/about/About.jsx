import React from "react";
import me from "../../../assets/images/m2.jfif";
import Button from "../../../common/button/Button";

export default function About() {
  const onButtonClick = () => {
    const pdfUrl = "src/assets/resume/Madhuraj K_Resume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Madhuraj_resume.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
      <div
        style={{ backgroundColor: "" }}
        id="about"
        className="tw-flex  tw-flex-col md:tw-flex-row tw-gap-36 tw-items-center tw-m-20"
      >
        <img
          className="md:w-25 tw-w-72  tw-rounded-3xl md:tw-rounded-full"
          src={me}
          alt=""
        />
        <div className="tw-flex tw-flex-col">
          <h3>About me</h3>
          <p className="tw-font-normal tw-text-xl">
            Hi, I'm Madhuraj, a software engineer focused on web development,
            specializing in building responsive, user-friendly websites that
            work seamlessly across devices. I aim to create dynamic interfaces
            while ensuring performance and scalability.
          </p>

          <span className="tw-flex">
            <h6 className="tw-text-lg">Date of Birth:</h6>
            <p className="tw-text-lg">17-03-2000</p>
          </span>

          <span className="tw-flex ">
            <h6 className="tw-text-lg">Address:</h6>
            <p className="tw-text-lg">Kasaragod</p>
          </span>

          <span className="tw-flex ">
            <h6 className="tw-text-lg">Email:</h6>
            <p className="tw-text-lg">madhurajmadu693@gmail.com</p>
          </span>

          <span className="tw-flex ">
            <h6 className="tw-text-lg">Phone:</h6>
            <p className="tw-text-lg">9539163693</p>
          </span>
          <Button onClick={onButtonClick}>Download Cv</Button>
        </div>
      </div>
    </>
  );
}
