import React from "react";

export default function Skill({ skill }) {
  return (
    <span className="tw-box-content tw-rounded-2xl tw-text-center p-1 tw-w-28 hover:tw-transition-colors tw-bg-white tw-transition-colors tw-duration-300 hover:tw-bg-violet-600 hover:tw-rounded-sm hover:tw-text-white">
      {skill}
    </span>
    
  );
}
