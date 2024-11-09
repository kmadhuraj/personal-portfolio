import { useEffect } from "react";
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Button from "../../../common/button/Button";
export default function ProjectCard({ title, description, image }) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <div
      data-aos="zoom-in-right"
      style={{ width: "49rem" }}
      className="tw-rounded-xl tw-h-60  tw-text-zinc-200  tw-bg-neutral-900 tw-text tw-flex "
    >
      <div className="tw-flex tw-justify-center tw-items-center tw-p-3">
        <img
          src={image}
          alt={title}
          className="tw-object-cover tw-w-72 tw-h-52 tw-rounded-xl "
        />
      </div>

      <div className="tw-bg-transparent tw-shadow-lg tw-rounded-2xl tw-overflow-hidden">
        <div className="tw-p-3">
          <h5 className="  mb-2">{title}</h5>
          {/* horizontal line */}
          <div
            style={{ height: "1px" }}
            className="tw-border tw-bg-zinc-600 tw-w-auto"
          ></div>
          {/* horizontal line */}
          <p className="text-gray-">{description}</p>
          {/* horizontal line */}
          <div
            style={{ height: "1px" }}
            className="tw-border tw-bg-zinc-600 tw-w-auto"
          ></div>
          {/* horizontal line */}
          <button className="mt-4 tw-rounded-lg tw-w-28 tw-h-10 tw-border tw-text-blue-500 tw-font-medium hover:tw-bg-transparent hover:tw-border-red-500 hover:tw-text-blue-700">
            GitHub
          </button>
        </div>
      </div>
    </div>
  );
}
