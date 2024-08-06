import React from "react";
import My3DModelViewer from "./3DModel";

function InteractiveModel() {
  return (
    <div className="p-4 text-lg font-semibold bg-black text-white h-1/2">
      Enjoy this interactive 3D Model of the{" "}
      <span className="text-blue-400">
        Subaru 22b <span className="text-red-400">STi</span>
      </span>{" "}
      that I made
      <p className="text-sm">
        Scroll up or down to zoom in our out, drag the model to rotate
      </p>
      <My3DModelViewer modelPath="webCarModel.glb" />
    </div>
  );
}

export default InteractiveModel;
