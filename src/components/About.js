// About.js
import React from 'react';
import './App.css'; // Import your CSS file for this page

import { MdHelpOutline,MdOutlineEmail } from "react-icons/md";
import { CgChevronDown, CgChevronUp } from "react-icons/cg";
import { GrLocation } from "react-icons/gr";
import { IoCallOutline } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa";

import abhishek from '../assets/images/abhishek.jpg';
import aditya from '../assets/images/aditya.jpg';
import awasthi from '../assets/images/anuja.png';
import img from '../assets/images/hero-img.jpg';
import google from '../assets/images/google.png';


function AboutPage() {
  return (

    <div className="about-page">

      <header>
        <h2>About Us</h2>
      </header>


      <section className="about-us-section">
        <img className='img-1' src={img} alt="Team Member 1" />

        <div className="header-1">

          <p>
            We are a group of passionate developers who have been working together to create an application that will revolutionize the way we interact with
            A Resume Maker is a tool or application designed to assist individuals in creating professional and visually appealing resumes. Here are some key features and aspects you might want to consider for your Resume Maker project:

            Our journey began with a shared passion for technology and design among a group of ambitious individuals, including you, Abhishek Goswami. As second-year B.Tech CS students specializing in Blockchain and Cryptocurrency, we recognized the need for a tool that could empower individuals in a competitive job market.
             we set out to create a revolutionary Resume Maker. Our technical prowess and creative instincts came together to form a brand that stands for innovation, usability, and career advancement.
          </p>
        </div>
        <div className="header-2">
          <h2>Our Brand</h2>

          <p>
            Our journey began with a shared passion for technology and design among a group of ambitious individuals, including you, Abhishek Goswami. As second-year B.Tech CS students specializing in Blockchain and Cryptocurrency, we recognized the need for a tool that could empower individuals in a competitive job market.
            Driven by a collective vision to bridge the gap between skills and opportunities, we set out to create a revolutionary Resume Maker. Our technical prowess and creative instincts came together to form a brand that stands for innovation, usability, and career advancement.
          </p>

        </div>
        <div>
          <img className='img-2' src={img} alt="Team Member 2" />
        </div>

        <div className='header-3'>

          <h2>Brand Values</h2>

          <ul>
            <li><strong>Innovation:</strong> We are committed to pushing the boundaries of technology to create cutting-edge solutions.</li>
            <li><strong>User-Centric Design:</strong> At the core of our values is a commitment to user experience.</li>
            <li><strong>Integrity:</strong> We uphold the highest standards of integrity and authenticity.</li>
            <li><strong>Continuous Improvement:</strong> The job market is dynamic, and so are we.</li>
          </ul>
        </div>
        <div className='header-4'>
          <h2>Brand Mission</h2>

          <p>
            Our mission is to empower job seekers, like yourself, with the tools they need to present their skills and experiences in the best possible light. We understand the challenges individuals face in a competitive job market, and we aim to level the playing field by providing a Resume Maker that goes beyond the basics.
          </p>
        </div>
        <div className='header-5'>
          <h2>How We Help Job Seekers Enhance Their Careers</h2>

          <ol >
            <li><strong>Professionalism:</strong> Our Resume Maker offers a range of professionally designed templates.</li>
            <li><strong>Customization:</strong> We believe that every individual is unique, and so should be their resume.</li>
            <li><strong>Guidance:</strong> We provide valuable guidance throughout the resume creation process.</li>
            <li><strong>Technological Edge:</strong> Leveraging your expertise in full-stack development and design.</li>
            <li><strong>Blockchain Security:</strong> For an added layer of security and authenticity, our tool leverages blockchain .</li>
          </ol>
        </div>
        <div>
        <p>
          In essence, our brand is not just about creating resumes; it's about empowering individuals to take control of their careers and confidently pursue their professional aspirations. We are here to be a catalyst for your success in the ever-evolving landscape of the job market.
        </p>
        </div>

      </section>



      <section className="why-choose-us-section">
        <h2>Why Choose Us</h2>
        <ui>
          <li>
            Easy-to-use templates
          </li>
          <li>
            Professional results
          </li>
          <li>
            Customize your resume
          </li>
          <li>
            Batter design
          </li>

        </ui>
        <div className="user-testimonials">
          <blockquote>
            Display quotes from satisfied users to build trust.
          </blockquote>
          <blockquote>
            Display quotes from satisfied users to build trust.
          </blockquote>
          <blockquote>
            Display quotes from satisfied users to build trust.
          </blockquote>

        </div>
      </section>

      <section className="meet-the-team-section">

        <div className="team-member">
          <h2><u>Meet the Team</u></h2>

          <img src={abhishek} alt="Team Member 1" />
          <h3>Abhishek Goswami</h3>
          <h4> Full Stack Developer and Designer | B.Tech CS (Blockchain & Cryptocurrency) Student</h4>
          <p>Bio: Hello! I'm Abhishek Goswami, a passionate second-year B.Tech CS student specializing in Blockchain and Cryptocurrency at GLA UNIVERSITY.
            I am not just limited to coding; I am a versatile professional, combining my skills as a Full Stack Developer and Designer.
            In my spare time, I am engrossed in a project close to my heart - the development of a Resume Maker. Leveraging my skills in both design and development,
            I aim to create a tool that not only showcases technical prowess but also reflects a keen eye for aesthetics. This project exemplifies my belief in the marriage of form and function in the digital landscape. </p>


          <img src={aditya} alt="Team Member 3" />
          <h3>Aditya Agarwal</h3>
          <h4> Frontend Developer | B.Tech CS (Blockchain & Cryptocurrency) Student</h4>
          <p>Bio: Hello! I'm Aditya Agarwal, a passionate second-year B.Tech CS student specializing in Blockchain and Cryptocurrency at GLA UNIVERSITY.
          I aim to create a tool that not only showcases technical prowess but also reflects a keen eye for aesthetics.
               
          </p>


          <img src={awasthi} alt="Team Member 1" />
          <h3>Anuj Awasthi</h3>
          <h4>Role:DataBase Developer</h4>
          <p>Bio: I'm Anuj Awasthi, a passionate second-year B.Tech CS student specializing in Blockchain and Cryptocurrency at GLA UNIVERSITY.
          I aim to create a tool that not only showcases technical prowess but also reflects a keen eye for aesthetics.
               </p>


          {/* Add more team members */}
        </div>



      </section >

      <section className="our-process-section">

        <h2>Our Process</h2>
        <ui>
          <li>
            Step 1: Fill Your Details
          </li>
          <li>
            Step 2: Choose a Template
          </li>
          <li>
            Step 3: Customize Your Resume
          </li>
          <li>
            Step 4: Download Your Resume
          </li>
          {/* Add more steps */}
        </ui>
        <button  className='button1'><a href="./Templates">Build Your Resume</a></button>

      </section>

      <section className="partnerships-section">
        <h2>Our Partners</h2>
        <ul>
          <img className='img3' src={google} alt="Team Member 2" />
          <img className='img3' src={google} alt="Team Member 2" />
          <img className='img3' src={google} alt="Team Member 2" />
        </ul>
        {/* Display logos of organizations or platforms you've partnered with */}
      </section>

      {/* FAQ  SECTION*/}
      <section className="faq section-bg">
        <div className="faq-container" data-aos="fade-up">

          <div className="section-title">
            <h2>Frequently Asked Questions</h2>
            <p>Remember that these are general guidelines, and specific details may vary based on your industry and personal circumstances. Always tailor your resume to suit your individual needs and the requirements of the job you're applying for.</p>
          </div>

          <div className="accordion-list">

            <ul>
              <li data-aos="fade-up" data-aos-delay="100">
                <MdHelpOutline className='icon-help' /><a data-bs-toggle="collapse" data-bs-target="#accordion-list-2" className="collapsed">What is the purpose of a resume? <CgChevronDown className='icon-show' /><CgChevronUp className='icon-close' /></a>
                <div id="accordion-list-2" className="collapse" data-bs-parent=".accordion-list">
                  <p>
                    The primary purpose of a resume is to secure a job interview. It serves as a marketing tool for job seekers to present their qualifications and experiences to potential employers in a clear and compelling manner.
                  </p>
                </div>
              </li>

              <li data-aos="fade-up" data-aos-delay="100">
                <MdHelpOutline className='icon-help' /><a data-bs-toggle="collapse" data-bs-target="#accordion-list-2" className="collapsed"> What should be included in a resume?<CgChevronDown className='icon-show' /><CgChevronUp className='icon-close' /></a>
                <div id="accordion-list-2" className="collapse" data-bs-parent=".accordion-list">
                  <p>
                    A resume typically includes the following sections:

                    Contact Information
                    Resume Summary or Objective
                    Work Experience
                    Education
                    Skills
                    Certifications (if applicable)
                    Projects or Achievements (if applicable)
                    Additional Sections (such as volunteer work, languages, or hobbies)
                  </p>
                </div>
              </li>

              <li data-aos="fade-up" data-aos-delay="200">
                <MdHelpOutline className='icon-help' /> <a data-bs-toggle="collapse" data-bs-target="#accordion-list-3" className="collapsed"> How long should a resume be? <CgChevronDown className='icon-show' /><CgChevronUp className='icon-close' /></a>
                <div id="accordion-list-3" className="collapse" data-bs-parent=".accordion-list">
                  <p>
                  In most cases, a resume should be one to two pages in length. It should be concise and focused on highlighting relevant qualifications and experiences.
                  </p>
                </div>
              </li>

              <li data-aos="fade-up" data-aos-delay="300">
                <MdHelpOutline className='icon-help' /> <a data-bs-toggle="collapse" data-bs-target="#accordion-list-4" className="collapsed">What is the difference between a resume and a CV? <CgChevronDown className='icon-show' /><CgChevronUp className='icon-close' /></a>
                <div id="accordion-list-4" className="collapse" data-bs-parent=".accordion-list">
                  <p>
                  A resume is a brief summary of a person's work experience, skills, and education, typically limited to one or two pages. On the other hand, a Curriculum Vitae (CV) is a more comprehensive document that provides a detailed overview of academic and professional achievements, publications, presentations, and more. CVs are often longer than resumes.
                  </p>
                </div>
              </li>

              <li data-aos="fade-up" data-aos-delay="400">
                <MdHelpOutline className='icon-help' /> <a data-bs-toggle="collapse" data-bs-target="#accordion-list-5" className="collapsed">How often should I update my resume? <CgChevronDown className='icon-show' /><CgChevronUp className='icon-close' /></a>
                <div id="accordion-list-5" className="collapse" data-bs-parent=".accordion-list">
                  <p>
                  Regularly update your resume, especially when you gain new skills, complete educational programs, or achieve significant milestones in your career. Keeping your resume up-to-date ensures that you can quickly apply for new opportunities when they arise.
                  </p>
                </div>
              </li>
            </ul>

          </div>

        </div>
      </section>

     { /*  ======= Contact Section =======  */}
    <section id="contact" className="contact">
      <div className="about-box" data-aos="fade-up">

        <div className="section-title">
          <h2>Contact</h2>
          <p>hi</p>
        </div>

        <div className="row">

          <div className="col-lg-6">
            <div className="row">
              <div className="col-lg-6 info">
              <GrLocation  className='i'/>
                <h4>Address</h4>
                <p>gla university<br/>mathura, up 281406</p>
              </div>
              <div className="col-lg-6 info">
              <IoCallOutline className='i'/>
                <h4>Call Us</h4>
                <p>+916387XXXXXX<br/>+912490XXXXX</p>
              </div>
              <div className="col-lg-6 info">
              <MdOutlineEmail className='i' />
                <h4>Email Us</h4>
                <p>abhishekcs2022@gmail.com<br/>info@example.com</p>
              </div>
              <div className="col-lg-6 info">
              <FaRegClock className='i'/>
                <h4>Working Hours</h4>
                <p>Mon - Fri: 10AM to 6PM<br/>sunday: 10AM to 1PM</p>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <form action="./contact.php" method="post" role="form" class="php-email-form" data-aos="fade-up">
              <div className="form-group">
                <input placeholder="Your Name" type="text" name="name" class="form-control" id="name" required/>
              </div>
              <div className="form-group mt-3">
                <input placeholder="Your Email" type="email" class="form-control" name="email" id="email" required/>
              </div>
              <div className="form-group mt-3">
                <input placeholder="Subject" type="text" class="form-control" name="subject" id="subject" required/>
              </div>
              <div className="form-group mt-3">
                <textarea placeholder="Message" class="form-control" name="message" rows="5" required></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center"><button type="submit">Send Message</button></div>
            </form>
          </div>

        </div>

      </div>
    </section>

      <footer>
        <p>
           &copy; {new Date().getFullYear()} Resume Builder. All rights reserved.
          Created  <i className="fa fa-heart"></i> by
          <a target="_blank" href="/">Resume Maker</a>
          .
        </p>
      </footer>
    </div >
  );
}

export default AboutPage;
