import React from 'react'
import Footer from '../components/Footer'

const AboutUs = () => {
  return (
   <>
   <div className="container-fluid  brand-bg-black p-0 m-0">
   <div className="row mx-5">
        <h1 className=" mb-4 brand-text-green text-center my-5">About Us</h1>
        <p className=" text-white">
          At <strong className="brand-text-green">AUGMEN PRO</strong>, we are on a mission to break the cycle where students take loans for education yet struggle to secure jobs or build their careers.
          Through our <span className="text-primary">संस्कारी भारत</span> mission, we integrate career planning, universal skills training, robotics labs, and modern education
          to ensure real-world skills and financial independence.
        </p>
      </div>
      
      <div className="row mt-5 mx-5">
        <h3 className=" brand-text-green">Who We Are</h3>
        <p className=" text-white">
          We are a team of passionate educators, industry experts, and mentors with experience from top universities and diverse industries.
          Our goal is to provide career-focused courses, skill-based training, and hands-on learning modules to unlock opportunities for students.
        </p>
      </div>
      
      <div className="row mt-5 mx-5">
        <h3 className=" brand-text-green">Our Vision</h3>
        <p className=" text-white">
          We envision an India where no student takes a loan for education without a clear path to success. Our focus is on empowering youth to earn, innovate,
          and lead by integrating <span className="text-primary">robotics, AI, automation</span>, and career-focused learning.
        </p>
      </div>
      
      <div className="row mt-5 mx-5">
        <h3 className=" brand-text-green">What We Offer</h3>
        <ul className=" text-white mx-2">
          <li><strong>Robotics Lab & Modern Education</strong> – AI, IoT, and automation integrated into school education.</li>
          <li><strong>Career Planning & Skill-Based Learning</strong> – Practical courses to help students start earning.</li>
          <li><strong>Universal Skills Training</strong> – Covering entrepreneurship, coding, financial literacy, and more.</li>
          <li><strong>Real-World Learning</strong> – Industry-focused, hands-on training beyond textbooks.</li>
          <li><strong>Empowerment Through <span className="text-primary">संस्कारी भारत</span></strong> – Merging technical expertise with values.</li>
        </ul>
      </div>
      
      <div className="row mt-5 mx-5">
        <h3 className=" brand-text-green">Why Choose Us?</h3>
        <ul className=" text-white mx-2">
          <li><strong>No More Unemployment</strong> – Every course ensures employability.</li>
          <li><strong>Practical & Future-Ready Skills</strong> – Real-world applications, not just theory.</li>
          <li><strong>Industry Experts & Mentorship</strong> – Learn directly from experienced professionals.</li>
          <li><strong>A Mission for Change</strong> – Education with financial independence and career growth.</li>
        </ul>
      </div>
      
      <div className="row mt-5 mx-5">
        <h3 className=" brand-text-green">Join Us</h3>
        <p className=" text-white">
          At <strong>AUGMEN</strong>, we are not just providing education—we are building a generation of leaders, innovators, and problem-solvers.
          Join us in reshaping the future of education and making <span className="text-primary">संस्कारी भारत</span> a reality for every student!
        </p>
      </div>

      <Footer/>
   </div>
   </>
  )
}

export default AboutUs