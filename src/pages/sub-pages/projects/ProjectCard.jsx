import { useEffect } from "react";
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function ProjectCard({ title, description, image }) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);
  // const [showMore, setShowMore] = useState(false);
  return (
    // style={{backgroundImage:`url(${image})`}}
    // style={{height:'500px'}}
    <div
      data-aos="zoom-in-right"
      className="tw-rounded-xl tw-w-72  tw-bg-zinc-400 "
    >
      <div className="tw-bg-transparent tw-shadow-lg tw-rounded-2xl tw-overflow-hidden">
        <div className="tw-flex tw-justify-center tw-items-center tw-p-10">
          <img
            src={image}
            alt={title}
            className="tw-object-cover tw-w-72 tw-h-48 tw-rounded-xl "
          />
        </div>
        <div className="tw-p-5">
          <h3 className="tw-text-xl tw-font-semibold mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
          <button className="mt-4 text-blue-500 tw-font-medium tw-hover:text-blue-700">
            GitHub
          </button>
          {/* <button
          className="tw-bg-blue-500 tw-text-white tw-py-1 tw-px-4 tw-rounded-lg tw-mt-2"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? 'Show Less' : 'See More'}
        </button> */}
        </div>
      </div>
    </div>
  );
}
