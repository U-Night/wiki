import TeamMember from "./TeamMember";

import './TeamMember.scss'

export default function TeamMembers() {
    return (
        <div className="team-members">
            <TeamMember userName="NeyZzO" displayName="NeyZzO - Eliott" title="Developer" socials={{github: "https://github.com/NeyZzO"}}/>
            <TeamMember userName="ScreanDev" displayName="Screan - Lucas" title="Developer & Sound design" socials={{github: "https://github.com/ScreanDev"}}/>
            <TeamMember userName="Rickolaa" displayName="Rickolaa - Pierrick" title="Developer" socials={{github: "https://github.com/NeyZzO"}}/>
            <TeamMember userName="Soupexo" displayName="Soupe - Otman" title="Developer & Art" socials={{github: "https://github.com/NeyZzO"}}/>
            <TeamMember userName="ddvur" displayName="ddvur - Liam" title="Developer" socials={{github: "https://github.com/NeyZzO"}}/>
            <TeamMember userName="gabycretin" displayName="Gabycretin - Gabriel" title="Developer" socials={{github: "https://github.com/NeyZzO"}}/>
        </div>
    )
}