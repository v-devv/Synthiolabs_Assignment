// src/components/ChatItem.jsx
import React from "react";
import './Chatitem.css';

export default function ChatItem({ avatar, name, subtitle, active }) {
  return (
    <div
      className={`item flex items-center gap-3 p-3 rounded-xl cursor-pointer ${
        active ? " active-item" : "none"
      }`}
    >
      
      <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
        {avatar ? (
          <img src={avatar} alt={name} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-sm text-gray-600">A</div>
        )}
      </div>

      <div className="flex-1">
        <div className="text-sm font-medium">{name}</div>
        <div className="text-xs text-gray-400 truncate">{subtitle}</div>
      </div>
    </div>
  );
}
