import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default class Contact extends Component {
  render() {
    return (
      <div className="bg-slate-900">
        <section id="contact" />
        <div className="container pb-5 mx-auto ">
          <div className="text-white font-bold text-4xl font-regular py-5">
            Contact
          </div>
          <div>
            <ul className="font-mono list-none text-white text-2xl">
              <li className="p-1 hover:bg-slate-400 rounded-md max-w-sm">
                <FontAwesomeIcon icon={faEnvelope} size="1x" className="mr-2" />
                <a href="mailto:manushanboss@gmail.com">
                  manushanboss@gmail.com
                </a>
              </li>
              <li className="p-1 hover:bg-slate-400 rounded-md max-w-sm">
                <FontAwesomeIcon icon={faGithub} size="1x" className="mr-2" />

                <a href="https://github.com/shanboss" target="_blank">
                  Manu Shanbhog
                </a>
              </li>

              <li className="p-1 hover:bg-slate-400 rounded-md max-w-sm">
                <FontAwesomeIcon
                  icon={faInstagram}
                  size="1x"
                  className="mr-2"
                />
                <a
                  href="https://www.instagram.com/manny__phantom/"
                  target="_blank"
                >
                  manny_phantom
                </a>
              </li>
              <li className="p-1 hover:bg-slate-400 rounded-md max-w-sm">
                <FontAwesomeIcon icon={faYoutube} size="1x" className="mr-2" />
                <a
                  href="https://www.youtube.com/channel/UCXkIsLKPg0ODl2YefWsZetg"
                  target="_blank"
                >
                  Manu Shanbhog
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
