"use client";
import PaymentIcon from "@mui/icons-material/Payment";
import { blueGrey } from "@mui/material/colors";
import PaymentsIcon from "@mui/icons-material/Payments";

export default function PayButton() {
  return (
    <div className="ppayment">
      <div className="details">
        <p>
          Instructions to pay fees online : The students / parents paying the
          fees through online payment systems should follow the following
          process for paying the fees. Click on payment option given on our
          website. Select West Bengal as State of Corporate/Institution. Select
          Educational Institution as type of Corporate/Institution. Click on GO.
          Select INDIAN INSTITUTE OF INFORMATION TECHNOLOGY,KALYANI as
          Educational Institute Name.(Please select Institute name very
          carefully.) Click on Submit. Select the payment category as per
          requirement.(Select FEES PAYMENT FOR NEW STUDENTS for payment of PART
          A.) Fill all the details and then click on Submit.
        </p>
      </div>
      <a
        href="https://www.onlinesbi.sbi/sbicollect/icollecthome.htm"
        target="_blank"
        rel="noreferrer"
      >
        <button className="payment-button" title="SBI Collect">
          <PaymentIcon sx={{ color: blueGrey[800] }} fontSize={"large"} />
        </button>
      </a>
    </div>
  );
}
