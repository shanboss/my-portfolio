import React from "react";
import My3DModelViewer from "./3DModel";

function InteractiveModel() {
  return (
    <>
      <div className="text-white py-4 px-32 mb-4 font-bold text-4xl">
        Enjoy this interactive 3D Model of the{" "}
        <span className="text-blue-400">
          Subaru 22b <span className="text-pink-600">STi</span>
        </span>{" "}
        that I made
        <p className="text-sm font-semibold">
          Scroll up or down to zoom in or out, drag the model to rotate
        </p>
      </div>
      <div className="flex justify-center items-center h-screen">
        <div className="h-screen w-5/6 border rounded-md border-gray-500">
          <My3DModelViewer modelPath="webCarModel.glb" />
        </div>
      </div>
    </>
  );
}

export default InteractiveModel;
