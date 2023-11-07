// Content.js

import React from "react";

const Content = () => {
  return (
    <div className="bg-neutral-950">
      <div className="container py-10 mx-auto">
        <div className="text-white text-5xl font-regular ">Hi, my name is</div>
        <div className="text-white text-5xl font-bold">
          Manu<span className="animate-blink">|</span>
        </div>
        <div className="text-white text-2xl font-regular ml-20 mt-10">
          I can help you with -
        </div>
        // This is the list
        <div className="text-white text-base font-mono my-8 mx-24">
          <ul class="list-disc">
            <li className="my-5">
              <div className="max-w-md p-1 rounded-lg hover:bg-slate-800">
                Building and designing{" "}
                <span className="font-semibold">Websites</span>, just like this
                one
              </div>
            </li>
            <li className="my-5">
              <div className="max-w-md p-1 rounded-lg hover:bg-slate-800">
                Build iOS and Android Apps in{" "}
                <span className="font-semibold">Swift</span> and{" "}
                <span className="font-semibold">Flutter</span>
              </div>
            </li>
            <li className="my-5">
              <div className="max-w-md p-1 rounded-lg hover:bg-slate-800">
                Make some art with your car!
              </div>
            </li>
          </ul>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Content;
