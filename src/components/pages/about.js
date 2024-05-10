import React, { useState } from "react";
import VideoPlayer from "../videoPlayer";
import "./index.css";

/* eslint no-mixed-spaces-and-tabs: "error" */
function About() {
  const [isDisplayed, setIsDisplayed] = useState(false);
  function handleClick() {
    setIsDisplayed(!isDisplayed);
  }
  return (
    <>
      <div className="px-11 bg-brown">
        <div className="flex flex-col items-center pt-40">
          <h3 className="text-3xl text-green-600 hover:underline">about us</h3>
          <h2 className="text-3xl pb-14 pt-6 font-serif w-58 font-bold">
            A NEW WAY FOR SUSTAINABLE AGRICULTURE
          </h2>
        </div>
        <div className="flex-col _wide gap-16">
          <p className="prg bg-slate-200  rounded w-34 px-4 py-4 mb-16">
            Metamorphosis Fresh Fields is a forward-thinking agricultural
            education company and livestock producer, offering cutting-edge
            online learning and innovative farming solutions. We provide
            high-quality, accessible education to farmers worldwide, empowering
            them to improve their techniques and maximize yields. In addition,
            we are dedicated to responsible livestock production, specializing
            in egg-laying hens and pig farming. Our goal is to create a
            sustainable, eco-friendly future for the agriculture
            industry and the planet.
            {/* <div className={`flex ${isDisplayed ? "" : "hidden"}`}>
              disease control, irrigation management, and financial services. We
              also partner with other companies in the agriculture industry,
              such as seed and fertilizer companies, to offer even more
              comprehensive services to farmers. Nicetyfarm Technology is built
              on advanced technologies like machine learning and AI which
              enables the system to analyze data and provide farmers with even
              more accurate and actionable insights. The system also learns over
              time and makes better predictions and recommendations, making it
              more valuable to farmers. With our technology, farmers can monitor
              their farms remotely, through cameras or other sensors, helping
              them to prevent theft and to make more informed decisions about
              their crops and animals. We also make the system accessible to
              non-literate farmers by providing voice-enabled interfaces and
              simple, easy-to-understand visualizations. At Nicetyfarm, we are
              dedicated to empowering small and medium-scale farmers, not only
              to improve theirlivelihoods but also to strengthen the overall
              food system.
            </div> */}
            <br />
            {/* <button
              onClick={handleClick}
              type="button"
              className="bg-green-700 w-24 h-6 text-white text-center rounded-full px-2 cursor-pointer md:w-28 lg:w-32 lg:h-8 "
            >
              read more
            </button> */}
          </p>
          <div>
            <VideoPlayer />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
