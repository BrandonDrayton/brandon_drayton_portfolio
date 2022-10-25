import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { CgFileDocument } from "react-icons/cg";
const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <BsLinkedin />
      </div>
      <div>
        <BsGithub />
      </div>
      <div>
        <CgFileDocument />
      </div>
    </div>
  );
};

export default SocialMedia;
