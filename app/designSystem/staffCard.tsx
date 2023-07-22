import React from "react";
import "./staffCard.css";
import EmailIcon from '@mui/icons-material/Email';

interface StaffProps {
  name: string;
  position: string;
  qualification: string;
  email: string;
  subjects: [];
  site: string;
  dp: string;
}

const StaffCard: React.FC<StaffProps> = ({ name, position, qualification, email, subjects, site, dp }) => {
  let className = "staff-card";

  return (
    <a href={site} target="_blank" rel="noreferrer" className="aStaff-card">
        <div className="staff-card">
            <div className="left-staff-card">
                <div className="staff-picture">
                    <img src={dp} alt={name} />
                </div>
                <div className="staff-position">
                    <p>
                        {position}
                    </p>
                </div>
                <div className="staff-qualification">
                    <p>
                        {qualification}
                    </p>
                </div>
                {/* <div className="staff-details">
                    <div className="staff-details-name">
                        {name}
                        <br />
                    </div>
                    <div>
                        {position}
                        <br />
                    </div>
                    <div>
                        {qualification}
                        <br />
                    </div>
                    <div>
                        Email: {email}
                    </div>
                </div> */}
            </div>
            <hr />
            <div className="right-staff-card">
                <div className="staff-name">
                    <p>
                        {name}
                    </p>
                </div>
                <br/>
                <div className="staff-email">
                    <EmailIcon/>
                    <p>
                        {email}
                    </p>
                </div>
                <div className="staff-subjects">
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

export default StaffCard;
