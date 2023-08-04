'use client'

import React from 'react'
import NavBar from '../../../../sections/appbar/secondNav'
import Footer from '../../../../sections/footer/footer'
import '../../../../../styles/phdadmission/phdadmission.css'
const page = () => {
  return (
    <React.Fragment>
      <NavBar />
      <div className="flex-set main-container">
        <h1>Admissions</h1>
        <div className="heading1">
          <p>IIIT Kalyani Students come from across India, representing diverse experiences, backgrounds and cultures.</p>
        </div>
        <div className="heading2">
          <p>The academic structure of IIIT Kalyani exhibits the diversity, comprehensiveness, and depth befitting an institution of its age and stature. 
            The programme/course offered at the institute have the flexibility to evolve and change in response to new requirements.
           They serve the dual purpose of building a solid foundation of knowledge and of enhancing confidence, creativity and innovation in its students.<br />
           A unique attribute of IIIT Kalyani's academic structure is the autonomy enjoyed by the faculty in designing and structuring their curriculum and courses .
           A favourable student-teacher ratio ensures productive, personal contact between the student and the teacher.<br/>
           
          </p>
        </div>
      </div>
      {/* <Footer/> */}
    </React.Fragment>
  )
}

export default page