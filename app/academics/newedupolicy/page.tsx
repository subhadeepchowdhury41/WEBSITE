'use client'
import React from 'react'
import NavBar from '../../sections/appbar/secondNav'
import Footer from '../../sections/footer/footer'
import '../../../styles/newedupolicy/newedupolicy.css'
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import { useEffect } from 'react'
const page = () => {
  useEffect(() => {
    document.title =
      "New National Education Policy 2020";
  }, []);
  return (
    <React.Fragment>
      <NavBar />
      <div className="fluid-center nisp-main-page">
        <h1>New National Education Policy-2020</h1>
        <div className="fluid-center nisp-buttons">
          <a href='/neppdf/NEP-English.pdf' target="_blank" rel="noreferrer" className="fluid-center nisp-btn">New National Education Policy 2020 (English)
            <TextSnippetIcon style={{ 'color': 'rgb(6, 50, 74)', 'fontSize': 'max(25px,2.5vw)', marginTop: '5%' }} />
          </a>
          <a href='/neppdf/NEP-Hindi.pdf' target="_blank" rel="noreferrer" className="fluid-center nisp-btn">New National Education Policy 2020 (Hindi)
            <TextSnippetIcon style={{ 'color': 'rgb(6, 50, 74)', 'fontSize': 'max(25px,2.5vw)', marginTop: '5%' }} />
          </a>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default page