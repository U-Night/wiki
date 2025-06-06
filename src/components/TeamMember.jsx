import React from "react";
import {Github, Linkedin, Facebook, Instagram, Twitter, Globe} from "lucide-react";

import './TeamMember.scss'

const icons = {
  "github": <Github size={18}/>,
  "linkedin": <Linkedin size={18}/>,
  "facebook": <Facebook size={18}/>,
  "instagram": <Instagram size={18}/>,
  "twitter": <Twitter size={18}/>,
}

export default function TeamMember({ userName, displayName, title, pageLink, socials }) {
  Object.entries(socials).map(([key, value]) => {
    return console.log(key, value, icons[key]);
  })
  return <div className="team-member">
    <img src={`https://github.com/${userName}.png`} alt={userName + ' image'} style={{borderRadius: "50%", width: "8rem"}}/>
    <a href={pageLink}>
        <h4 style={{
        padding: 0,
        margin: 0,
        fontSize: 21
    }}>{displayName}</h4>
        <p>{title}</p>
    </a>
    <div style={{
      display: "flex",
      placeContent: 'space-around',
    }}>
      {Object.entries(socials).map(([key, value]) => 
        <a href={value} key={key}>{icons[key] || <Globe/>}</a>
      )}
    </div>

  </div>;
}
