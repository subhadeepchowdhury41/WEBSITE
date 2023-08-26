'use client'

import React from 'react'
import NavBar from '../../../../sections/appbar/appbar'
import Footer from '../../../../sections/footer/footer'
import '../../../../../styles/phdadmission/phdadmission.css'
import { type } from 'os'
import data from './data';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import { WidthFull } from '@mui/icons-material'
import { padding } from '@mui/system'

const datapdf = [
    {
        id: 1,
        name: 'Ph.D. ORDINANCE & REGULATIONS',
        link: '/programresources/PhdRegulation2021.pdf'
    }
]
const page = () => {
    return (
        <React.Fragment>
            <div className='h-[212px] bg-[rgba(0,0,0,0.8)] h-set-mobile'>
                <NavBar isHomepage={false} />
            </div>
            <div className="flex-set main-container">
                <h1>BTech Admissions 2022-2023 <hr /> </h1>
                <div className="main-content">
                    <h2 style={{ padding: "0", paddingBottom: "2%" }}>Announcement</h2>
                    <h6>Reporting for Admission at IIIT Kalyani will be done in Hybrid mode during Nov 04 - Nov 09, 2022.</h6>
                    <h6>Candidates may complete the admission procedure either online (Option 1) or being physically present at IIIT Kalyani (Option 2).</h6>
                    <div className="main-contents">
                        <h4>Option 1: ONLINE Reporting (candidates need not visit the Institute for admission/reporting):</h4>
                        <p style={{ paddingTop: '2%' }}><b>Step 1.</b> Download the admission form and fill-up the form.
                            <a href="/programresources/IIITKALYANIAdmissionForm.pdf" target="_blank" style={{ color: 'blue' }}>Click Here to download</a>
                        </p>
                        <p style={{ paddingTop: '2%' }}><b>Step 2.</b> Make a single PDF using the scanned copy of the filled-in admission form and all the scanned copies of
                            original documents as mentioned in the list of documents (as applicable). The name of the single PDF should be:<br />
                            Candidate’s Name-JEE-Main application-number-Form.pdf
                        </p>
                        <p style={{ paddingTop: '2%' }}><b>Step 3.</b> Download the payment receipts when payments are made for</p>
                        <ul style={{ listStyle: 'circle', paddingLeft: '5%' }}>
                            <li style={{ fontSize: ".9em" }}>Institute Fees (Part: A) </li>
                            <li style={{ fontSize: ".9em" }}>and Hostel Fees (Part: B)</li>
                        </ul>
                        <p>using the SBI portal (two payments are to be done separately) and make a single PDF with name<br />
                            <span style={{}}>Candidate’s Name-JEE-Main application-number-Payments.pdf</span>
                        </p>
                        <p style={{ paddingTop: '2%' }}><b>Step 4.</b>Send the two PDFs to <EmailIcon />admission@iiitkalyani.ac.in with the subject line:<br />
                            B. Tech. Admission 2022: Candidate’s Name-Candidate’s JEE Main Application No
                        </p>
                        <p><span style={{ color: 'red', fontWeight: 'bold' }}>NOTE:</span> The two PDFs to be sent to us as attachments are:</p>
                        <ul style={{ listStyle: 'circle', paddingLeft: '5%' }}>
                            <li><b>Candidate’s Name-JEE-main application-number-Form.pdf</b></li>
                            <li><b>Candidate’s Name-JEE-main application-number-Payments.pdf</b></li>
                        </ul>
                        <p style={{ padding: '2%', paddingBottom: '0%' }}>Also upload the ZIP folder containing the two PDF files in this <a style={{ color: "blue" }} href='https://docs.google.com/forms/d/e/1FAIpQLSfn5u0suZQ7nl1gqQBwJL_W1m5V0nTWin8_tUt8tdr42cJ_GA/viewform' target='_blank'>Google Form</a></p>
                        <p style={{ paddingTop: '1%' }}><b>Step 5.</b>Get reporting confirmation over email.</p>
                    </div>
                    <div className="main-content">
                        <h4>Option 2: Physical Reporting (if the candidate opts to visit Institute for admission/reporting):</h4>
                        <p>1. Payment procedures are similar.</p>
                        <p>2. Admission form and documents (including the payment receipts as applicable) to be submitted physically to
                            the IIIT Kalyani admission office and during November 04 - 09, 2022, Reporting Time: 10:00 AM to 5:00 PM.
                        </p>
                    </div>
                </div>
                <div className="main-content">
                    <h5 style={{ color: 'red', fontWeight: 'bold' }}>IMPORTANT - Newly Admitted Students:</h5>
                    <p>1. Hostel Reporting Date for First Semester: November 24, 2022</p>
                    <p>2. Induction Program and Subsequent Commencement of Classes: November 25, 2022</p>
                </div>
                <div className='main-content'>
                    <h5>Payments to be made during admission process ((during November 04 - 09, 2022)):</h5>
                    <div className="main-content">
                        <h5>Part - A: The Institute Fees for the first semester is INR 1,04,120/- (see Institute fee structure).</h5>
                        <p>Total amount paid to JoSAA and/or CSAB excluding the JoSAA/CSAB processing charges must be subtracted from INR 1,04,120 to calculate the remaining amount to be paid to IIIT Kalyani with respect to the Institute fee (Part A).</p>
                        <ul style={{ listStyle: "square", paddingLeft: '7%' }}>
                            <li style={{ padding: '1%', paddingLeft: '0%' }}>Case 1: General/Gen-EWS/OBC-NCL: Remaining amount to be paid to IIIT Kalyani = INR 104120 - (INR 75000 - INR 3000) = INR 32,120. In the SBI portal during payment, write Tution Fee = INR 18000 and the other components are fixed.</li>
                            <li style={{ padding: '1%', paddingLeft: '0%' }}>Case 2: SC/ST/PwD: Remaining amount to be paid to IIIT Kalyani = INR 104120 - (INR 35000 - INR 3000) = INR 72,120. In the SBI portal during payment, write Tution Fee = INR 58000 keeping the other components as they are.</li>
                        </ul>
                        <p><b>Please note that there is no fee waiver for SC/ST/PWD/EWS students.</b></p>
                    </div>
                    <div className="main-content">
                        <h5>Part - B: The Hostel Fees - The amount for the First semester is INR 39,080/- (on actual basis).</h5>
                        <p>The components are:</p>
                        <ol style={{ listStyle: 'decimal', paddingLeft: '7%' }}>
                            <li style={{ padding: '1%', paddingLeft: '0%' }}>Hostel Admission Fee Rs. 1000/- (One-Time)</li>
                            <li style={{ padding: '1%', paddingLeft: '0%' }}> Hostel Caution Money Deposit (Refundable) Rs. 3000/- (One-Time)</li>
                            <li style={{ padding: '1%', paddingLeft: '0%' }}>Hostel Establishment & Maintenance Charge Rs. 1000/- (per semester)</li>
                            <li style={{ padding: '1%', paddingLeft: '0%' }}>Hostel Rent in Advance Rs. 19,800/- (per semester)</li>
                            <li style={{ padding: '1%', paddingLeft: '0%' }}>Mess charges for four months Rs. 14280/- (On actual basis)</li>
                        </ol>
                    </div>
                    <p>During the payment of Hostel Fees (Part B):</p>
                    <p>Write JEE Main Application Number in place of Registration Number.</p>
                    <p><b>Note:</b> The candidates need to pay the Institute Fees (Part A) and the Hostel Fees (Part B) through the SBI Collect Portal only.<br />
                        NO OTHER MODE OF PAYMENTS will be there.<br />
                        The SBI Portal can be accessed using this <a href="https://www.onlinesbi.sbi/sbicollect/icollecthome.htm" target='_blank' style={{ color: "blue" }}> link</a>
                    </p>
                </div>
                <div className="main-content">
                    <h2>Instructions to pay fees online:</h2>
                    <p>The students / parents paying the fees through online payment systems should follow the following process for paying the fees.</p>
                    <ul style={{ paddingLeft: '7%', listStyle: 'disc' }}>
                        <li>Click on the Payment option given on our website.</li>
                        <li>Select 'West Bengal' as State of Corporate/Institution.</li>
                        <li>Select 'Educational Institution' as type of Corporate/Institution.</li>
                        <li>Click on "GO".</li>
                        <li>Select 'INDIAN INSTITUTE OF INFORMATION TECHNOLOGY, KALYANI' as Educational Institute Name(Please select Institute name very carefully).</li>
                        <li>Click on "Submit".</li>
                        <li>Select the payment category as per requirement(for example, Select 'FEES PAYMENT FOR NEW STUDENTS' for payment of PART A.</li>
                        <li>For making Hostel/Mess related payments (Part B) select the Payment Category as “Hostel Fee”).</li>
                        <li>Fill in all the details and then click on "Submit".</li>
                    </ul>
                </div>
                <div className='main-content'>
                    <h2>List of Documents for Admission(scan or submit)</h2>
                    <ul style={{ listStyle: 'decimal', paddingLeft: "7%", paddingBottom: "2%" }}>
                        <li>Filled-in Admission form (Download the form here::<a href='/programresources/IIITKALYANIAdmissionForm.pdf' target='_blank' style={{ color: "blue" }}>Click Here to download</a>)</li>
                        <li>
                            <ol style={{ listStyle: 'lower-roman', paddingLeft: "5%" }}>
                                <li>Payment Proofs (for all the payments made to JoSAA and/or CSAB)</li>
                                <li>Proof of payment of the remaining amount of Institute Fees (Part A)</li>
                                <li>Proof of payment of the Hostel Fees (Part B).</li>
                            </ol>
                        </li>
                        <li>
                            <ol style={{ listStyle: 'lower-roman', paddingLeft: "5%" }}>
                                <li>Aadhaar Card</li>
                                <li>
                                    <ol style={{ listStyle: 'lower-alpha', paddingLeft: "5%" }}>
                                        <li>Provisional Seat Allotment Letter</li>
                                        <li>Document Verification-cum-Seat Acceptance Letter</li>
                                    </ol>
                                </li>
                                <li>
                                    <ol style={{ listStyle: 'lower-alpha', paddingLeft: "5%" }}>
                                        <li>Admit Card of JEE (Main)-2022</li>
                                        <li>Score Card / Rank Card of JEE (Main)-2022</li>
                                    </ol>
                                </li>
                                <li>Class X - Marksheet and Certificate</li>
                                <li>Class XII or Equivalent examination: Marksheet and Certificate (Qualifying Examination)</li>
                                <li>Certificate of category (SC/ST/OBC-NCL/GEN-EWS), if applicable, as per JoSAA-2022 format, issued by the competent authority. (In case of OBC-NCL/GEN-EWS category, the certificate must be issued on or after April 01, 2022.)</li>
                                <li>Certificate for Persons with Disabilities (PwD), if applicable, issued by the competent authority.(Refer JoSAA-2022 website for format.)</li>
                                <li>Copy of Medical Certificate (as per JoSAA-2022 format given in Annexure 7).</li>
                            </ol>
                        </li>
                    </ul>
                </div>
                <div className='main-content'>
                    <h2>Anti Ragging Details</h2>
                    <p>The procedure to be followed by the student:</p>
                    <ol style={{ listStyle: 'square', paddingLeft: "5%" }}>
                        <li><b>Step 1:</b> A student will submit his/her details on the website http://www.antiragging.in/; read and confirm that he/she and his/her parents/Guardians have read and understood the regulations on curbing the menace of ragging. He/She will confirm & agree that he/she will not engage in ragging in any form.</li>
                        <li><b>Step 2:</b> The student will receive an Email with his/her registration number (to be written in Admission form, Page 05) and a web link. The student will forward the link to: office@iiitkalyani.ac.in</li>
                    </ol>
                    <p style={{ paddingTop: '2%', paddingBottom: '2%' }}>During submission of details the fields marked with * are compulsory Institute related data are given herewith:</p>
                    <p style={{ fontWeight: '700' }}>Register for Anti Ragging Undertaking as University</p>
                    <ol style={{ paddingLeft: "7%", listStyle: "disc", paddingBottom: "2%" }}>
                        <li>College Name: Indian Institute of Information Technology Kalyani</li>
                        <li>Director's Name: Prof. Santanu Chattopadhyay</li>
                        <li>College Phone Number: +91 9831264161</li>
                        <li>Email: office@iiitkalyani.ac.in</li>
                        <li>Nearest Police station: Kalyani</li>
                    </ol>
                    <p>Number of students in your class: 118 in case of B. Tech in CSE and 60 in case of B. Tech in ECE</p>
                    <p style={{ paddingTop: '2%', paddingBottom: '2%' }}>What is the phone number of National Anti Ragging Help Line - <span style={{ color: 'blue' }}>18001805522</span></p>
                    <p>After filling this form successfully you can download the Student's Anti Ragging Undertaking and the Parents Anti Ragging Undertaking from Website.</p>
                    <p style={{ paddingTop: '2%' }}>Please print both the Undertaking, sign them, request your parents to read the details and request them to sign their undertaking and then submit both at the Institute office at the time of admission/physical reporting/when you join the Institute physically.</p>
                </div>
                <div className='main-content'>
                    <h2>Information Links:</h2>
                    <ul style={{ listStyle: "disc", paddingLeft: '5%' }}>
                        <li>Link to JoSAA: <a href='https://josaa.nic.in' target='_blank' style={{ color: "blue" }}>https://josaa.nic.in/</a></li>
                        <li>JoSAA Business rule: <a style={{ color: "blue" }} href='https://josaa.nic.in/document/josaa-2022-business-rule/' target='_blank'>https://josaa.nic.in/document/josaa-2022-business-rule/</a></li>
                        <li>Certificate formats: <a style={{ color: "blue" }} href='https://josaa.nic.in/document/certficate-formats/' target='_blank'>https://josaa.nic.in/document/certficate-formats/</a></li>
                    </ul>
                </div>
                <div className="main-content">
                    <h2>About IIIT KALYANI</h2>
                    <p style={{ padding: '1%' }}><b>Indian Institute of Information Technology Kalyani</b> was set up in 2014. It was among the eighteen IIITs set up by the Ministry of Human Resource Development, Government of India, under the Not for profit Public-Private Partnership (N-PPP) model. A Memorandum of Understanding (MoU) was signed between the Government of India, Government of West Bengal, and Industry Partners, viz; Coal India Limited, Rolta Foundation, and WEBEL for setting up of Indian Institute of Information Technology
                        (IIIT) at Kalyani using the above model. The stakes of the partners mentioned above were at a ratio of 50:35:15 respectively in 2014. The Institute has been declared an Institute of National Importance as per The Indian Institutes of Information Technology (Public-Private Partnership) Act, 2017. The Indian Institute of Information Technology Kalyani has been set up to produce best-in-class human resources in IT and to harness the multidimensional facets of IT in various domains. IIIT Kalyani strives to evolve
                        into a world-class academic institution with the highest education and research facilities and produce industry-ready IT graduates to meet the industry demands. The institute will act as a catalyst in fostering an innovative ecosystem to ensure that new products, solutions, and innovations are created, taking advantage of the state's intellectual capital. IIIT Kalyani offers semester-oriented undergraduate and research programs to impart high-quality science and engineering education. Admission to the academic
                        programs is synchronized with the academic year and occurs according to the procedure laid down by JoSAA and CSAB (for UG level). IIIT Kalyani offers a Doctoral program also in various subject areas. IIIT Kalyani aims to excel in education and research in Information Technology and allied areas. The institute is committed to providing state-of-the-art technical education in computer science and catalyzing transmission of knowledge using the latest developments in pedagogy.
                        While the construction work for the permanent campus (Phase -I) has been initiated, the institute is presently running from the campus at WEBEL IT Park, Kalyani, West Bengal. For more details: www.iiitkalyani.ac.in.</p>
                </div>
                <div className="main-content">
                    <h2>Academic Units</h2>
                    <div className="lists" style={{ textAlign: 'justify' }}>
                        <ol style={{ listStyle: 'upper-roman' }}>
                            <li>Computer Science and Engineering (4 Years, Bachelor of Technology)</li>
                            <li>Electronics and Communication Engineering (4 Years, Bachelor of Technology)</li>
                        </ol>
                    </div>
                </div>
                <div className="main-content" style={{ marginBottom: '3%' }}>
                    <h2>Fee Structure</h2>
                    <h4>The fee structure per semester effective for academic session 2022 - 2023 to be paid into Institute Account is as follows:</h4>
                    <table className="table">
                        <tbody>
                            <tr>
                                <th scope="col">1</th>
                                <td>Tution Fee</td>
                                <td>Rs. 90,000/-</td>
                            </tr>
                            <tr>
                                <th scope="col">2</th>
                                <td>Registration/Admission fee</td>
                                <td>Rs. 500/- (One time)</td>
                            </tr>
                            <tr>
                                <th scope="col">3</th>
                                <td>Identity Card Fee</td>
                                <td>Rs. 120/- (One time)</td>
                            </tr>
                            <tr>
                                <th scope="col">4</th>
                                <td>Student activities fee</td>
                                <td>Rs 1,300/-</td>
                            </tr>
                            <tr>
                                <th scope="col">5</th>
                                <td>Infrastructural Maintenance fee</td>
                                <td>Rs. 500/-</td>
                            </tr>
                            <tr>
                                <th scope="col">6</th>
                                <td>Examination fee</td>
                                <td>Rs. 500/-</td>
                            </tr>
                            <tr>
                                <th scope="col">7</th>
                                <td>Provisional Certificate and Grade Card Fee</td>
                                <td>Rs. 200/-</td>
                            </tr>
                            <tr>
                                <th scope="col">8</th>
                                <td>Hostel Overhead Fee</td>
                                <td>Rs. 3,000/-</td>
                            </tr>
                            <tr>
                                <th scope="col">9</th>
                                <td>Transport Fee</td>
                                <td>Rs. 3,000/-</td>
                            </tr>
                            <tr>
                                <th scope="col">10</th>
                                <td>Alumni Registration Fee</td>
                                <td>Rs. 2,000/- (One time)</td>
                            </tr>
                            <tr>
                                <th scope="col">11</th>
                                <td>Library Caution Money</td>
                                <td>Rs. 1,000/- (One time) Refundable</td>
                            </tr>
                            <tr>
                                <th scope="col">12</th>
                                <td>Institute Caution Money</td>
                                <td>Rs. 2,000/- (One time) Refundable</td>
                            </tr>
                        </tbody>
                    </table>
                    <h5>Total Rs. 1,04,120/-</h5>
                    <h4>Hostel Fees to be paid by Hosteler in Institute Hostel account</h4>
                    <table className="table">
                        <tbody>
                            <tr>
                                <th scope="col">1</th>
                                <td>Hostel Admission Fee</td>
                                <td>Rs. 1,000/- (One-Time)</td>
                            </tr>
                            <tr>
                                <th scope="col">2</th>
                                <td>Hostel Caution Money Deposit (Refundable)</td>
                                <td>Rs. 3,000/- (One-Time)</td>
                            </tr>
                            <tr>
                                <th scope="col">3</th>
                                <td>Hostel Establishment & Maintenance Charge</td>
                                <td>Rs. 1,000/- (per semester)</td>
                            </tr>
                            <tr>
                                <th scope="col">4</th>
                                <td>Hostel Rent in Advance</td>
                                <td>Rs. 19,800/- (per semester)</td>
                            </tr>
                            <tr>
                                <th scope="col">5</th>
                                <td>Mess charges for four months</td>
                                <td>Rs. 14280/- (On actual basis)</td>
                            </tr>
                        </tbody>
                    </table>
                    <h5>Total Rs. 39080/-</h5>
                    <p><b>*</b>May vary by decision of competent authority.</p>
                    <p><b>**</b>with 10% increase every year.</p>
                    <h5>The fee structure is the same irrespective of the category (SC/ST/OBC/EWS/PwD) of students.</h5>
                </div>
                <div className="btn-reg" style={{ margin: '3%' }}>
                    <a href='https://www.onlinesbi.sbi/sbicollect/icollecthome.htm' target='_blank'>Payment</a>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default page;