import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
      <div className="bg-slate-900">
        <section id="contact" />
        <div className="container py-10 mx-auto">
          <div className="text-white font-bold text-4xl font-regular py-10">
            Contact
          </div>
          <div>
            <ul className="list-none text-white text-2xl">
              <li className="py-1">
                <a href="https://github.com/shanboss" target="_blank">
                  Github: Manu Shanbhog
                </a>
              </li>
              <li className="py-1">Email: manushanboss@gmail.com</li>
              <li className="py-1">
                <a
                  href="https://www.instagram.com/manny__phantom/"
                  target="_blank"
                >
                  Instagram: manny_phantom
                </a>
              </li>
              <li className="py-1">
                <a
                  href="https://www.youtube.com/channel/UCXkIsLKPg0ODl2YefWsZetg"
                  target="_blank"
                >
                  Youtube: Manu Shanbhog
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
