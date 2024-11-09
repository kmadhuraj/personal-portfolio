import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRight } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import dotnet from "../../../assets/images/aspdotnet.png";
import react from "../../../assets/images/reactpng.png";
import csharp from "../../../assets/images/c-sharp.png";
import js from "../../../assets/images/javascript-1.svg";
import git from "../../../assets/images/Git.png";
import tailwind from "../../../assets/images/Tailwind.png";
import bootstrap from "../../../assets/images/bootstrap-icons.png";
import { faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";
import { fa9, faSpinner } from "@fortawesome/free-solid-svg-icons";
export default function Skills({ data }) {
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
      <div
        data-aos="zoom-in-right"
        className="tw-flex tw-justify-evenly tw-items-center tw-box-border tw-h-16 tw-w-60 tw-rounded-2xl tw-bg-neutral-900 hover:tw-bg-neutral-800 hover:tw-transition-all tw-delay-75"
      >
        
        <div className="tw-w-12 tw-h-12 tw-flex tw-justify-center tw-items-center  tw-rounded-lg tw-bg-neutral-800">
          <img
            className="tw-w-10  tw-rounded-lg"
            src={data.symbol}
            alt="symbols"
          />
        </div>

        <div className="">
          <h5 className="tw-text-base tw-w-28 ">{data.skill}</h5>
        </div>
        
        {/* <FontAwesomeIcon className="fa-beat" size="2x" icon={faArrowAltCircleRight} /> */}
      </div>
    </>
  );
}
