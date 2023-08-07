import React from "react";

const downloads = () => {
  return (
    <div>
      <>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
        />
        {/*?php include '../headersub.php';?*/}
        <div className="container">
          <div className="iiitppp">
            &nbsp;
            {/*<div class="notificationmenu">
    <ul class="nav nav-pills pull-right">
  <li class="active"><a href="#phd">Phd Admission</a></li>
  <li><a href="#Studentnotice">Student Notice</a></li>
  <li><a href="#Recruitment">Recruitment</a></li>
     <li><a href="#Tender">Tender</a></li>
    </ul>
    
</div>*/}
            <h1>Archives</h1>
            <br />
            *** Old Notifications ***
            <hr />
            &nbsp;
            <div className="panel-group" id="accordion">
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h4 className="panel-title">
                    <a
                      data-toggle="collapse"
                      data-parent="#accordion"
                      href="#gen"
                    >
                      General Notice
                    </a>
                  </h4>
                </div>
                <div id="gen" className="panel-collapse collapse">
                  <div className="panel-body">
                    <h2>General Notice</h2>
                    <ul>
                      <li>
                        <a
                          href="../images/notifications/68.pdf"
                          target="_blank"
                        >
                          Notice regarding Administrative responsibilities{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="../images/notifications/Notice_02_05_2019.pdf"
                          target="_blank"
                        >
                          Urgent notification regarding{" "}
                          <i>
                            <b>Cyclone Fani</b>
                          </i>{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="../images/notifications/Office Order_63 (1).pdf"
                          target="_blank"
                        >
                          Order regarding Website Maintenance Duty
                        </a>
                      </li>
                      <li>
                        <a
                          href="../images/notifications/OfficeOrder_59.pdf"
                          target="_blank"
                        >
                          Appointment of Faculty In-Charge UG, Admission
                        </a>
                      </li>
                      <li>
                        <a
                          href="../images/notifications/Order _58.pdf"
                          target="_blank"
                        >
                          Appointment of Faculty In-Charge Alumni Cell
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <br />
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h4 className="panel-title">
                    <a
                      data-toggle="collapse"
                      data-parent="#accordion"
                      href="#Admission"
                    >
                      Admission Notice
                    </a>
                  </h4>
                </div>
                <div id="Admission" className="panel-collapse collapse">
                  <div className="panel-body">
                    <h2>Admission Notice</h2>
                    <ul>
                      <li>
                        <a
                          href="../images/notifications/Advertisement for Summer Trainee - Summer2019.pdf"
                          target="_blank"
                        >
                          Advertisement for Summer Trainee - Summer 2019
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <br />
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h4 className="panel-title">
                    <a
                      data-toggle="collapse"
                      data-parent="#accordion"
                      href="#phd"
                    >
                      PhD Notification
                    </a>
                  </h4>
                </div>
                <div id="phd" className="panel-collapse collapse">
                  <div className="panel-body">
                    <div className="entry-content">
                      <ul>
                        <li>
                          {" "}
                          <a
                            href="../images/notifications/PhD Coursework Autumn 2019.pdf"
                            target="_Blank"
                          >
                            PhD Autumn Semester coursework results
                          </a>
                        </li>
                        <li>
                          PhD admission test Spring 2020:{" "}
                          <a
                            href="../images/notifications/Selected list PhD Admission Spring 2020.pdf"
                            target="_Blank"
                          >
                            PhD admission result Spring 2020
                          </a>{" "}
                          <a
                            href="../images/notifications/selected list_Admission test_updated.pdf"
                            target="_Blank"
                          >
                            Download Updated Selected candidate list for
                            Admission Test
                          </a>{" "}
                          <br />{" "}
                          <a
                            href="../images/notifications/selected list_Admission test.pdf"
                            target="_Blank"
                          >
                            Download Selected candidate list for Admission Test{" "}
                          </a>
                          <a
                            href="../images/notifications/PhDAdmissionSyllabus_replace.pdf"
                            target="_Blank"
                          >
                            Download modified PhD Admission Syllabus{" "}
                          </a>
                        </li>
                        <li>
                          <a
                            href="../images/notifications/scan copy Notification for Fee.pdf"
                            target="_Blank"
                          >
                            Notice regarding tution and hostel fees{" "}
                          </a>
                        </li>
                        <li>
                          <a
                            href="../images/notifications/exam routine/Advt. phd-Nov2019.pdf"
                            target="_Blank"
                          >
                            Notice regarding Ph.D Advertisement Nov 2019{" "}
                          </a>
                        </li>
                        <li>
                          <a
                            href="../images/notifications/exam routine/PhD admission 2019Even IIITK.pdf"
                            target="_Blank"
                          >
                            Advertisement detail PhD admission 2019 (Even) IIITK
                          </a>
                        </li>
                        <li>
                          <a
                            href="../images/notifications/exam routine/PhD Application form even 2019-20 IIIT Kalyani.pdf"
                            target="_Blank"
                          >
                            PhD Application form even 2019-20 IIIT Kalyani(PDF)
                          </a>
                          &nbsp;
                          <a href="../images/notifications/exam routine/PhD Application form even 2019-20 IIIT Kalyani.docx">
                            PhD Application form even 2019-20 IIIT Kalyani(Doc.)
                          </a>
                        </li>
                        <li>
                          <a href="../images/notifications/exam routine/PhD CourseWork_End_Semester_Schedule_2019_Autumn.pdf">
                            Notice regarding PhD Coursework End Semester
                            Examination Schedule{" "}
                            <img
                              src="../images/new-gif-image-6.gif"
                              alt=""
                              height={26}
                              width={35}
                            />
                          </a>
                        </li>
                      </ul>
                      <hr />
                      <ul>
                        <li>
                          <a href="../images/notifications/exam routine/PhD Coursework Spring 2019 (2).pdf">
                            PhD Spring Semester coursework results{" "}
                          </a>
                        </li>
                        <li>
                          <a href="../images/notifications/exam routine/PhD CourseWork_End_Semester_Schedule_2019_Autumn.pdf">
                            Notice regarding PhD Coursework End Semester
                            Examination Schedule{" "}
                          </a>
                        </li>
                      </ul>
                      <h2>PhD Admission Odd Semester 2019-2020 </h2>
                      <ul>
                        <li>
                          <a href="../images/notifications/Admission Notice.pdf">
                            Notice regarding Ph.D admission 2019
                          </a>
                        </li>
                        <li>
                          <a href="../images/notifications/Final result PHD Entrance Autumn 2019.pdf">
                            List of Candidates Selected for PhD Admission -
                            Autumn 2019
                          </a>
                        </li>
                        <li>
                          <a href="../images/notifications/Selected list PhD Admission Autumn 2019.pdf">
                            Shortlisted Candidates for PhD Admission - Autumn
                            2019
                          </a>
                        </li>
                        <li>
                          <a href="../images/notifications/Notice-July-05-2019.pdf">
                            PhD Admission Notice (04.07.2019)
                          </a>
                        </li>
                        <li>
                          <a href="../images/notifications/PhDAdmissionSyllabus-July-2019-20.pdf">
                            Download PhD Admission Syllabus
                          </a>
                        </li>
                        <li>
                          <a href="../images/notifications/IMG-20190604-WA0000.jpg">
                            Download Advertisement
                          </a>
                        </li>
                        <li>
                          <a href="../images/notifications/Ph.D. Admission Advt Odd Sem 2019.pdf">
                            Details
                          </a>
                        </li>
                        <li>
                          <a href="../images/notifications/PhD Application form 2019-20 IIIT Kalyani.docx">
                            Download Application Form
                          </a>
                        </li>
                      </ul>
                    </div>
                    <hr />
                    <div className="entry-content">
                      <h2>PhD Admission Even Semester 2018-2019</h2>
                      <ul>
                        <li>
                          <a
                            href="../images/notifications/exam routine/phd 2019 result.pdf"
                            target="_blank"
                          >
                            Result of Ph.D coursework 2018
                          </a>
                        </li>
                        <li>
                          <a
                            href="../images/notifications/exam routine/End Semester routine.pdf"
                            target="_blank"
                          >
                            Routine for End Semester written examination of
                            Ph.D. coursework{" "}
                          </a>
                        </li>
                        <li>
                          <a href="../images/Order_60.pdf" target="_blank">
                            Revised rate for Fellowship and Contingency
                          </a>
                        </li>
                        <li>
                          <a
                            href="../images/notifications/Advtnewphd2018-19.pdf"
                            target="_blank"
                          >
                            Advertisement (Published on 1.12.2018)
                          </a>
                        </li>
                        <li>
                          <a
                            href="../images/notifications/PhD_application_form_2018_19_ IIITK_final_q.docx"
                            target="_blank"
                          >
                            Application Form (docx)
                          </a>
                        </li>
                        <li>
                          <a
                            href="../images/notifications/phd_syllabus (2).pdf"
                            target="_blank"
                          >
                            Syllabus for Ph.D. Admission Test (Even Semester),
                            2019
                          </a>
                        </li>
                        <li>
                          <a
                            href="../images/notifications/PhD shortList Website.pdf"
                            target="_blank"
                          >
                            Shortlisted candidates for Even Semester Ph.D.
                            Admission Written Test, 2019
                          </a>
                        </li>
                        <li>
                          <a
                            href="../images/notifications/Ph.D. Selection list 15-01-2019.pdf"
                            target="_blank"
                          >
                            The Final selection list for Even Semester Ph.D.
                            Admission, 2019
                          </a>
                        </li>
                        <li>
                          <a
                            href="../images/notifications/phd.pdf"
                            target="_blank"
                          >
                            Document Verification for PhD Admission Even
                            Semester 2018-2019
                          </a>
                        </li>
                      </ul>
                    </div>
                    <hr />
                    &nbsp;
                    <div className="entry-content">
                      <h2>PhD Admission Odd Semester 2018</h2>
                      <p>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                        <a href="../images/notifications/Final List 2018 Odd Sem Ph.D. admission.pdf">
                          <u>
                            <b>
                              List of Selected Candidates for Odd Semester Ph.D.
                              Admission, 2018
                            </b>
                          </u>
                        </a>
                      </p>
                      <ul>
                        <li>
                          <a href="../images/notifications/final Marks.pdf">
                            Shortlist and Instructions for Interview
                          </a>
                        </li>
                        <li>
                          <a href="../images/notifications/PHD 2018.pdf">
                            Shortlist of Applicants&nbsp;and Syllabus
                          </a>
                        </li>
                        <li>
                          <a href="../images/notifications/PhD admission_adv 2018 IIITK.pdf">
                            Advertisement
                          </a>
                        </li>
                        <li>
                          <a href="../images/notifications/PhD_application_form1_2018 IIITK.doc">
                            Application Form
                          </a>
                        </li>
                      </ul>
                    </div>
                    <hr />
                    <h2>JRF/SRF/RA</h2>
                    <ul>
                      <li className="first-child">
                        <a href="../images/notifications/Advertisement for JRF and Application - 004.docx">
                          {" "}
                          Advertisement and Application Form for JRF in DST/SERB
                          Project{" "}
                        </a>
                      </li>
                      <a href="../images/notifications/Advertisement for JRF and Application - 004.docx"></a>
                      <li className="first-child">
                        <a href="../images/notifications/Advertisement for JRF and Application - 004.docx" />
                        <a href="../images/notifications/Advertisement_for_JRF(Physics)_and_Application_003.docx">
                          Advertisement and Application Form for JRF in Physics
                          (CLOSED)
                        </a>
                      </li>
                      <a href="../images/notifications/Advertisement_for_JRF(Physics)_and_Application_003.docx"></a>
                    </ul>
                    <a href="../images/notifications/Advertisement_for_JRF(Physics)_and_Application_003.docx"></a>
                  </div>
                </div>
              </div>
              <a href="../images/notifications/Advertisement_for_JRF(Physics)_and_Application_003.docx">
                <br />
              </a>
              <div className="panel panel-default">
                <a href="../images/notifications/Advertisement_for_JRF(Physics)_and_Application_003.docx"></a>
                <div className="panel-heading">
                  <a href="../images/notifications/Advertisement_for_JRF(Physics)_and_Application_003.docx"></a>
                  <h4 className="panel-title">
                    <a href="../images/notifications/Advertisement_for_JRF(Physics)_and_Application_003.docx"></a>
                    <a
                      data-toggle="collapse"
                      data-parent="#accordion"
                      href="#Studentnotice"
                    >
                      Student Notice
                    </a>
                  </h4>
                </div>
                <div id="Studentnotice" className="panel-collapse collapse">
                  <div className="panel-body">
                    <h2>Student Notices</h2>
                    <ul>
                      <li>
                        <a
                          href="../images/notifications/exam routine/Lab Schedule - Autumn 2019 - V2 - 2Students.pdf"
                          target="_blank"
                        >
                          <i>
                            <b>LAB EXAM and PROJECT PRESENTATION SCHEDULE </b>
                          </i>
                        </a>
                        <img
                          alt=""
                          height={26}
                          src="../images/new-gif-image-6.gif"
                          width={35}
                        />
                      </li>
                      <li>
                        <a
                          href="../images/notifications/exam routine/examination schdule (1).pdf"
                          target="_blank"
                        >
                          <i>
                            <b>Examination schedule for end semester </b>
                          </i>
                        </a>
                        <img
                          alt=""
                          height={26}
                          src="../images/new-gif-image-6.gif"
                          width={35}
                        />
                      </li>
                      <li>
                        <a
                          href="../images/notifications/notice for examinaton form.pdf"
                          target="_blank"
                        >
                          <i>
                            <b>Notice for Examinaton Form</b>
                          </i>
                        </a>
                        <img
                          alt=""
                          height={26}
                          src="../images/new-gif-image-6.gif"
                          width={35}
                        />
                      </li>
                      <li>
                        <a
                          href="../images/notifications/Scan.pdf"
                          target="_blank"
                        >
                          Commencement of Classes (Batch:2019-2023)
                        </a>
                      </li>
                      <li>
                        <a
                          href="../images/notifications/RSMS Sort Advertisement to publish this notice on reputed institutions.pdf"
                          target="_blank"
                        >
                          Notification -- RSM Merit Scholarship{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="../images/notifications/RSMS Sort Advertisement year 2019-20.pdf"
                          target="_blank"
                        >
                          RSM Merit Scholarship (Details){" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="../images/notifications/exam routine/supplementaryjune2019.pdf"
                          target="_blank"
                        >
                          Notice regarding Supplementary Exam June 2019{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="../images/notifications/convocationiiitk.pdf"
                          target="_blank"
                        >
                          Notice regarding Convocation IIIT Kalyani 2019{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="../images/notifications/Office order (1).pdf"
                          target="_blank"
                        >
                          Notice to assist Training and Placement Cell
                        </a>
                      </li>
                      <li>
                        <a
                          href="../images/notifications/Notificatio for Fees 2019 (1).pdf"
                          target="_blank"
                        >
                          Notification for Fees 2019
                        </a>
                      </li>
                      <li>
                        <a
                          href="../images/notifications/exam routine/B.tech routine.pdf"
                          target="_blank"
                        >
                          Routine for Theory and Practical Examinations of all
                          four batches of B.Tech
                        </a>
                      </li>
                      <li>
                        <a
                          href="../images/notifications/Examination Spring-2019.pdf"
                          target="_blank"
                        >
                          Routine for Theory and Practical Examinations of all
                          four batches of B.Tech and End Semester written
                          examination of Ph.D. coursework{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="../images/notifications/Notice for Holi.pdf"
                          target="_blank"
                        >
                          Notice on Holi (dated 20.03.2019){" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="../images/notifications/Smart.pdf"
                          target="_blank"
                        >
                          Congratulations to the Winners in Smart India
                          Hackathon 2019!!!
                        </a>
                      </li>
                      <li>
                        <a
                          href="../images/notifications/Downloads1.jpg"
                          target="_blank"
                        >
                          IIIT Kalyani secured the Second Runners-up position in
                          CodeUtsava3.0 - hackathon at NIT Raipur{" "}
                        </a>
                      </li>
                      <li>
                        <a href="../images/Notificationq.pdf" target="_blank">
                          Notice regarding infrastructure of Kalyani Stadium to
                          practice the following games
                        </a>
                      </li>
                      <li>
                        <a
                          href="../images/notifications/workshopiisc.pdf"
                          target="_blank"
                        >
                          Seminar on "Introduction to Intelligent User
                          Interface"(5th February, 2019 at Room G-01 from 4 p.m)
                        </a>
                      </li>
                      <li>
                        <a
                          href="../images/notifications/Document55.pdf"
                          target="_blank"
                        >
                          Pariksha Pe Charcha
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="../images/notifications/Students Visit to IIT Kgp Incubation Centre.pdf"
                          target="_blank"
                        >
                          Student's visit to Incubation Centre: 34 B.Tech
                          Students are going to visit IIT Kharagpur Incubation
                          Centre on 28-01-2019 as a part of their field trips
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="../images/notifications/Order_56.pdf"
                          target="_blank"
                        >
                          Notice regarding Bus facility and 24 hrs Security at
                          Hostel
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="../images/notifications/Order_57.pdf"
                          target="_blank"
                        >
                          Notice regarding latest Library timings
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="../images/notifications/AICTE Pariksha Pe Charcha 2.0 (1).pdf"
                          target="_blank"
                        >
                          Interaction of Hon’ble Prime Minister of India with
                          students, teachers and parents on 29th January, 2019
                        </a>
                      </li>
                      <li>
                        <a
                          href="../images/notifications/transcript and form details.pdf"
                          target="_blank"
                        >
                          Transcript and Form Details
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="../images/notifications/Notification-fees-deposit-22122018.pdf"
                          target="_blank"
                        >
                          Notification on Institute Fees and Hostel Fees Dues
                          (12-12-2018)
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="../images/notifications/Office order for Hostel Fee srtucture (1).pdf"
                          target="_blank"
                        >
                          Office order for Hostel Fee srtucture
                        </a>
                      </li>
                      <li className="first-child">
                        <a href="../images/notifications/wbscholarship2018.pdf">
                          {" "}
                          West Bengal Scholarship Order{" "}
                        </a>
                      </li>
                      <li>
                        <a href="../images/notifications/Registration_form_student.pdf">
                          Registration form : This is a mandatory form to be
                          filled by every student before commencement of
                          semester classes.
                        </a>
                      </li>
                      <li>
                        <a href="../images/notifications/academic-calender-2018-2019-mod.pdf">
                          Academic Calendar– Autumn Semester 2018-19{" "}
                        </a>
                      </li>
                      {/*<li><a href="../images/notifications/Supplementary List_July18_subjectName.pdf">List of students for supplementary examination 2018</a></li>*/}
                      <li>
                        <a href="../images/notifications/weeklyholiday.pdf">
                          Notice about Weekend Holiday
                        </a>
                      </li>
                      <li>
                        <a href="../images/notifications/End_Semester_Spring_2018.pdf">
                          Schedule of Endsem Examination Spring 2018
                        </a>
                      </li>
                      <li>
                        <a href="../images/notifications/Notice_Admitcard_Spring_2018.pdf">
                          Notice regarding Admit Card for Endsem Spring 2018
                        </a>
                      </li>
                      <li>
                        <a href="../images/notifications/Schoralship.pdf">
                          Scholarship
                        </a>
                      </li>
                      <li>
                        <a href="../images/notifications/Notification_Semester_Fee.pdf">
                          Submission of Semester Fees
                        </a>
                      </li>
                      <li>
                        <a href="../images/notifications/iiitk-holiday-list.pdf">
                          Holiday List 2018
                        </a>
                      </li>
                      <li className="last-child">
                        <p className="p1">
                          <a href="../images/notifications/RSMS-2017-18-Advertise.pdf">
                            Award of Rajashri Shahu Maharaj Merit Scholarships
                          </a>
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <br />
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h4 className="panel-title">
                    <a
                      data-toggle="collapse"
                      data-parent="#accordion"
                      href="#Recruitment"
                    >
                      Recruitment
                    </a>
                  </h4>
                </div>
                <div id="Recruitment" className="panel-collapse collapse">
                  <div className="panel-body">
                    <h2>Recruitments</h2>
                    <hr />
                    <ul>
                      <li>
                        <a
                          href="../images/notifications/recruitment/Advertisement No. 8.pdf"
                          target="_blank"
                        >
                          Advertisement for Faculty/Non-Faculty Positions
                          (Published on 22.05.2019)
                        </a>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <a
                          href="../images/notifications/recruitment/Application form for faculty.pdf"
                          target="_blank"
                        >
                          Download Application form for Faculty
                        </a>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <a
                          href="../images/notifications/recruitment/application form for NF.pdf"
                          target="_blank"
                        >
                          Download Application form for Non-Faculty
                        </a>
                      </li>
                      <li>
                        <a
                          href="../images/notifications/corrigendum.pdf"
                          target="_blank"
                        >
                          Corrigendum for Advt. No.IIITK/Rectt/19-20/F-NF/08
                        </a>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <a
                          href="../images/notifications/Advertisement No.8_new.pdf"
                          target="_blank"
                        >
                          Details
                        </a>
                      </li>
                      <li>
                        <a
                          href="../images/notifications/recruitment/Recruitment Rules for NITs _BOG (1).pdf"
                          target="_blank"
                        >
                          Recruitment Rules for NITs _BOG{" "}
                          <img
                            src="../images/new.gif"
                            height="20px"
                            width="40px"
                          />
                        </a>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <a
                          href="../images/notifications/recruitment/Recruitment Rules for Faculty of NITs and IIEST (1).pdf"
                          target="_blank"
                        >
                          Recruitment Rules for Faculty of NITs and IIEST
                          <img
                            src="../images/new.gif"
                            height="20px"
                            width="40px"
                          />
                        </a>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <a
                          href="../images/notifications/recruitment/Application_Format_for_Faculty_Position_IIITK (1).pdf"
                          target="_blank"
                        >
                          Credit Point Calculation Sheet
                          <img
                            src="../images/new.gif"
                            height="20px"
                            width="40px"
                          />
                        </a>
                      </li>
                    </ul>
                    <hr />
                    <ul>
                      <li className="first-child">
                        <a href="../images/notifications/NotificationF_NF_07.pdf">
                          Notice regarding Recruitment of Faculty
                        </a>
                      </li>
                      <li>
                        <a href="../images/notifications/1.pdf">
                          Recruitment of Faculty
                        </a>
                      </li>
                      <li>
                        <a href="../images/notifications/2.pdf">
                          Application Form for Faculty
                        </a>
                      </li>
                      <li>
                        <a href="../images/notifications/3.pdf">
                          Recruitment of Technical Assistants
                        </a>
                      </li>
                      <li className="last-child">
                        <a href="../images/notifications/4.pdf">
                          Application Form for Non-Faculty
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <br />
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h4 className="panel-title">
                    <a
                      data-toggle="collapse"
                      data-parent="#accordion"
                      href="#tender"
                    >
                      Tender
                    </a>
                  </h4>
                </div>
                <div id="tender" className="panel-collapse collapse">
                  <div className="panel-body">
                    <h2>Tenders</h2>
                    <ul>
                      <li>
                        <a
                          href="../images/notifications/Retender for Xilinx softwareHardware (2).pdf
"
                          target="_blank"
                        >
                          Retender for Xilinx software Hardware
                        </a>
                      </li>
                      <li>
                        <a
                          href="../images/notifications/EOI-Final (New) (1).pdf
"
                          target="_blank"
                        >
                          EXPRESSION OF INTEREST FOR LEASING OF CAFETERIA INSIDE
                          IIIT KALYANI CAMPUS
                        </a>
                      </li>
                      <li>
                        <a
                          href="../images/notifications/Tally.pdf
"
                          target="_blank"
                        >
                          Notice Inviting Quotations for Tally 9 Gold GST Ready
                          Software
                        </a>
                      </li>
                      <li>
                        <a
                          href="../images/notifications/Tender for Manpower.pdf"
                          target="_blank"
                        >
                          TENDER NOTICE FOR ENLISTMENT FOR MANPOWER SERVICES
                        </a>
                      </li>
                      <li>
                        <a
                          href="../images/notifications/Extension.pdf"
                          target="_blank"
                        >
                          Extension of Date of Submission against Tender No.
                          IIITK/Tender/2019/98 dated 31/07/2019
                        </a>
                      </li>
                      <li>
                        <a
                          href="../images/notifications/Enquiry for Hiring of vehicles.pdf"
                          target="_blank"
                        >
                          Enquiry for Hiring of vehicles
                        </a>
                      </li>
                      <li>
                        <a
                          href="../images/notifications/Enquiry for Identity Cards (2).pdf"
                          target="_blank"
                        >
                          Enquiry for Identity Cards
                        </a>
                      </li>
                      <li>
                        <a
                          href="../images/notifications/Tender for Xilinx SoftwareHardware.pdf"
                          target="_blank"
                        >
                          Tender for Xilinx Software Hardware
                        </a>
                      </li>
                      <li>
                        <a
                          href="../images/notifications/Tender for lab items-July'19.pdf"
                          target="_blank"
                        >
                          Tender for Lab items-July'19
                        </a>
                      </li>
                      <li>
                        <a
                          href="../images/notifications/tender.pdf"
                          target="_blank"
                        >
                          Tender for technical equipments
                        </a>
                      </li>
                      <li>
                        <a
                          href="../images/notifications/Stationary Enquiry.pdf"
                          target="_blank"
                        >
                          {" "}
                          Notification regarding Stationary Enquiry
                        </a>
                      </li>
                      <li>
                        <a
                          href="../images/notifications/EOI Girls Hostel.pdf"
                          target="_blank"
                        >
                          NOTICE INVITING EXPRESSION OF INTEREST (EOI) FOR
                          HIRING OF BUILDING FOR BOY’S AND GIRL’S ACCOMMODATION
                          FOR 125-150 BOYS AND 30-40 GIRLS STUDENTS AT KALYANI
                        </a>
                      </li>
                      <li>
                        <a
                          href="../images/notifications/tenderans.pdf"
                          target="_blank"
                        >
                          Enquiry for answer scripts
                        </a>
                      </li>
                      <li>
                        <a href="../images/notifications/ad-2.docx">
                          Extension of the date of submission for tender.
                        </a>
                      </li>
                      <li>
                        <a href="../images/notifications/Tender for GPU server.docx">
                          Tender for GPU Server
                        </a>
                      </li>
                      <li>
                        <a href="../images/notifications/Tender for providing internet services.docx">
                          Tender for providing internet services
                        </a>
                      </li>
                      <li>
                        <a href="../images/notifications/Tender for RO based water purifier final.docx">
                          Tender for RO Water Purifier{" "}
                        </a>
                      </li>
                      <li>
                        <a href="../images/notifications/Open tender Enquiery December 2018.pdf">
                          Invitation of Bids for Purchase of Library Books at
                          IIIT Kalyani - December 2018
                        </a>
                      </li>
                      <li>
                        <a href="../images/notifications/Tender for TV,Geyser etc.2018.docx">
                          Tender for TV,Geyser etc.
                        </a>
                      </li>
                      <li>
                        <a href="../images/notifications/Tender for UPS for workstation.docx">
                          Tender for UPS for Workstation Under DST Project
                        </a>
                      </li>
                      <li>
                        <a href="../images/notifications/tender for desks.docx">
                          Tender for 3 seater Chairs with Desks for classroom
                        </a>
                      </li>
                      <li>
                        <a href="../images/notifications/Stationery-01092018.docx">
                          New Enquiry For Office Stationery Items
                        </a>
                      </li>
                      <li>
                        <a href="../images/notifications/tender for lab chairs.docx">
                          Tender for supply of chairs for computer laboratory
                        </a>
                      </li>
                      <li>
                        <a href="../images/notifications/Tender for workstation-23082018.docx">
                          Retender for Work Station under DST Project
                        </a>
                      </li>
                      <li>
                        <a href="../images/notifications/ReTender for software IDL-2108.docx">
                          {" "}
                          Retender for Software (IDL){" "}
                        </a>
                      </li>
                      <li>
                        <a href="../images/notifications/Stationery_Enquiry_Corrigendum-21-08.docx">
                          {" "}
                          Corrigendum for office stationery items{" "}
                        </a>
                      </li>
                      <li>
                        <a href="../images/notifications/tender_printer_latestr(5).docx">
                          Retender for Printer
                        </a>
                      </li>
                      <li>
                        <a href="../images/notifications/Tender for workstation DST 06-08-2018.docx">
                          Tender for Work Station under DST project.
                        </a>
                      </li>
                      <li>
                        <a href="../images/notifications/Stationary_Enquiry.docx">
                          Enquiry for Office Stationery Items.
                        </a>
                      </li>
                      <li>
                        <a href="../images/notifications/tender_printer_atestr13.8.2018.docx">
                          Tender for Supply of Printer cum Copier cum Scanner.
                        </a>
                      </li>
                      <li>
                        <a href="../images/notifications/IDL.docx">
                          Extension of Date of submission against tender for
                          Software (IDL Latest Version)
                        </a>
                      </li>
                      <li>
                        <a href="../images/notifications/Tender for software (3).docx">
                          Tender for Software (IDL latest version)
                        </a>
                      </li>
                      <li>
                        <a href="../images/notifications/Tender for workstation.docx">
                          Tender for Workstation
                        </a>
                      </li>
                      <li>
                        <a href="../images/notifications/New Tender for Mess (2).docx">
                          Tender for Mess Services
                        </a>
                      </li>
                      <li>
                        <a href="../images/notifications/Tender for software (2).docx">
                          Tender for Software
                        </a>
                      </li>
                      <li>
                        <a href="../images/notifications/additional-items-for-MC-lab.docx">
                          Tender for Procurement of Additional Electronics Items
                        </a>
                      </li>
                      <li>
                        <a href="../images/notifications/Retender-for-software.docx">
                          Tender for Softwares New
                        </a>
                      </li>
                      <li>
                        <a href="../images/notifications/Tender-for-software.docx">
                          Tender for Softwares
                        </a>
                      </li>
                      <li>
                        <a href="../images/notifications/Tender-for-DPS.docx">
                          Tender for Dual Power Supply
                        </a>
                      </li>
                      <li>
                        <a href="../images/notifications/Tender-sprts.docx">
                          Tender for Sports Items
                        </a>
                      </li>
                      <li>
                        <a href="../images/notifications/New-tender-electronic-items-dec17-1.docx">
                          Tender for Electronics Items
                        </a>
                      </li>
                      <li>
                        <a href="../images/notifications/tender-printer-latestr-1.docx">
                          Tender for Printers
                        </a>
                      </li>
                      <li>
                        <a href="../images/notifications/extension-of-tender-date.docx">
                          Extension of date of receiving Tenders
                        </a>
                      </li>
                      <li>
                        <a href="../images/notifications/Announcement-of-Tender-opening-date-time.docx">
                          Announcement of Tender opening Date and Time
                        </a>
                      </li>
                      <li>
                        <a href="../images/notifications/Tender-Water-Cooler.docx">
                          Tender for Water-cooler-cum-Purifier (New)
                        </a>
                      </li>
                      <li>
                        <a href="../images/notifications/eoi-final.doc">
                          EOI for Cafeteria
                        </a>
                      </li>
                      <li>
                        <a href="../images/notifications/Tender-For-Guest-House-Items..docx">
                          Tender for Guest House Items
                        </a>
                      </li>
                      <li>
                        <a href="../images/notifications/Manpower-requirement-Tender-FINAL-Copy.docx">
                          Tender for Manpower
                        </a>
                      </li>
                      <li>
                        <a href="../images/notifications/Final-mess-tender.docx">
                          Tender for Mess Services
                        </a>
                      </li>
                      <li>
                        <a href="../images/notifications/Tender-Document-printer.docx">
                          Tender for Printer (New)
                        </a>
                      </li>
                      <li>
                        <a href="../images/notifications/Extension-of-Date-of-Submission-a.docx">
                          Extension of Date of Submission against Tender No.
                          IIITK/RFP/2017/54 dated 04/10/2017
                        </a>
                      </li>
                      <li>
                        <a href="../images/notifications/Extension-of-Date-of-Submission-a.docx">
                          Extension of Date of Submission against Tender No.
                          IIITK/Tender/2017/52 dated 04/10/2017
                        </a>
                      </li>
                      <li>
                        <a href="../images/notifications/49_tender-Answescript_-2017.docx">
                          Tender for Printing Answer-scripts.
                        </a>
                        &nbsp;(New)
                      </li>
                      <li>
                        <a href="../images/notifications/Tender-Water-Cooler.docx">
                          Tender for Water Cooler-cum-purifiers.
                        </a>
                      </li>
                      <li>
                        <a href="../images/notifications/Tender-Document.docx">
                          Tender for Printer.
                        </a>
                      </li>
                      <li>
                        <a href="../images/notifications/Tender-UPS.docx">
                          Tender for UPS.
                        </a>
                      </li>
                      <li>
                        <a href="../images/notifications/tender-Antivirus.docx">
                          Tender for Antivirus Software.
                        </a>
                      </li>
                      <li>
                        <a href="../images/notifications/51_tender-Stat_2017.pdf">
                          Tender for Supply of Office Stationaries.
                        </a>
                      </li>
                      <li>
                        <a href="../images/notifications/49_tender-Answescript_-2017.pdf">
                          Tender for Printing Answerscripts.
                        </a>
                      </li>
                      <li>
                        <a href="../images/notifications/Tender-LABE-urgent-28.8.docx">
                          Tender for Supply of Electronics Items (URGENT
                          LATEST).
                        </a>
                      </li>
                      <li>
                        <a href="../images/notifications/Tender-LABE-urgent-latest.docx">
                          Tender for Supply of Electronics Items (URGENT).
                        </a>
                      </li>
                      <li>
                        <a href="../images/notifications/Quotation-for-newspaper_mag.pdf">
                          Tender for Newspapers and Magazines.
                        </a>
                      </li>
                      <li>
                        <a href="../images/notifications/Tender-LABE.docx">
                          Tender for Lab Equipment.
                        </a>
                        &nbsp;
                        <a href="../images/notifications/corrigendum.docx">
                          Corrigendum.
                        </a>
                      </li>
                      <li>
                        <a href="../images/notifications/Download-Notice-inviting-tender-for-purchase-of-Desktop-Computer.pdf">
                          Tender for Desktop Computers
                        </a>
                        ,{" "}
                        <a href="../images/notifications/Addendum.pdf">
                          Addendum
                        </a>
                        .
                      </li>
                      <li>
                        <a href="../images/notifications/Tender-for-Bus.docx">
                          Tender for Bus Service
                        </a>
                      </li>
                      <li className="last-child">
                        <a href="../images/notifications/Tender-Document-for-Printer.pdf">
                          Tender for Printers
                        </a>
                        .{" "}
                        <a href="../images/notifications/Corrigendum-1.pdf">
                          Corrigendum.
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <br />
            </div>
          </div>
        </div>
        <br />
        &nbsp;
        {/* footer starts */}
        {/*?php //include '../footer.php';?*/}
      </>
    </div>
  );
};

export default downloads;
