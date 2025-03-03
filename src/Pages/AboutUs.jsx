import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

const AboutUs = () => {
  return (
    <>
      <div className="container-fluid  brand-bg-black p-0 m-0">
        <Header/>

        <div className="row mt-5 mx-lg-5 mx-0 d-flex justify-content-center">
          <div className="col-10">
            <h3 className="mb-5 brand-text-green text-center fs-3rem">Who We Are</h3>
            <p className=" text-white">
              We are a team of passionate educators, industry experts, and mentors with experience from top universities and diverse industries.
              Our goal is to provide career-focused courses, skill-based training, and hands-on learning modules to unlock opportunities for students.
            </p>
          </div>
        </div>

        <div className="row mt-5 mx-lg-5 mx-0 d-flex justify-content-center">
          <div className="col-10">
            <h3 className="mb-5 brand-text-green text-center fs-3rem">Our Vision</h3>
            <p className=" text-white">
              We envision an India where no student takes a loan for education without a clear path to success. Our focus is on empowering youth to earn, innovate,
              and lead by integrating <span className="text-primary">robotics, AI, automation</span>, and career-focused learning.
            </p>
          </div>
        </div>

        <div className="row mt-5 mx-lg-5 mx-0 d-flex justify-content-center">
          <div className="col-10">
            <h3 className="mb-5 brand-text-green text-center fs-3rem">What We Offer</h3>
            <ul className=" text-white mx-2">
              <li><strong>Robotics Lab & Modern Education</strong> – AI, IoT, and automation integrated into school education.</li>
              <li><strong>Career Planning & Skill-Based Learning</strong> – Practical courses to help students start earning.</li>
              <li><strong>Universal Skills Training</strong> – Covering entrepreneurship, coding, financial literacy, and more.</li>
              <li><strong>Real-World Learning</strong> – Industry-focused, hands-on training beyond textbooks.</li>
              <li><strong>Empowerment Through <span className="text-primary">संस्कारी भारत</span></strong> – Merging technical expertise with values.</li>
            </ul>
          </div>
        </div>

        <div className="row mt-5 mx-lg-5 mx-0 d-flex justify-content-center">
          <div className="col-10">
            <h3 className="mb-5 brand-text-green text-center fs-3rem">Why Choose Us?</h3>
            <ul className=" text-white mx-2">
              <li><strong>No More Unemployment</strong> – Every course ensures employability.</li>
              <li><strong>Practical & Future-Ready Skills</strong> – Real-world applications, not just theory.</li>
              <li><strong>Industry Experts & Mentorship</strong> – Learn directly from experienced professionals.</li>
              <li><strong>A Mission for Change</strong> – Education with financial independence and career growth.</li>
            </ul>
          </div>
        </div>

        <div className="row mt-5 mx-lg-5 mx-0 d-flex justify-content-center">
          <div className="col-10">
            <h3 className="mb-5 brand-text-green text-center fs-3rem">Join Us</h3>
            <p className=" text-white">
              At <strong>AUGMEN</strong>, we are not just providing education—we are building a generation of leaders, innovators, and problem-solvers.
              Join us in reshaping the future of education and making <span className="text-primary">संस्कारी भारत</span> a reality for every student!
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default AboutUs