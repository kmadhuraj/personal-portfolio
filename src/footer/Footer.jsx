import React from "react";
import { Link } from "react-scroll";
import Clock from "../common/Clock";
export default function Footer() {
  return (
    <>
      <div className="tw-my-10 ">
        <div className="">
          <ul className="tw-flex tw-gap-5 tw-justify-center tw-flex-wrap tw-p-0">
            <Link
              className="tw-text-slate-100 tw-no-underline"
              to="home"
              spy={true}
              smooth={true}
              offset={50}
              duration={100}
            >
              Home
            </Link>
            <Link
              className="nav-link"
              to="experince"
              spy={true}
              smooth={true}
              offset={50}
              duration={100}
            >
              Experience
            </Link>

            <Link
              className="nav-link"
              to="skill"
              spy={true}
              smooth={true}
              offset={50}
              duration={100}
            >
              Skills
            </Link>
            <Link
              className="tw-text-slate-100 tw-no-underline"
              to="projects"
              spy={true}
              smooth={true}
              offset={50}
              duration={100}
            >
              My works
            </Link>
            <Link
              className="tw-text-slate-100 tw-no-underline"
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={100}
            >
              Contact Me
            </Link>
          </ul>
        </div>
        <div>
          <Clock />
        </div>
        <div className="tw-p-5 tw-text-center  tw-h-10">
          <span>@2024 Madhuraj K . All Rights Reserved </span>
        </div>
      </div>
    </>
  );
}
