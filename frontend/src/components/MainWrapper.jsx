import React from 'react'
import { Link } from 'react-router-dom'

export default function MainWrapper() {
  return (
    <section id="hero" className="hero">
        <div className="container position-relative">
        <div className="row gy-5" data-aos="fade-in">
            <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center text-center text-lg-start">
            <h2 style={{fontFamily: 'Fjalla One'}}>Welcome to <span>Patrimony</span></h2>
            <p style={{fontFamily: 'Pacifico', fontSize: '24px'}}>One stop to Buy and Sell lands, without paying extra charges</p>
            <div className="d-flex justify-content-center justify-content-lg-start">
                <Link to="/register" className="btn-get-started" style={{fontFamily: 'Edu SA Beginner', fontSize: '24px'}}>Get Started</Link>
                {/* <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" className="glightbox btn-watch-video d-flex align-items-center"><i className="bi bi-play-circle"></i><span>Watch Video</span></a> */}
            </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2">
            <img src="landTransfer.png" className="img-fluid" alt="" data-aos="zoom-out" data-aos-delay="100" />
            </div>
        </div>
        </div>

        <div className="icon-boxes position-relative">
            <div className="container position-relative">
                <div className="row gy-4 mt-5">
                    <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
                        <div className="icon-box">
                        <div className="icon"><i className="bi bi-easel"></i></div>
                        <a href="" className="stretched-link"><h2 className="title" style={{fontFamily: 'Edu SA Beginner', fontSize: '32px'}}>Peer to Peer transfer</h2></a>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="200">
                        <div className="icon-box">
                        <div className="icon"><i className="bi bi-gem"></i></div>
                        <a href="" className="stretched-link"><h2 className="title" style={{fontFamily: 'Edu SA Beginner', fontSize: '32px'}}>100% secure</h2></a>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="300">
                        <div className="icon-box">
                        <div className="icon"><i className="bi bi-geo-alt"></i></div>
                        <a href="" className="stretched-link"><h2 className="title" style={{fontFamily: 'Edu SA Beginner', fontSize: '32px'}}>No extra or hidden charges</h2></a>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="500">
                        <div className="icon-box">
                        <div className="icon"><i className="bi bi-command"></i></div>
                        <a href="" className="stretched-link"><h2 className="title" style={{fontFamily: 'Edu SA Beginner', fontSize: '32px'}}>Traceable</h2></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
