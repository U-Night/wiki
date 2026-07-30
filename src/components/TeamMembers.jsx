import TeamMember from "./TeamMember";

import './TeamMember.scss'

export default function TeamMembers() {
    return (
        <div className="team-members">
            <TeamMember userName="NeyZzO" displayName="NeyZzO - Eliott" title="CEO & Developer" socials={{github: "https://github.com/NeyZzO"}}/>
            <TeamMember userName="ScreanDev" displayName="Screan - Lucas" title="Developer & Sound design" socials={{github: "https://github.com/ScreanDev"}}/>
            <TeamMember userName="Rickolaa" displayName="Rickolaa - Pierrick" title="Developer" socials={{github: "https://github.com/Rickolaa"}}/>
            <TeamMember userName="ddvur" displayName="ddvur - Liam" title="Developer" socials={{github: "https://github.com/ddvur"}}/>
            <TeamMember userName="Gabycretin" displayName="Gabycretin - Gabriel" title="Developer" socials={{github: "https://github.com/Gabycretin"}}/>
            <TeamMember userName="WattiauxG" displayName="Skullarme - Gabriel" title="Developer" socials={{github: "https://github.com/WattiauxG"}}/>
            <TeamMember userName="" displayName="Aurèle" title="Chief Administrative Officer" socials={{}} profilePic={"https://api.dicebear.com/9.x/shapes/svg?seed=Aurèle&backgroundColor=62b9bf"}/>
        </div>
    )
}