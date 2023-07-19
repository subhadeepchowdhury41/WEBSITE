"use client";
import PaymentIcon from "@mui/icons-material/Payment";
import { blueGrey } from "@mui/material/colors";
import PaymentsIcon from "@mui/icons-material/Payments";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import React, { useState } from "react";
import { Reveal, Fade } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import CloseIcon from "@mui/icons-material/Close";

export default function PayButton() {
  const customAnimation = keyframes`
    from {
        opacity: 0;
        transform: translate3d(-150px, 0, 0);
    }

    to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }
`;
  const customAnimation2 = keyframes`
    from {
        opacity: 0;
        transform: translate3d(0, 150px, 0);
    }

  to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }
`;
  const [fees, setFees] = useState(false);
  const handleClick = () => {
    setFees((fees) => !fees);
  };
  return (
    <>
      {fees ? (
        <div className="ppayment">
          <div className="details">
            <Reveal keyframes={customAnimation2}>
              <div className="details-fees">
                <h1>
                  Instructions to pay fees online :{" "}
                  <CloseIcon className="closeicon" onClick={handleClick} />
                </h1>
                <br />
                <p>1. Click on payment option given below.</p>
                <p>2. Select West Bengal as State of Corporate/Institution.</p>
                <p>
                  3. Select Educational Institution as type of
                  Corporate/Institution.
                </p>
                <p>4. Click on GO.</p>
                <p>
                  5. Select INDIAN INSTITUTE OF INFORMATION TECHNOLOGY,KALYANI
                  as Educational Institute Name.
                </p>
                <p>6. Click on Submit.</p>
                <p>
                  7. Select the payment category as per requirement (Select FEES
                  PAYMENT FOR NEW STUDENTS for payment of PART A).
                </p>
                <p>8. Fill all the details and then click on Submit.</p>
                <a
                  className="sbi-portal"
                  href="https://www.onlinesbi.sbi/sbicollect/icollecthome.htm"
                  target="_blank"
                  rel="noreferrer"
                  title="SBI Portal"
                >
                  <button>Payment Portal</button>
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      ) : (
        ""
      )}

      <button
        className="payment-button"
        title="Fees Portal"
        onClick={handleClick}
      >
        {console.log(fees)}
        <ReceiptLongOutlinedIcon
          sx={{ color: blueGrey[800] }}
          fontSize={"large"}
        />
      </button>
    </>
  );
}
