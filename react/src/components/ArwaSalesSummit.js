import React from 'react'
import '../css/ArwaSalesSummit.css';
function ArwaSalesSummit() {
    return (
        <div className='banner'>
            <div className='container'>
                <div className='row mt-5'>
                    <div className='col-lg-6'>
                        <div className='mt-5'>
                            <h2 ><b>Devsinc Sales Summit</b> <br></br> Connect. Grow. Achieve</h2>
                            <p className='my-3'>#1 Premier Summit for Sales, Business Growth, and<br></br> Development Experts, serving enterprises, SMEs, and<br></br> industry professionals.</p>
                            <div className='mt-4'>
                                <button type="button" class="btn btn-green w-50 border-2 p-3">Register Now</button>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <div className='text-center my-5'>
                            <img src='assets/img/Events/banner-image-1.webp' alt='banner-image' className='w-75' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArwaSalesSummit