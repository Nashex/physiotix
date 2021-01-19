import React, { useRef, useState } from 'react'
import * as posenet from "@tensorflow-models/posenet";
import { drawKeypoints, drawSkeleton } from "../Components/utilities.js"
import Webcam from 'react-webcam';
// import {Button} from "@material-ui/core"
import "./Workout.css"

function Workout() {

    // const [camOn, setCam] = useState(true);

    const camOn = true;

    // const toggleCam = e => {
    //     e.preventDefault();
    //     setCam(!camOn);
    // }

    const webcamRef = useRef(null);
    const canvasRef = useRef(null);

    const runPosenet = async () => {
        const net = await posenet.load({
            inputResolution:{width:640, height: 480},
            scale: .4
        });

        setInterval(() => {
            detect(net)
        }, 100);

    }

    const detect = async (net) => {
        if (typeof webcamRef.current !== "undefined" && webcamRef.current !== null && webcamRef.current.video.readyState === 4) {
            const video = webcamRef.current.video;
            const videoWidth = webcamRef.current.video.videoWidth;
            const videoHeight = webcamRef.current.video.videoHeight;

            webcamRef.current.video.width = videoWidth;
            webcamRef.current.video.height = videoHeight;

            const pose = await net.estimateSinglePose(video);
            console.log(pose);

            drawCanvas(pose, video, videoWidth, videoHeight, canvasRef);

        }
    }

    const drawCanvas = (pose, video, videoWidth, videoHeight, canvas) => {
        const ctx = canvas.current.getContext("2d");
        canvas.current.width = videoWidth;
        canvas.current.height = videoHeight;

        drawKeypoints(pose["keypoints"], .4, ctx);
        drawSkeleton(pose["keypoints"], .4, ctx);
    }

    if (camOn) {
        runPosenet();
    }

    return (
        <div className="workout">
            <div className = "workout__header">
                <h2>
                    Workout
                </h2>
            </div>

            {camOn && <Webcam className="workout__webcam" ref = {webcamRef}/>}
            {camOn && <canvas className="workout__vision" ref={canvasRef}/>}
        </div>
    )
}

export default Workout
