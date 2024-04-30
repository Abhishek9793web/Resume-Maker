import './App.css';
import React from 'react';

import { FaTrophy, FaMedal, FaStar, FaArrowUp } from 'react-icons/fa';
import image from "../assets/images/5052521.jpg"
import midimg from "../assets/images/6144672.png"
import ads from "../assets/images/5913718.jpg"
import resume from "../assets/images/resume img.jpg"
import resume2 from "../assets/images/resmue img2.jpg"
import { FaAngleRight } from "react-icons/fa";
import { AiFillTwitterCircle, AiFillInstagram, AiFillSkype } from "react-icons/ai";
import { BsFacebook, BsLinkedin } from "react-icons/bs";



  

 


function Home() {
  return (
    <div>



      <section className="resume-options">
        <div className="option">
          <img className="home-image" src={image} alt="logo" />
          <div className='option1'>
            <h2><b>Create a New Resume</b></h2>
            <p><b>Build your new resume from scratch.</b></p>
            <b><a href="./Templates">Build Your Resume !</a></b>
          </div>

          <div className="option2">
            <h2><b>Edit Existing Resume</b></h2>
            <p className='p2'> Modify and update your existing resume.</p>
            <b><a className='a2' href="edit.html">Edit Resume</a></b>
          </div>
        </div>
      </section>
      <section className="achievements">
        <h2>Achievements</h2>
        <img className="mid-image" src={midimg} alt="mid" />
        <ul>
          <li>
            <FaTrophy /> Over 10,000 satisfied customers
          </li>
          <li>
            <FaMedal /> Featured in top job search platforms
          </li>
          <li>
            <FaStar /> Customizable templates for all industries
          </li>
        </ul>
      </section>

      <section className="resume-images">
        <h2>Sample Resumes</h2>

        <div className="image-container">
          <a   href="/Templates" ><img   src={resume} alt="details-1.png" /></a>
          <a  href="/Templates" ><img src={resume2} alt="details-1.png" /></a>
          <a href="/Templates" ><img src="https://i.pinimg.com/736x/a0/27/b9/a027b9488c1c93975a3596fd43223b0a.jpg" alt="details-3.png" /></a>
          <a href="/Templates" ><img src="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/370/persistent-resource/stockholm-resume-templates.jpg" alt="details-2.png" /></a>
          <a href="/Templates" ><img src="https://cdn.enhancv.com/simple_double_column_resume_template_aecca5d139.png" alt="details-3.png" /></a>
          <a href="/Templates"  ><img src="https://www.resumehelp.com/wp-content/uploads/2023/02/Empire-Resume-Template.webp" alt="details-3.png" /></a>
          <a href="/Templates"  ><img src="https://www.resumehelp.com/wp-content/uploads/2023/02/Empire-Resume-Template.webp" alt="details-3.png" /></a>
          <a href="/Templates" ><img src="https://i.pinimg.com/736x/a0/27/b9/a027b9488c1c93975a3596fd43223b0a.jpg" alt="details-3.png" /></a>
        </div>


      </section>
      <section className="ads">
        <h2>Advertisements</h2>
        <div className="ad">
          {/* <img src="https://static.wixstatic.com/media/72c0b2_29d445b883d24862a52bfe362f1d746f~mv2.jpg/v1/fill/w_987,h_564,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/72c0b2_29d445b883d24862a52bfe362f1d746f~mv2.jpg" alt="Resume Ad 1" /> */}
          <img className='img1' src={ads} alt="Resume Ad 1" />
          <p>Get noticed by employers with a professionally crafted resume.</p>
          <a href="./About">Learn More</a>
        </div>
        <div className="ad">
          <img src="https://cdn.gotresumebuilder.com/Content/Images/v3/hero_resume_1.png" alt="Resume Ad 2" />
          <p><b>Unlock your career potential with our resume builder.</b></p>
          <a href="./Templates">Get Started</a>
        </div>
      </section>
      <section className='footer'>
    
        <div class="footer-top">
          <div class="box">
            <div class="row">

              <div class="col-lg-3 col-md-6 footer-contact">
                <h3>Resume Maker</h3>
                <p>
                  GLA UNIVERSITY <br />
                  mathura, UP 281406<br />
                  INDIA <br /><br />
                  <strong>Phone:</strong> +1 5589 55488 55<br />
                  <strong>Email:</strong> resumeMake@gmail.com<br />
                </p>
              </div>

              <div class="col-lg-3 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li><FaAngleRight /> <a href="#">Home</a></li>
                  <li><FaAngleRight /> <a href="#">About us</a></li>
                  <li><FaAngleRight /> <a href="#">Services</a></li>
                  <li><FaAngleRight /> <a href="#">Terms of service</a></li>
                  <li><FaAngleRight /> <a href="#">Privacy policy</a></li>
                </ul>
              </div>

              <div class="col-lg-3 col-md-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li><FaAngleRight /><a href="#">Web Design</a></li>
                  <li><FaAngleRight /> <a href="#">Web Development</a></li>
                  <li><FaAngleRight /> <a href="#">Product Management</a></li>
                  <li><FaAngleRight /><a href="#">Marketing</a></li>
                  <li><FaAngleRight /> <a href="#">Graphic Design</a></li>
                </ul>
              </div>

              <div class="col-lg-3 col-md-6 footer-links">
                <h4>Our Social Networks</h4>
                <p>Fallow our social media handle for more update.make batter create batter in your life.(o!o)</p>
                <div class="social-links mt-3">
                  <a href="/" class="twitter"><AiFillTwitterCircle /></a>
                  <a href="/" class="facebook"><BsFacebook /></a>
                  <a href="/" class="instagram"><AiFillInstagram /></a>
                  <a href="/" class="google-plus"><AiFillSkype /></a>
                  <a href="/" class="linkedin"><BsLinkedin /></a>
                </div>
              </div>
            </div>

            <div className="copyright">
              <p>&copy; {new Date().getFullYear()} Resume Maker. All rights reserved.</p>
              <p> Designed by <a href="https://github.com/Abhishek9793web">Resume maker</a></p>
            </div>
          </div>
          <a href="/" className="back-to-top "><FaArrowUp /></a>
        </div>
        

      </section>
      

    </div>
  );
}

export default Home;
