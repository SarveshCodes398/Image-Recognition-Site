"use client";

import "@tensorflow/tfjs";
import * as cocoSsd from "@tensorflow-models/coco-ssd";
import { useEffect, useRef } from "react";

export default function Home() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const runDetection = () => {
    let webCampromise;

    const doesExist =
      navigator.mediaDevices &&
      navigator.mediaDevices.getUserMedia;

    if (!doesExist) {
      alert("Camera not found");
      return;
    }

    webCampromise = navigator.mediaDevices
      .getUserMedia({
        audio: false,
        video: { facingMode: "user" },
      })
      .then((stream) => {
        videoRef.current.srcObject = stream;

        return new Promise((resolve) => {
          videoRef.current.onloadedmetadata = () => {
            canvasRef.current.width = videoRef.current.videoWidth;
            canvasRef.current.height = videoRef.current.videoHeight;
            resolve();
          };
        });
      })
      .catch((err) => {
        console.error("Camera Error:", err);
      });

    const modelPromise = cocoSsd.load();

    Promise.all([modelPromise, webCampromise]).then((values) => {
      const model = values[0];

      detectFrame(videoRef.current, model);
    });
  };

  const detectFrame = (video, model) => {
    model.detect(video).then((predictions) => {
      renderPredictions(predictions);

      requestAnimationFrame(() => {
        detectFrame(video, model);
      });
    });
  };

  const renderPredictions = (predictions) => {
    const ctx = canvasRef.current.getContext("2d");

    ctx.clearRect(
      0,
      0,
      ctx.canvas.width,
      ctx.canvas.height
    );

    const font = "16px sans-serif";
    ctx.font = font;
    ctx.textBaseline = "top";

    predictions.forEach((prediction) => {
      const [x, y, width, height] = prediction.bbox;

      ctx.strokeStyle = "#818cf8";
      ctx.lineWidth = 4;
      ctx.strokeRect(x, y, width, height);

      ctx.fillStyle = "#818cf8";

      const textWidth = ctx.measureText(
        prediction.class
      ).width;

      ctx.fillRect(
        x,
        y,
        textWidth + 7,
        parseInt(font, 10) + 4
      );

      ctx.fillStyle = "#fff";
      ctx.fillText(prediction.class, x, y);
    });
  };

  useEffect(() => {
    runDetection();
  }, []);

  return (
    <>
      <div className="relative h-screen flex justify-center items-center bg-indigo-400">
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          className=" absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        />

        <canvas
          className=" absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          ref={canvasRef}
        />
      </div>
    </>
  );
}