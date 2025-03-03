import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import duoColorLogo from '../assets/duoColorLogo.png'
import FutureInventors from '../components/FutureInventors'
import Footer from '../components/Footer'
import STATIC_DATA from '../constant/StaticData'

import benefits1 from '../assets/benefits1.jpg'
import benefits2 from '../assets/benefits2.jpg'
import fi_lab1 from '../assets/fi_lab1.jpg'
import fi_lab2 from '../assets/fi_lab2.jpg'
import fi_lab3 from '../assets/fi_lab3.jpg'
import fi_lab4 from '../assets/fi_lab4.jpg'
import fi_lab5 from '../assets/fi_lab5.jpg'
import botBg from '../assets/botBg.png'


const CoursesPage = () => {
    return (
        <>
            <div className="container-fluid brand-bg-black p-0 m-0">
                <Header />

                <div className="row mx-0 d-flex justify-content-center">
                    <div className="col-lg-7 col-11 borderbottom">
                        <h1 className='display-1 fw-bold brand-text-black text-center mb-4'>AUGMEN LEARNING'S</h1>
                    </div>
                </div>

                <div className="row mx-0 d-flex justify-content-center my-5 mx-lg-5 mx-0">
                    <div className="col-lg-8 col-md-11 col-12 borderbottom d-flex justify-content-around ">


                        <div className="col-lg-4 col-3">
                            <img src={duoColorLogo} alt="" width={300} height={320} className='img-fluid' />
                        </div>
                        <div className="col-lg-3 col-4 d-flex flex-column justify-content-center" >
                            <h3 className='fw-bold brand-text-green line-height'>Beginner</h3>
                            <h3 className='fw-bold text-white line-height'>Professional</h3>
                        </div>
                        <div className="col-lg-2 col-4 d-flex flex-column justify-content-center">
                            <h3 className='fw-bold brand-text-green'>With Us
                                Anybody Can
                                Become
                                Professional.</h3>
                        </div>

                    </div>
                </div>

                <div className="row mx-0 d-flex justify-content-center mt-4">
                    {STATIC_DATA.COURSE_SECTION.map((item, index) => (
                        <div key={index} className="col-10 d-flex justify-content-between gap-2 mb-4 align-items-start">
                            <div className='col-lg-2 col-4 border-green p-4 text-white rounded-4'>
                                <img className='img-fluid' src={item.image} alt={item.title} width={170} height={150} style={{ filter: "invert(100%) brightness(200%)" }} />
                            </div>
                            <div className='col-9'>
                                <h1 className='fw-bold brand-text-green'>{item.title}</h1>
                                {/* <h4 className='text-white mb-5'>{item.description}</h4> */}
                                <h4 className='text-white mb-5' 
                    dangerouslySetInnerHTML={{ 
                        __html: item.description.replace(
                            "Future Inventor Lab", 
                            `<span class="brand-text-green">"Future Inventor Lab"</span>`
                        ) 
                    }}
                />
                                <Link to={item.redirect} className="know-more-btn text-decoration-none text-end fs-4">{item.buttonText}</Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Why Robotics in Schools? */}
                <div className="row mx-0 my-5 d-flex justify-content-center">
                    <div className="col-12 position-relative mb-5" style={{
                        backgroundImage: `url(${botBg})`,
                        backgroundRepeat: "repeat",
                        backgroundSize: "450px 450px",
                        height: "300px",
                        position: "relative"
                    }}>
                        <div className="w-100 h-100 position-absolute top-0 start-0"
                            style={{
                                backgroundImage: `url(${botBg})`,
                                backgroundRepeat: "repeat",
                                backgroundSize: "450px 450px",
                                filter: "brightness(0.5)",
                                zIndex: 0,
                                opacity: 1
                            }}>
                        </div>

                        <div className="position-absolute top-0 start-25 text-white text-center z-1">
                            <h2 className="fw-bold text-white p-3">Info Page :</h2>
                        </div>

                        <div className="col-10 col-lg-6 position-absolute start-50 top-50 translate-middle text-white text-justify z-1"

                        >
                            <h4 className="sub-text-responsive text-white" style={{}}>
                                In today’s rapidly evolving technological landscape, it is
                                crucial for students to develop skills in robotics, coding,
                                artificial intelligence (AI), augmented reality (AR), and the
                                Internet of Things (IoT). <br />
                                <strong>AUGMEN</strong>, a division of <strong>BBBEC India Pvt. Ltd.</strong>, introduces a
                                state-of-the-art Robotics Lab designed specifically for schools, empowering students with
                                21st-century skills and hands-on learning experiences.
                            </h4>
                        </div>
                    </div>



                    <div className="col-11 brand-text-green mt-5">
                        <h3 className="fw-bold mb-4">Why Robotics in Schools?</h3>
                        <ol className="text-start">
                            <li className="mb-2 fs-4 ">
                                <strong>Enhances STEM Learning –</strong> Robotics integrates science, technology, engineering, and mathematics (STEM), making learning practical and engaging.
                            </li>
                            <li className="mb-2 fs-4">
                                <strong>Future Career Readiness –</strong> Prepares students for emerging careers in automation, AI, and technology-driven industries.
                            </li>
                            <li className="mb-2 fs-4">
                                <strong>Develops Critical Thinking & Problem-Solving Skills –</strong> Encourages students to think creatively, solve real-world problems, and enhance logical reasoning.
                            </li>
                            <li className="mb-2 fs-4">
                                <strong>Boosts Engagement & Participation –</strong> Hands-on robotics projects foster student engagement and active learning.
                            </li>
                            <li className="mb-2 fs-4">
                                <strong>Government Initiatives & NEP 2020 Alignment –</strong> Aligns with India’s New Education Policy (NEP) and Atal Tinkering Labs’ vision for innovation-driven education.
                            </li>
                        </ol>
                    </div>

                    <h3 className="fw-bolder mb-4 text-white ms-5 p-5">Subject :</h3>
                    <div className="col-12 d-flex justify-content-center align-items-center gap-4 flex-wrap mt-5">
                        <div className="text-center text-white">
                            <img src={fi_lab1} alt="Robotics Lab Setup" width={250} height={250} className='' />
                            <p className="mt-2 fw-bolder fs-5">Robotics</p>
                        </div>
                        <div className="text-center text-white">
                            <img src={fi_lab3} alt="Coding and Programming" width={250} height={250} />
                            <p className="mt-2 fw-bolder fs-5">AR</p>
                        </div>
                        <div className="text-center text-white">
                            <img src={fi_lab4} alt="Hands-on Learning" width={250} height={250} />
                            <p className="mt-2 fw-bolder fs-5">IOT</p>
                        </div>
                        <div className="text-center text-white">
                            <img src={fi_lab2} alt="Students Working on Robotics" width={250} height={250} />
                            <p className="mt-2 fw-bolder fs-5">Coding</p>
                        </div>

                        <div className="text-center text-white">
                            <img src={fi_lab5} alt="STEM Education in Action" width={250} height={250} />
                            <p className="mt-2 fw-bolder fs-5">AI</p>
                        </div>
                    </div>

                </div>


                {/* Benefits for the School */}
                <div className="row mx-0 mt-5 d-flex justify-content-center">
                    <div className="col-11">
                        <h1 className="fw-bold mb-4 text-white">Benefits for the School</h1>
                        <ul className=" text-start text-white" style={{ lineHeight: "55px" }}>
                            <li className="mb-2 fs-4">
                                <strong>Attract More Admissions – </strong> A modern robotics lab increases school reputation and student enrollments.
                            </li>
                            <li className="mb-2 fs-4">
                                <strong> Competitive Edge – </strong> Stay ahead of other schools by offering futuristic learning programs.
                            </li>
                            <li className="mb-2 fs-4">
                                <strong>No Extra Teaching Burden – </strong> AUGMEN provides a trained robotics teacher at no additional cost.
                            </li>
                            <li className="mb-2 fs-4">
                                <strong> Enhanced Student Performance – </strong> Hands-on learning improves problem-solving skills and academic performance.
                            </li>
                            <li className="mb-2 fs-4">
                                <strong>Affordable & Scalable Model – </strong> Flexible pricing ensures sustainability for schools of all sizes.
                            </li>
                        </ul>
                    </div>
                    <div className="col-10 mt-3">
                        <img src={benefits1} alt="" width={1400} height={700} className='img-fluid' />
                    </div>
                    <div className="col-10">
                        <img src={benefits2} alt="" width={1400} height={700} className='img-fluid' />
                    </div>
                </div>

                <FutureInventors />
                <Footer />
            </div>
        </>
    )
}

export default CoursesPage