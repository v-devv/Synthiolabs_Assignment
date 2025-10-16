import React from "react";
import './ChatPage.css';
import { useState } from "react";
import { Copy, ThumbsUp, ThumbsDown, RefreshCcw } from "lucide-react";

export default function ChatMessages() {
  const [messages] = useState([
    {
      sender: "Dr. Emily Chen",
      role: "Medical Oncologist",
      text: `For patients who are NPO (nothing by mouth) prior to a procedure or may have GI prep that could impact absorption, there isn’t a specific adjustment required for Zepzelca, since it’s administered as an intravenous infusion. Standard dosing can typically proceed as scheduled, but if the procedure timing overlaps with an infusion day, it’s generally recommended to coordinate with the GI and infusion teams to avoid conflicts.

If the patient is experiencing any significant changes in renal or hepatic function related to the procedure or prep, additional monitoring or dose adjustments may be warranted, in line with the prescribing information.`,
      type: "received",
    },
    {
      sender: "You",
      text: "What roles do regulatory affairs specialists play in drug approval?",
      type: "sent",
    },
  ]);

  const handleIconClick = (action, msg) => {
    if (action === "copy") navigator.clipboard.writeText(msg.text);
    console.log(`Action: ${action} on message:`, msg);
  };

  return (
   <>
    <div className="flex flex-col h-full bg-gray-50 p-6 overflow-y-auto">
      {messages.map((msg, i) => (
        <div
          key={i}
          className={`mb-6 ${
            msg.type === "sent" ? "text-right" : "text-left"
          }`}
        >
          {/* Message Bubble */}
          <div
            className={`inline-block p-4 rounded-2xl text-sm max-w-3xl leading-relaxed ${
              msg.type === "sent"
                ? "bg-blue-600 text-white rounded-br-none"
                : "bg-white text-gray-900 border border-gray-200 rounded-bl-none"
            }`}
          >
            <p>{msg.text}</p>
          </div>

          {/* Icons below message */}
          <div
            className={`flex gap-4 mt-2 text-gray-500 text-sm ${
              msg.type === "sent" ? "justify-end" : "justify-start"
            }`}
          >
            <button
              className="hover:text-blue-600"
              onClick={() => handleIconClick("copy", msg)}
            >
              <Copy size={16} />
            </button>
            <button
              className="hover:text-green-600"
              onClick={() => handleIconClick("like", msg)}
            >
              <ThumbsUp size={16} />
            </button>
            <button
              className="hover:text-red-600"
              onClick={() => handleIconClick("dislike", msg)}
            >
              <ThumbsDown size={16} />
            </button>
            <button
              className="hover:text-blue-500"
              onClick={() => handleIconClick("refresh", msg)}
            >
              <RefreshCcw size={16} />
            </button>
          </div>
        </div>
      ))}
    </div>
   <div className="input-div p-3 rounded-2xl shadow-md bg-white">
      <input
        type="text"
        className="input-text w-full focus:outline-none bg-transparent 
                   transition-all duration-300 ease-out focus:scale-[1.02]"
        placeholder="Type something..."
      />
      <div className="flex items-center justify-between mt-2">
        <button className=""> <img src='./Icon_Button.svg' alt="" /></button>
        <button className=""><img src='./Arrow.svg' alt="" /> </button>
      </div>
    </div>
    
    
    </>
  );
}
