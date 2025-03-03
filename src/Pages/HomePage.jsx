import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import FutureInventors from '../components/FutureInventors'
import ResponsiveCarousel from '../components/Carousel'

import sanskritiTitle from '../assets/sanskari.png'
import futureInventor from '../assets/futureInventor.png'
import group from '../assets/group.png'
import logo from '../assets/Logo.png'
import greenMan from '../assets/greenMan.png'


const HomePage = () => {
  return (
    <>
      <div className='container-fluid brand-bg-black p-0 m-0'>

        <Header/>

        <div className="row d-flex justify-content-center align-items-center mt-5 mx-0">
          <div className="col-lg-6 col-11 d-flex justify-content-center align-items-center borderbottom ms-5" style={{paddingTop:"3rem"}}>
            <img src={group} alt="" width={600} height={400} className="img-fluid" />

          </div>
          <div className="col-lg-4 col-10 d-flex justify-content-center align-items-center borderbottom text-start" style={{ paddingBottom: "1.5px" }}>
            <h2 className=' fw-bold brand-text-black text-responsive'>Trained 1,00,000+ Youths</h2>
          </div>
        </div>

        {/* future inventor lab */}

        <div className="row d-flex justify-content-center align-items-center mt-5 mx-0">

          <div className="col-lg-5 col-10 borderbottom ">
            <h1 className='display-4 brand-text-green text-start ps-5 display-4 fw-bold'>Future Inventor Lab</h1>
            <img src={futureInventor} alt="" width={600} height={400} className="img-fluid" />
          </div>
          <div className="col-lg-5 col-10 text-white ">
            <p className='fw-bold fs-4 mb-5'>
              We provide Robotics, IoT, AR, and Coding <span className='brand-text-green fst-italic'>“ Future Inventor Lab “</span>  for schools from Class 1 to 12, offering practical and engaging learning experiences. Our hands-on approach enhances students' understanding of modern technology and equips them with future-ready skills.
            </p>
            <Link to="/courses"><button className='know-more-btn fs-5'>Know More</button></Link>
          </div>

          {/* <div className="col-12 d-flex justify-content-center align-items-center gap-5 mt-5">
            <img src={fi_lab1} alt="" width={300} height={300} className='' />
            <img src={fi_lab2} alt="" width={300} height={300} />
            <img src={fi_lab3} alt="" width={300} height={300} />
            <img src={fi_lab4} alt="" width={300} height={300} />
          </div> */}
          <div className=" mt-5">
            <ResponsiveCarousel />
          </div>
        </div>

        {/* sanskriti bharat */}
        <div className="row mt-5 d-flex justify-content-center align-items-center mx-0">
          <div className="col-12 d-flex justify-content-center">
            <img src={sanskritiTitle} alt="" width={700} height={100} className="img-fluid" />

          </div>

        </div>
        <div className="row mt-3 mb-5 d-flex justify-content-center align-items-center mx-0" >

          <h3 className="col-lg-4 col-10 fw-bold  brand-text-green mb-3" style={{}}>
            हर युवा के पास अपनी अनूठी शक्ति, विचार और क्षमता होती है। आज भारत को पुनर्निर्माण के लिए अनुभवी हाथों से ज्यादा नए विचारों की जरूरत है। हम नवाचार और भविष्य-केंद्रित शिक्षा को बढ़ावा दे रहे हैं, जो युवाओं और बच्चों को अधिक सक्षम बनाएगी और उन्हें देश के विकास में महत्वपूर्ण भूमिका निभाने के लिए तैयार करेगी।
          </h3>

          <h3 className="col-lg-4 col-10 fw-bold text-white" style={{}}>
            Every youth in this country possesses unique strengths, ideas, and potential. Today, India needs fresh perspectives more than experienced hands to drive its transformation. We are committed to promoting innovative, future-focused education that empowers young minds, enhances their capabilities, and prepares them to shape and rebuild the nation.
          </h3>

        </div>

        {/* <div className="row my-5 d-flex justify-content-center align-items-center mx-0" >
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
        </div> */}
        <div className="row my-5 d-flex justify-content-center align-items-center mx-0">
          <div className="col-md-4 col-12 brand-bg-green-defintion d-flex justify-content-center">
            <img src={greenMan} alt="" className="img-fluid" />
          </div>
          <div className="col-md-8 col-12 text-white text-center text-md-start mt-4 mt-md-0">
            <h1 className="line-height fw-bolder">A – <span className="fs-5 fs-md-3 ">Aspire (Always aim for higher goals)</span></h1>
            <h1 className="line-height fw-bolder">U – <span className="fs-5 fs-md-3 ">Unleash (Unlock your full potential)</span></h1>
            <h1 className="line-height fw-bolder">G – <span className="fs-5 fs-md-3">Grow (Continuously improve and evolve)</span></h1>
            <h1 className="line-height fw-bolder">M – <span className="fs-5 fs-md-3 ">Master (Excel in your skills and knowledge)</span></h1>
            <h1 className="line-height fw-bolder">E – <span className="fs-5 fs-md-3">Elevate (Take your career or life to new heights)</span></h1>
            <h1 className="line-height fw-bolder">N – <span className="fs-5 fs-md-3 ">Nurture (Develop yourself and others around you)</span></h1>
          </div>
        </div>


        <FutureInventors />

        <Footer />
      </div>
    </>
  )
}

export default HomePage