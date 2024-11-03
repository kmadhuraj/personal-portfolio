import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Skills({ children }) {
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
        className="tw-box-border tw-bg-zinc-400 tw-w-80 tw-rounded-lg"
      >
        <h5 className="text-center"></h5>
        <div className="tw-flex-col   tw-flex-wrap tw-items-center tw-p-6 gap-4 ">
          {children}
        </div>
      </div>
    </>
  );
}
