// src/components/VideoSection.jsx
import React, { useState } from "react";
import VideoControls from "./VideoControls";
import ChatPage from "./ChatPage";
import './VideoSection.css';

export default function VideoSection() {
  const [open, setOpen] = useState(false);
  return (
    <div className="head">
      {/* header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <img
              src='./dr.svg'
              alt="doctor"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="font-semibold">Dr. Emily Chen</div>
            <div className="text-xs text-gray-400">Medical Oncologist</div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="" onClick={()=>setOpen(!open)}>
            {/* camera icon */}
            <img src="/VideoIcon1.svg" alt="" />
          </button>

          <button className="">
            {/* phone icon */}
                <img src="/VideoIcon.svg" alt="" />
          </button>
        </div>
      </div>

      {/* main video area */}
      {
        open ? <div className=" pt-5 px-3 flex flex-col w-150">
        <div className="flex-1 rounded-xl ">
          <img
            src="/video.svg"
            alt="main"
            className="w-full h-full object-cover"
          />
        </div>

        {/* small 'Me' preview */}
        <div className="w-40 h-28 bg-white rounded-xl shadow-md mt-4 self-end overflow-hidden relative">
          <img
            src="/Grid.svg"
            alt="me"
            className="w-full h-full object-cover"
          />
          <div className="absolute left-2 bottom-2 bg-gray-800/70 text-white text-xs px-2 py-0.5 rounded">Me</div>
        </div>

        {/* bottom controls */}
        <div className="">
          <VideoControls />
        </div>
      </div> : <ChatPage />
      }
    </div>
  );
}
