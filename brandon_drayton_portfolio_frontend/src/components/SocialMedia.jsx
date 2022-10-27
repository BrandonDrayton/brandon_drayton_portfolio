import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { CgFileDocument } from "react-icons/cg";
const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a
          href="https://www.linkedin.com/in/brandondrayton/"
          rel="noreferrer"
          target="_blank"
        >
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a
          href="https://github.com/BrandonDrayton"
          rel="noreferrer"
          target="_blank"
        >
          <BsGithub />
        </a>
      </div>
      <div>
        <a
          href="https://resume.io/r/VEyM54BHG"
          rel="noreferrer"
          target="_blank"
        >
          <CgFileDocument />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
