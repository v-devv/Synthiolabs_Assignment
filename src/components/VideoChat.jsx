// src/components/VideoChat.jsx
import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import VideoSection from "./VideoSection";

export default function VideoChat() {
  return (
    <div className="">
      <Navbar />

      <div className="sidebar-main">
        <div className=" shadow-sm overflow-hidden flex">
          <Sidebar />

          <main className="flex-1">
            <VideoSection />
          </main>
        </div>
      </div>
    </div>
  );
}
