import React, { Component } from "react";

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
                <a href="https://github.com/shanboss" target="_blank">
                  Github: Manu Shanbhog
                </a>
              </li>
              <li className="p-1 hover:bg-slate-400 rounded-md max-w-sm">
                Email: manushanboss@gmail.com
              </li>
              <li className="p-1 hover:bg-slate-400 rounded-md max-w-sm">
                <a
                  href="https://www.instagram.com/manny__phantom/"
                  target="_blank"
                >
                  Instagram: manny_phantom
                </a>
              </li>
              <li className="p-1 hover:bg-slate-400 rounded-md max-w-sm">
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
