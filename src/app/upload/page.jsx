"use client";

import React, { useState } from "react";
import * as mobilenet from "@tensorflow-models/mobilenet";
import "@tensorflow/tfjs";

const ImageUploader = () => {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [predictions, setPredictions] = useState([]);

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const imgUrl = URL.createObjectURL(file);

      setImage(imgUrl);
      setPredictions([]);
    }
  };

  const classifyImage = async () => {
    try {
      setLoading(true);

      const imgElement = document.getElementById("uploaded-image");

      const model = await mobilenet.load();

      const results = await model.classify(imgElement);

      setPredictions(results);
    } catch (error) {
      console.error("Classification Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-indigo-400 w-full h-screen flex flex-col gap-4 justify-center items-center">
      <label htmlFor="choose-image">
        <div className="border-2 border-dashed rounded-lg px-5 py-2 cursor-pointer">
          {image ? "Change image" : "Choose an Image"}
        </div>

        <input
          id="choose-image"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          hidden
        />
      </label>

      {image && (
        <div className="flex flex-col items-center gap-4">
          <img
            id="uploaded-image"
            src={image}
            alt="Uploaded"
            className="w-96 rounded-xl shadow-lg"
          />

          <button
            className="px-3 py-2 bg-gray-300/10 rounded-lg"
            onClick={classifyImage}
            disabled={loading}
          >
            {loading ? "Analyzing..." : "Classify Image"}
          </button>
        </div>
      )}

      {predictions.length > 0 && (
        <div className="mt-2">
          <h3 className="font-bold text-lg mb-2">Predictions:</h3>

          <ul className="space-y-1">
            {predictions.map((prediction, index) => (
              <li key={index}>
                {prediction.className}:{" "}
                {(prediction.probability * 100).toFixed(2)}%
              </li>
            ))}
          </ul>
        </div>
      )}
    </main>
  );
};

export default ImageUploader;