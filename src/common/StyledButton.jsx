import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";
import {
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
export default function StyledButton({ data }) {
  return (
    <>
      <Link
        to={data.Link}
        className="tw-text-neutral-300 text-decoration-none tw-flex tw-gap-5 tw-justify-center tw-items-center tw-w-52 tw-h-10 tw-rounded-lg  tw-bg-neutral-900 hover:tw-bg-neutral-700 hover:tw-transition-all tw-delay-75"
      >
        <div className="tw-bg-zinc-700 tw-w-8 tw-h-8 tw-flex tw-justify-center tw-items-center tw-rounded-lg">
          <FontAwesomeIcon icon={data.Icon} color="white" size="x" />
        </div>
        <div className="tw-flex tw-flex-col tw-w-28">
          <p className="tw-text-xs tw-font-light tw-m-0">{data.Name}</p>
          <p className="tw-text-xs tw-font-light tw-m-0">Follow Me</p>
        </div>
        <FontAwesomeIcon className="" size="x" icon={faArrowAltCircleRight} />
      </Link>
    </>
  );
}
