"use client";
import { useEffect } from "react";
import NavBar from "../../sections/appbar/secondNav";
import Footer from '../../sections/footer/footer';
import "../../../styles/research/publications/publications.css";
import publicationData from './data'

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
                {publicationData.students.map((item)=>{
                   return(
                    <a key={item.id} href={item.link} target="_blank" rel="noreferrer" className="fluid-center publications-btn">
                      {item.title}
                    </a>
                   )
                })}
            </div>
            <div className="fluid-center publications-info-students publications-info-faculty">
                <h2>Publications by Faculty</h2>
                {publicationData.faculty.map((item)=>{
                  return(
                    <a key={item.id} href={item.link} target="_blank" rel="noreferrer" className="fluid-center publications-btn">
                      {item.title}
                    </a>
                  )
                })}
            </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Publications;
