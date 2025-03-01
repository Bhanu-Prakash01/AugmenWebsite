import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import FutureInventors from '../components/FutureInventors'

import sanskritiTitle from '../assets/sanskari.png'
import futureInventor from '../assets/futureInventor.png'
import group from '../assets/group.png'
import logo from '../assets/Logo.png'
import fi_lab1 from '../assets/fi_lab1.jpg'
import fi_lab2 from '../assets/fi_lab2.jpg'
import fi_lab3 from '../assets/fi_lab3.jpg'
import fi_lab4 from '../assets/fi_lab4.jpg'
import greenMan from '../assets/greenMan.png'


const HomePage = () => {
  return (
    <>
      <div className='container-fluid brand-bg-black p-0 m-0'>

        <div className="row mx-0">
          <div className="col-10 ">
            {/* <h1 className='brand-text-green'>Augmen homepage</h1> */}
            <img src={logo} alt="" width={110} height={110} className='border-green rounded-circle mt-4 mx-4' />
          </div>
          <div className="col-2 d-flex justify-content-center align-items-center gap-2">
            <Link to="/about-us" className='text-decoration-none'><h6 className='brand-text-green fw-bold'>About Us</h6></Link>
            <Link to="/courses" className='text-decoration-none'><h6 className='brand-text-green fw-bold'>Courses</h6></Link>
          </div>
        </div>

        <div className="row d-flex justify-content-center align-items-center mt-5 mx-0">
          <div className="col-7 d-flex justify-content-center align-items-center borderbottom ms-5">
            <img src={group} alt="" width={600} height={400} />

          </div>
          <div className="col-4 d-flex justify-content-center align-items-center">
            <h2 className='display-1 fw-bold brand-text-black' style={{ filter: "blur(4px)" }}>Trained 1,00,000+ Youths</h2>
          </div>
        </div>

        {/* future inventor lab */}

        <div className="row d-flex justify-content-center align-items-center mt-5 mx-0">

          <div className="col-5 borderbottom ">
            <h1 className='brand-text-green text-start ps-5 display-4 fw-bold'>Future Inventor Lab</h1>
            <img src={futureInventor} alt="" width={600} height={400} className='' />
          </div>
          <div className="col-5 text-white ">
            <p className='fw-bold'>
              We provide Robotics, IoT, AR, and Coding “ Future Inventor Lab “ for schools from Class 1 to 12, offering practical and engaging learning experiences. Our hands-on approach enhances students' understanding of modern technology and equips them with future-ready skills.
            </p>
            <button className='know-more-btn '>Know More</button>
          </div>

          <div className="col-12 d-flex justify-content-center align-items-center gap-5 mt-5">
            <img src={fi_lab1} alt="" width={300} height={200} className='' />
            <img src={fi_lab2} alt="" width={300} height={200} />
            <img src={fi_lab3} alt="" width={300} height={200} />
            <img src={fi_lab4} alt="" width={300} height={200} />
          </div>
        </div>

        {/* sanskriti bharat */}
        <div className="row mt-3 mb-5 d-flex justify-content-center align-items-center mx-0" style={{ height: "50vh" }}>
          <div className="col-5 text-center">
            <img src={sanskritiTitle} alt="" width={700} height={100} />
            <div className="position-relative mt-4" style={{ width: "100%", height: "auto" }}>
              <h5 className="fw-bold position-absolute brand-text-green" style={{
                left: "45%",
                top: "0",
                width: "80%",
                zIndex: "2",
                padding: "5px",
                lineHeight: "31px"
              }}>
                हर युवा के पास अपनी अनूठी शक्ति, विचार और क्षमता होती है। आज भारत को पुनर्निर्माण के लिए अनुभवी हाथों से ज्यादा नए विचारों की जरूरत है। हम नवाचार और भविष्य-केंद्रित शिक्षा को बढ़ावा दे रहे हैं, जो युवाओं और बच्चों को अधिक सक्षम बनाएगी और उन्हें देश के विकास में महत्वपूर्ण भूमिका निभाने के लिए तैयार करेगी।
              </h5>

              <h5 className="fw-bold position-absolute text-white" style={{
                left: "10%",
                top: "39px",
                width: "80%",
                zIndex: "1",
                padding: "5px",
                lineHeight: "32px"
              }}>
                Every youth in this country possesses unique strengths, ideas, and potential. Today, India needs fresh perspectives more than experienced hands to drive its transformation. We are committed to promoting innovative, future-focused education that empowers young minds, enhances their capabilities, and prepares them to shape and rebuild the nation.
              </h5>
            </div>
          </div>
        </div>

        <div className="row my-5 d-flex justify-content-center align-items-center mx-0" >
          <div className="col-4 brand-bg-green-defintion">
            <img src={greenMan} alt="" />
          </div>
          <div className="col-8 text-white" >
            <h4 className='line-height'>A – <span className='fs-5'>Aspire (Always aim for higher goals)</span></h4>
            <h4 className='line-height'>U – <span className='fs-5'>Unleash (Unlock your full potential)</span></h4>
            <h4 className='line-height'>G – <span className='fs-5'>Grow (Continuously improve and evolve)</span></h4>
            <h4 className='line-height'>M – <span className='fs-5'>Master (Excel in your skills and knowledge)</span></h4>
            <h4 className='line-height'>E – <span className='fs-5'>Elevate (Take your career or life to new heights)</span></h4>
            <h4 className='line-height'>N – <span className='fs-5'>Nurture (Develop yourself and others around you)</span></h4>
          </div>
        </div>

        <FutureInventors />

        <Footer />
      </div>
    </>
  )
}

export default HomePage