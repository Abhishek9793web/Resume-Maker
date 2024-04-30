// Templates.js
import React from "react";
import resume1 from "../assets/images/resume img.jpg"
import resume2 from "../assets/images/resmue img2.jpg"
import Header from "./Header"
import './App.css'

function Templates() {

  return (
    <div className="App">

      <Header/>
      <section className="resume-images">
        <h2>Templates</h2>

        <div className="img-Template">
          <a href="/Template1" ><img src={resume1} alt="details-1.png" /></a>
          <a href="/Template2" ><img src={resume2} alt="details-3.png" /></a>
          <a href="/Templates"  ><img src="https://cdn.enhancv.com/simple_double_column_resume_template_aecca5d139.png" alt="details-3.png" /></a>
          <a href="/Templates"  ><img src="https://www.resumehelp.com/wp-content/uploads/2023/02/Empire-Resume-Template.webp" alt="details-3.png" /></a>
        </div>


      </section>

    </div>


  );


}

export default Templates;
