import React from 'react'

const Footer = () => {
    return (
        <>
            <div className='container-fluid brand-bg-green-clip p-0 m-0'>
                <div className="row d-flex justify-content-between align-items-end m-0" style={{ height: "60vh" }}>
                    <div className="col-6 ">
                        <h6 className='text-start ps-2'>© Powered By AUGMEN</h6>
                    </div>
                    <div className="col-6 text-end pe-4 fw-bold" style={{ lineHeight: "15px" }}>
                        <p>AUGMEN</p>
                        <p>BBBEC INDIA PRIVATE LIMITED</p>
                        <p>Since 2018</p>
                        <p>HEAD OFFICE - INDORE, VIJAY NAAGR. M.P. 452001</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer