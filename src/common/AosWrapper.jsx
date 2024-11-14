import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

export default function AosWrapper({ children }) {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once:false,
      easing:"ease-in-back",
      disable: false, // Enable animations on smaller screens
    });

    
  }, []);

  return <div>{children}</div>;
}
