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
          <div className="col-2 d-flex justify-content-center align-items-center gap-4">
            <Link to="/courses" className='text-decoration-none'><h5 className='brand-text-green fw-bold'>Courses</h5></Link>
            <Link to="/about-us" className='text-decoration-none'><h5 className='brand-text-green fw-bold'>About Us</h5></Link>
          </div>
        </div>

        <div className="row d-flex justify-content-center align-items-center mt-5 mx-0">
          <div className="col-6 d-flex justify-content-center align-items-center borderbottom ms-5">
            <img src={group} alt="" width={600} height={400} />

          </div>
          <div className="col-4 d-flex justify-content-center align-items-center borderbottom text-start" style={{ paddingBottom: "1.5px" }}>
            <h2 className=' fw-bold brand-text-black' style={{ fontSize: "108px" }}>Trained 1,00,000+ Youths</h2>
          </div>
        </div>

        {/* future inventor lab */}

        <div className="row d-flex justify-content-center align-items-center mt-5 mx-0">

          <div className="col-5 borderbottom ">
            <h1 className='display-4 brand-text-green text-start ps-5 display-4 fw-bold'>Future Inventor Lab</h1>
            <img src={futureInventor} alt="" width={600} height={400} className='' />
          </div>
          <div className="col-5 text-white ">
            <p className='fw-bold fs-4 mb-5'>
              We provide Robotics, IoT, AR, and Coding <span className='brand-text-green fst-italic'>“ Future Inventor Lab “</span>  for schools from Class 1 to 12, offering practical and engaging learning experiences. Our hands-on approach enhances students' understanding of modern technology and equips them with future-ready skills.
            </p>
            <Link to="/courses"><button className='know-more-btn fs-5'>Know More</button></Link>
          </div>

          <div className="col-12 d-flex justify-content-center align-items-center gap-5 mt-5">
            <img src={fi_lab1} alt="" width={300} height={300} className='' />
            <img src={fi_lab2} alt="" width={300} height={300} />
            <img src={fi_lab3} alt="" width={300} height={300} />
            <img src={fi_lab4} alt="" width={300} height={300} />
          </div>
        </div>

        {/* sanskriti bharat */}
        <div className="row mt-5 d-flex justify-content-center align-items-center mx-0">
          <div className="col-12 d-flex justify-content-center">
            <img src={sanskritiTitle} alt="" width={700} height={100} className='' />

          </div>

        </div>
        <div className="row mt-3 mb-5 d-flex justify-content-center align-items-center mx-0" style={{ height: "50vh" }}>
          {/* <div className="col-10 text-center"> */}

          {/* <div className=" mt-4" style={{ width: "100%", height: "auto" }}> */}
          <h3 className="col-4 fw-bold  brand-text-green" style={{
            // left: "45%",
            // top: "0",
            // width: "80%",
            // zIndex: "2",
            // padding: "5px",
            // lineHeight: "31px"
          }}>
            हर युवा के पास अपनी अनूठी शक्ति, विचार और क्षमता होती है। आज भारत को पुनर्निर्माण के लिए अनुभवी हाथों से ज्यादा नए विचारों की जरूरत है। हम नवाचार और भविष्य-केंद्रित शिक्षा को बढ़ावा दे रहे हैं, जो युवाओं और बच्चों को अधिक सक्षम बनाएगी और उन्हें देश के विकास में महत्वपूर्ण भूमिका निभाने के लिए तैयार करेगी।
          </h3>

          <h3 className="col-4 fw-bold text-white" style={{
            // left: "10%",
            // top: "39px",
            // width: "80%",
            // zIndex: "1",
            // padding: "5px",
            // lineHeight: "32px"
          }}>
            Every youth in this country possesses unique strengths, ideas, and potential. Today, India needs fresh perspectives more than experienced hands to drive its transformation. We are committed to promoting innovative, future-focused education that empowers young minds, enhances their capabilities, and prepares them to shape and rebuild the nation.
          </h3>
          {/* </div> */}
          {/* </div> */}
        </div>

        <div className="row my-5 d-flex justify-content-center align-items-center mx-0" >
          <div className="col-4 brand-bg-green-defintion">
            <img src={greenMan} alt="" />
          </div>
          <div className="col-8 text-white " >
            <h1 className='line-height fw-bolder'>A – <span className='fs-3'>Aspire (Always aim for higher goals)</span></h1>
            <h1 className='line-height fw-bolder'>U – <span className='fs-3'>Unleash (Unlock your full potential)</span></h1>
            <h1 className='line-height fw-bolder'>G – <span className='fs-3'>Grow (Continuously improve and evolve)</span></h1>
            <h1 className='line-height fw-bolder'>M – <span className='fs-3'>Master (Excel in your skills and knowledge)</span></h1>
            <h1 className='line-height fw-bolder'>E – <span className='fs-3'>Elevate (Take your career or life to new heights)</span></h1>
            <h1 className='line-height fw-bolder'>N – <span className='fs-3'>Nurture (Develop yourself and others around you)</span></h1>
          </div>
        </div>

        <FutureInventors />

        <Footer />
      </div>
    </>
  )
}

export default HomePage