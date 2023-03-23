import React from 'react';
import { BsGithub, BsLinkedin, BsTelegram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a
          href="https://www.linkedin.com/in/mykhailo-zhuk-8720a8203/"
          target="_blank"
          rel="noreferrer">
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a href="https://t.me/Zhuk_Mykhailo" target="_blank" rel="noreferrer">
          <BsTelegram />
        </a>
      </div>
      <div>
        <a
          href="https://www.facebook.com/profile.php?id=100007715086297"
          target="_blank"
          rel="noreferrer">
          <FaFacebookF />
        </a>
      </div>
      <div>
        <a href="https://github.com/Mykhailo-Zhuk/" target="_blank" rel="noreferrer">
          <BsGithub />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
