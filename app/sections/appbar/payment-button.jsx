"use client";
import PaymentIcon from "@mui/icons-material/Payment";
import { blueGrey } from "@mui/material/colors";
import PaymentsIcon from "@mui/icons-material/Payments";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

export default function PayButton() {
  const [fees, setFees] = useState(false);
  const handleClick = () => {
    setFees((fees) => !fees);
  };
  return (
    <div
      style={{
        position: "fixed",
        height: "7vh",
        width: "7vw",
        zIndex: "10000",
        bottom: "0",
        right: "0",
      }}
    >
      {fees ? (
        <div className="ppayment">
          <div className="details">
            <div className="details-fees animate-randimation">
              <h1>
                Instructions to pay fees online :{" "}
                <CloseIcon className="closeicon" onClick={handleClick} />
              </h1>

              <p>1.Click on payment option given below.</p>
              <p>2.Select Educational Institution as type of Corporate/Institution.</p>
              <p>
                3.Select West Bengal as State of Corporate/Institution.
              </p>
              <p>4.Select INDIAN INSTITUTE OF INFORMATION TECHNOLOGY,KALYANI as Educational Institute Name.</p>
              <p>
                5.Select the payment category as per requirement.(For e.g. Select 'FEES PAYMENT FOR NEW STUDENTS' for payment of PART A.)
              </p>
              <p>6.Fill in all the details and then click on "Next".
</p>
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
    </div>
  );
}
