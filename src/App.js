import React, { useState } from 'react'
import Header from './component/Header';
import Footer from './component/Footer';
import Portfolio from './component/Portfolio';
import Testimonial from './component/Testimonial';
import Blog from './component/Blog';
import Contact from './component/Contact';

function App() {

  return (
    <div>
      <>
        {/* Preloader */}
        <div className="preloader">
          <div className="center">
            <div className="loader loader-32">
              <div className="loader-container">
                <div className="ball-wrapper">
                  <div className="ball-holder">
                    <div className="ball" />
                  </div>
                  <div className="shadow" />
                </div>
                <div className="ball-wrapper">
                  <div className="ball-holder">
                    <div className="ball" />
                  </div>
                  <div className="shadow" />
                </div>
                <div className="ball-wrapper">
                  <div className="ball-holder">
                    <div className="ball" />
                  </div>
                  <div className="shadow" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Preloader End */}
        {/*Header Start*/}
        <Header />
        {/*Header End*/}
        {/*SLider sec start*/}
        <section className="slider-area">
          <div className="bg-overlay" />
          <div className="container position-relative">
            <div className="inner-bg-overlay" />
            <div className="row">
              <div
                className="slider-detail col-12 col-lg-6 text-center text-lg-left wow fadeInLeft"
                data-wow-delay=".8s"
              >
                <div className="slider-slide">
                  <div className="slider-inner-content">
                    <h4 className="slide-heading">
                      CREATIVE <span>DIGITAL AGENCY</span>
                    </h4>
                    <p className="slide-text">
                      Lorem ipsum is simply dummy text of the printing and
                      typesetting. Lorem Ipsum has been the industry’s standard dummy.
                      Lorem Ipsum has been the industry’s standard dummy.
                    </p>
                    <a href="#about-sec" className="btn anim-btn rounded-pill scroll">
                      LEARN MORE
                      <span />
                      <span />
                      <span />
                      <span />
                    </a>
                  </div>
                </div>
                <div className="slider-slide">
                  <div className="slider-inner-content">
                    <h4 className="slide-heading">
                      MODREN <span>CREATIVE STUDIO</span>
                    </h4>
                    <p className="slide-text">
                      Lorem Ipsum has been the industry’s standard dummy. Lorem ipsum
                      is simply dummy text of the printing and typesetting. Lorem
                      Ipsum has been the industry’s standard dummy.
                    </p>
                    <a href="#about-sec" className="btn anim-btn rounded-pill scroll">
                      LEARN MORE
                      <span />
                      <span />
                      <span />
                      <span />
                    </a>
                  </div>
                </div>
                <div className="slider-slide">
                  <div className="slider-inner-content">
                    <h4 className="slide-heading">
                      STARTUP <span>MODERN WORKS</span>
                    </h4>
                    <p className="slide-text">
                      Lorem Ipsum has been the industry’s standard dummy. Lorem Ipsum
                      has been the industry’s standard dummy. Lorem ipsum is simply
                      dummy text of the printing and typesetting.
                    </p>
                    <a href="#about-sec" className="btn anim-btn rounded-pill scroll">
                      LEARN MORE
                      <span />
                      <span />
                      <span />
                      <span />
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="slider-img col-12 col-lg-6 wow fadeInRight"
                data-wow-delay=".8s"
                data-depth="0.1"
              >
                <div className="img-slide">
                  <img src="https://megaone.acrothemes.com/creative-startup/img/slide1.jpg" />
                </div>
                <div className="img-slide">
                  <img src="https://megaone.acrothemes.com/creative-startup/img/slide2.jpg" />
                </div>
                <div className="img-slide">
                  <img src="https://megaone.acrothemes.com/creative-startup/img/slide3.jpg" />
                </div>
              </div>
            </div>
            <div className="slider-arrows">
              <a
                href="javascript:void(0);"
                className="slider-arr slider-arr-up"
                id="slider-arr-up"
              >
                <i className="fas fa-angle-up" />
              </a>
              <a
                href="javascript:void(0);"
                className="slider-arr slider-arr-down"
                id="slider-arr-down"
              >
                <i className="fas fa-angle-down" />
              </a>
            </div>
          </div>
        </section>
        {/*SLider sec End*/}
        {/*About sec start*/}
        <section className="about-sec" id="about-sec">
          <div className="about-overlay" />
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-6 services-area padding-top padding-bottom">
                <div className="purple-overlay" />
                <div className="row no-gutters wow fadeInLeft">
                  <div className="col-12 col-lg-6 services text-center">
                    <div className="service-card">
                      <div className="icon-holder">
                        <i className="lni lni-briefcase" />
                      </div>
                      <h4 className="card-heading">Make Business</h4>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6 services text-center">
                    <div className="service-card">
                      <div className="icon-holder">
                        <i className="lni lni-bulb" />
                      </div>
                      <h4 className="card-heading">Agency Ideas</h4>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6 services text-center">
                    <div className="service-card">
                      <div className="icon-holder">
                        <i className="lni lni-heart" />
                      </div>
                      <h4 className="card-heading">Our Hardwork</h4>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6 services text-center">
                    <div className="service-card">
                      <div className="icon-holder">
                        <i className="las la-wallet" />
                      </div>
                      <h4 className="card-heading">Make Money</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6 about-area padding-top padding-bottom text-center text-lg-left">
                <div className="about-content wow fadeInRight">
                  <div className="about-inner-content">
                    <h4 className="heading">
                      WE ARE <span>DIGITAL AGENCY</span>
                    </h4>
                    <p className="text">
                      Lorem ipsum is simply dummy text of the printing and
                      typesetting. Lorem Ipsum has been the industry’s standard dummy.
                      Lorem Ipsum has been the industry’s standard dummy. Lorem ipsum
                      is simply dummy text of the printing and typesetting. Lorem
                      Ipsum has been the industry’s standard dummy. Lorem Ipsum has
                      been the industry’s standard dummy.
                    </p>
                    <p className="text">
                      Lorem ipsum is simply dummy text of the printing and
                      typesetting. Lorem Ipsum has been the industry’s standard dummy.
                      Lorem Ipsum has been the industry’s standard dummy.
                    </p>
                    <a href="#about-sec" className="btn anim-btn rounded-pill">
                      LEARN MORE
                      <span />
                      <span />
                      <span />
                      <span />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*About sec End*/}
        {/*Stats sec start*/}
        <section className="stats-sec padding-top padding-bottom" id="stats-sec">
          <div className="container">
            <div className="row">
              <div className="col-12 stats-heading-area text-center">
                <span className="sub-heading">Lorem ipsum is simply dummy text </span>
                <h4 className="heading">AGENCY STATS &amp; FACTS</h4>
                <p className="text">
                  Lorem ipsum is simply dummy text of the printing and typesetting.
                  Lorem Ipsum has been the industry’s standard dummy. Lorem Ipsum has
                  been the industry’s standard dummy. Lorem ipsum is simply dummy text
                  of the printing and typesetting.
                </p>
              </div>
            </div>
            <div className="row circular-wrap text-center">
              <div className="col-12 col-lg-4 wow bounceIn">
                <div id="circle" className="circle" data-value="0.77">
                  <h6 className="counter-num">257%</h6>
                </div>
                <h4 className="darkcolor">Increase in Sales year on year</h4>
              </div>
              <div className="col-12 col-lg-4 wow bounceIn">
                <div id="circletwo" className="circle" data-value="0.96">
                  <h6 className="counter-num">96%</h6>
                </div>
                <h4 className="darkcolor">Recommendation rate over the year</h4>
              </div>
              <div className="col-12 col-lg-4 wow bounceIn">
                <div id="circlethree" className="circle" data-value="0.75">
                  <h6 className="counter-num">317%</h6>
                </div>
                <h4 className="darkcolor">New ventures we became part of</h4>
              </div>
            </div>
          </div>
        </section>
        {/*Stats sec End*/}
        {/*Team sec start*/}
        <section className="team-sec position-relative" id="team-sec">
          <div className="left-overlay" />
          <div className="container">
            <div className="row inner-team-sec padding-top padding-bottom">
              <div className="col-12 col-lg-4 text-center text-lg-left">
                <div className="team-detail wow fadeInLeft">
                  <h4 className="heading">
                    WE HAVE <span>AMAZING TEAM</span>
                  </h4>
                  <p className="text">
                    Lorem ipsum is simply dummy text of the printing and typesetting.
                    Lorem Ipsum has been the industry’s standard dummy.
                  </p>
                </div>
              </div>
              <div className="col-12 col-lg-8">
                <div className="team-area wow fadeInRight">
                  <div className="row no-gutters team-carousel owl-carousel owl-theme">
                    <div className="item text-center">
                      <div className="team-box">
                        <div className="img-holder position-relative">
                          <img src="https://megaone.acrothemes.com/creative-startup/img/team1.jpg" />
                          <div className="overlay d-flex justify-content-center align-items-center">
                            {/*Team Social*/}
                            <ul className="team-social">
                              <li>
                                <a
                                  className="facebook-text-hvr"
                                  href="javascript:void(0);"
                                >
                                  <i
                                    className="lab la-facebook-f"
                                    aria-hidden="true"
                                  />
                                </a>
                              </li>
                              <li>
                                <a
                                  className="twitter-text-hvr"
                                  href="javascript:void(0);"
                                >
                                  <i className="lab la-twitter" aria-hidden="true" />
                                </a>
                              </li>
                              <li>
                                <a
                                  className="instagram-text-hvr"
                                  href="javascript:void(0);"
                                >
                                  <i
                                    className="lab la-instagram"
                                    aria-hidden="true"
                                  />
                                </a>
                              </li>
                              <li>
                                <a
                                  className="pinterest-text-hvr"
                                  href="javascript:void(0);"
                                >
                                  <i
                                    className="lab la-pinterest-p"
                                    aria-hidden="true"
                                  />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="team-info">
                          <h4 className="team-name">Eden Wooderburg</h4>
                          <p className="team-designation">Creative Head</p>
                        </div>
                      </div>
                    </div>
                    <div className="item text-center">
                      <div className="team-box">
                        <div className="img-holder position-relative">
                          <img src="https://megaone.acrothemes.com/creative-startup/img/team2.jpg" />
                          <div className="overlay d-flex justify-content-center align-items-center">
                            {/*Team Social*/}
                            <ul className="team-social">
                              <li>
                                <a
                                  className="facebook-text-hvr"
                                  href="javascript:void(0);"
                                >
                                  <i
                                    className="lab la-facebook-f"
                                    aria-hidden="true"
                                  />
                                </a>
                              </li>
                              <li>
                                <a
                                  className="twitter-text-hvr"
                                  href="javascript:void(0);"
                                >
                                  <i className="lab la-twitter" aria-hidden="true" />
                                </a>
                              </li>
                              <li>
                                <a
                                  className="instagram-text-hvr"
                                  href="javascript:void(0);"
                                >
                                  <i
                                    className="lab la-instagram"
                                    aria-hidden="true"
                                  />
                                </a>
                              </li>
                              <li>
                                <a
                                  className="pinterest-text-hvr"
                                  href="javascript:void(0);"
                                >
                                  <i
                                    className="lab la-pinterest-p"
                                    aria-hidden="true"
                                  />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="team-info">
                          <h4 className="team-name">Angelo Walking</h4>
                          <p className="team-designation">Design Lead</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a
                    href="javascript:void(0);"
                    className="team-nav team-prev"
                    id="team-prev"
                  >
                    <i className="fas fa-angle-left" />
                  </a>
                  <a
                    href="javascript:void(0);"
                    className="team-nav team-next"
                    id="team-next"
                  >
                    <i className="fas fa-angle-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*Team sec End*/}
        {/*portfolio section start*/}
        <Portfolio />
        {/*portfolio section end*/}
        {/*testimonial section start*/}
        <Testimonial />
        {/*testimonial section end*/}
        {/*sponsers section start*/}
        <div className="sponser-sec padding-top" id="sponser-sec">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="sponser-tags owl-carousel owl-theme">
                  <div className="item">
                    <img src="https://megaone.acrothemes.com/creative-startup/img/brand4.png" />
                  </div>
                  <div className="item">
                    <img src="https://megaone.acrothemes.com/creative-startup/img/brand4.png" />
                  </div>
                  <div className="item">
                    <img src="https://megaone.acrothemes.com/creative-startup/img/brand4.png" />
                  </div>
                  <div className="item">
                    <img src="https://megaone.acrothemes.com/creative-startup/img/brand4.png" />
                  </div>
                  <div className="item">
                    <img src="https://megaone.acrothemes.com/creative-startup/img/brand4.png" />
                  </div>
                  <div className="item">
                    <img src="https://megaone.acrothemes.com/creative-startup/img/brand4.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*sponsers section end*/}
        {/*Blogs section start*/}
        <Blog />
        {/*Blogs section end*/}
        {/*Contact section start*/}
        <Contact />
        {/*Contact section end*/}
        {/*colored-lines*/}
        <div className="color-lines row no-gutters">
          <div className="col-4 bg-red" />
          <div className="col-4 bg-purple" />
          <div className="col-4 bg-green" />
        </div>
        {/*Footer Start*/}
        <Footer />
        {/*Footer End*/}
        {/*Scroll Top Start*/}
        <span className="scroll-top-arrow">
          <i className="fas fa-angle-up" />
        </span>
        {/*Scroll Top End*/}
        {/* JavaScript */}
        {/* Plugin Js */}
        {/* REVOLUTION JS FILES */}
        {/* SLIDER REVOLUTION EXTENSIONS */}
        {/* google map*/}
        {/**/}
        {/**/}
        {/*Tilt Js*/}
        {/* custom script*/}
      </>

    </div>
  )
}

export default App
