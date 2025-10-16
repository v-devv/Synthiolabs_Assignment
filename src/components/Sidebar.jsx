// src/components/Sidebar.jsx
import React from "react";
import ChatItem from "./ChatItem";
import './Sidebar.css';

const chats = [
  { name: "Dr. Emily Chen", subtitle: "What roles do regulatory affairs speciali...", avatar: "/dr.svg" },
  { name: "Sarah Patel", subtitle: "How do clinical research associates con..." },
  { name: "Rajiv Kumar", subtitle: "What is the importance of pharmacovigil..." },
  { name: "Linda Garcia", subtitle: "How do medical science liaisons bridge..." },
  { name: "Dr. Sarah Khan", subtitle: "What are the latest advancements in dr..." },
  { name: "Emily Thompson", subtitle: "How do regulatory agencies impact phar..." },
  { name: "David Li", subtitle: "What role do clinical trials play in the ap..." },
  { name: "Emma Chen", subtitle: "How are patients selected for clinical tri..." },
];

export default function Sidebar() {
  return (
    <aside className="sidebar px-6">
      <div className="chats">
          <p>Chats</p>
          <p><img src="/NotePencil.svg" alt="" /></p>
      
      </div>

      <div className="space-y-3">
        {chats.map((c, i) => (
          <ChatItem
            key={i}
            avatar={c.avatar}
            name={c.name}
            subtitle={c.subtitle}
            active={i === 0}
          />
        ))}
      </div>
    </aside>
  );
}
