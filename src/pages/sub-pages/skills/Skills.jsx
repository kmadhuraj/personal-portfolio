import React from "react";
import Skill from "./Skill";
export default function Skills({ title, skills }) {
  return (
    <>
      <div className="tw-box-border tw-bg-zinc-400 tw-w-96 tw-rounded-lg">
        <h5 className="text-center">{title}</h5>
        <div className="tw-flex tw-flex-wrap justify-content-center p-4 gap-4 ">
          {skills.map((skill, index) => (
            <Skill key={index} skill={skill} />
          ))}
        </div>
      </div>
    </>
  );
}
