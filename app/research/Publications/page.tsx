"use client";
import NavBar from "../../sections/appbar/secondNav";
import Footer from '../../sections/footer/footer';
import "../../../styles/Research/Publications/publications.css";
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { useEffect } from "react";


const Publications = () => {
  useEffect(() => {
    document.title =
      "Publications | Indian Institute of Information Technology, Kalyani";
  }, []);
  return (
    <>
      <NavBar />
      <div className="fluid-center publications-main-page">
        <h1>Publications</h1>
        <div className="fluid-center publications-info">
          <div className="fluid-center publications-info-students">
            <h2>Publications by Students</h2>
            <p>Omkar Ajnadkar authored a paper Sarcasm Detection of Media Text using Deep Neural Networks under the supervision of Dr. Sanjay Chatterjee, published in Computational Intelligence and Machine Learning, Springer (Presented in ICACNI-2019). The paper proposes bidirectional LSTM, CNN, and attention mechanism-based approach for detecting sarcasm in social media text as well as news headlines.</p>
            <p>Vaibhav Shukla authored a paper titled Automatic Humor Detection from Code-Mixed Tweets under the supervision of Dr. Tirthankar Dasgupta of TCS Innovation Labs that was published in FIRE ‘19: Proceedings of the 11th Forum for Information Retrieval Evaluation.</p>
            <p>Omkar Ajnadkar, Aman Jaiswal, Gourav Sharma, P Chandra Shekhar, Arunkumar Soren authored a paper News Background Linking using Document Similarity Techniques under the supervision of Dr. Tirthankar Dasgupta that was published in Computational Intelligence and Machine Learning, Springer (Presented in ICACNI-2019).</p>
            <a href='https://iiitkalyani.ac.in/images/research/publication%20students.pdf' target="_blank" rel="noreferrer" className="fluid-center publications-btn">
              Year 2016-2019
            </a>
          </div>
          <div className="fluid-center publications-info-students publications-info-faculty">
            <h2>Publications by Faculty</h2>
            <a href='https://iiitkalyani.ac.in/images/Expert%20Committee_webpage.pdf' target="_blank" rel="noreferrer" className="fluid-center publications-btn">
              Year 2019
            </a>
            <a href='https://iiitkalyani.ac.in/images/Expert%20Committee_webpage.pdf' target="_blank" rel="noreferrer" className="fluid-center publications-btn">
              Year 2018
            </a>
            <a href='https://iiitkalyani.ac.in/images/Expert%20Committee_webpage.pdf' target="_blank" rel="noreferrer" className="fluid-center publications-btn">
              Year 2017
            </a>
            <a href='https://iiitkalyani.ac.in/images/Expert%20Committee_webpage.pdf' target="_blank" rel="noreferrer" className="fluid-center publications-btn">
              Year 2016
            </a>
            <a href='https://iiitkalyani.ac.in/images/Expert%20Committee_webpage.pdf' target="_blank" rel="noreferrer" className="fluid-center publications-btn">
              Year 2015
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Publications;
