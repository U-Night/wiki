import React from "react";
import {Github} from "lucide-react";

const icons = {
    "github": <Github />
}

export default function TeamMember({ userName, displayName, title, pageLink, socials }) {
  return <div className="teamMember" style={{
    border: "1px solid rgba(164, 164, 164, 0.74)",
    borderRadius: "8px",
    width: "fit-content",
    padding: "1rem 2rem",
    alignContent: "center",
    textAlign: "center",
  }}>
    <img src={`https://github.com/${userName}.png`} alt={userName + ' image'} style={{borderRadius: "50%", width: "10rem"}}/>
    <a href={pageLink}>
        <h4 style={{
        padding: 0,
        margin: 0,
        fontSize: 22
    }}>{displayName}</h4>
        <p>{title}</p>
    </a>

  </div>;
}
