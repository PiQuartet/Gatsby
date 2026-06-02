import * as React from "react"
import { FaInstagram, FaYoutube } from "react-icons/fa"

export default function SocialLinks() {
  return (
    <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
      <a
        href="https://www.instagram.com/piquartet/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
      >
        {React.createElement(FaInstagram as any, {
  size: 28,
  color: "#8A4FFF",
})}
      </a>

      <a
        href="https://www.youtube.com/@piquartet"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="YouTube"
      >
        {React.createElement(FaYoutube as any, { size: 28, color: "#8A4FFF" })}
      </a>
    </div>
  )
}