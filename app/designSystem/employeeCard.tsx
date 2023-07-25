import React from "react";
import "./employeeCard.css";
import EmailIcon from '@mui/icons-material/Email';

interface EmployeeProps {
  name: string;
  position: string;
  email: string;
  dp: string;
}

const EmployeeCard: React.FC<EmployeeProps> = ({ name, position, email, dp }) => {
  let className = "employee-card";

  return (
    // <a href={site} target="_blank" rel="noreferrer" className="employee-card">
        <div className="employee-card">
            <div className="employee-dp">
                <img src={dp} alt={name} />
            </div>
            <hr />
            <div className="employee-details">
                <div className="employee-name">
                    <p>
                        {name}
                    </p>
                </div>
                <div className="employee-position">
                    <p>
                        {position}
                    </p>
                </div>
                <div className="employee-email">
                    <EmailIcon/>
                    <p>
                        {email}
                    </p>
                </div>
            </div>
        </div>
    // </a>
  );
};

export default EmployeeCard;
