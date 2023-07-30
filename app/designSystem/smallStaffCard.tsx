import React from "react";
import "./smallStaffCard.css";
import EmailIcon from '@mui/icons-material/Email';

interface SmallStaffProps {
    name: string;
    position: string;
    qualification: string;
    email: string;
    subjects: Array<string>;
    site: string;
    dp: string;
}

const SmallStaffCard: React.FC<SmallStaffProps> = ({ name, position, qualification, email, subjects, site, dp }) => {
    let className = "asmall-staff-card";

    subjects.sort((a, b) => b.length - a.length);

    return (
        <a href={site} target="_blank" rel="noreferrer" className="asmall-Staff-card">
            <div className="small-staff-card">
                <div className="small-top-staff-card">
                    <div className="small-staff-picture">
                        <img src={dp} alt={name} />
                    </div>
                    <div className="small-staff-position">
                        <p>
                            {position}
                        </p>
                    </div>
                    <div className="small-staff-qualification">
                        <p>
                            {qualification}
                        </p>
                    </div>
                </div>
                <hr />
                <div className="small-bottom-staff-card">
                    <div className="small-staff-name">
                        <p>
                            {name}
                        </p>
                    </div>
                    <br />
                    <div className="small-staff-email">
                        <EmailIcon />
                        <p>
                            {email}
                        </p>
                    </div>
                    <div className="small-staff-subjects">
                        {subjects.map((element, index) => (
                            <p key={index}>
                                {element}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </a>
    );
};

export default SmallStaffCard;
