import React, { useState, useEffect } from 'react'


function Contact() {
    const [name, setName] = useState();
    const [email, SetEmail] = useState();
    const [subject, setSubject] = useState();
    const [message, setMessage] = useState();
    const [data, setData] = useState();

    const handelSubmit = (e) => {
        e.preventDefault()
    }
    useEffect(() => {
        const newData = { name, email, subject, message }
        console.log(newData)
        //console.log(name, email, subject, message);
    }, [name, email, subject, message]);


    return (
        <div>
            <section className="contact-sec padding-top padding-bottom" id="contact-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-7">
                            <h4 className="heading text-center text-lg-left">GET IN TOUCH</h4>
                            <form onSubmit={handelSubmit}
                                className="row contact-form wow fadeInLeft"
                                id="contact-form-data"
                            >
                                <div className="col-sm-12" id="result" />
                                <div className="col-12 col-md-5">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your Name"
                                        className="form-control"
                                        value={name} onChange={(e) => setName(e.target.value)}
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email Address *"
                                        className="form-control"
                                        value={email} onChange={(e) => SetEmail(e.target.value)}
                                    />
                                    <input
                                        type="text"
                                        name="subject"
                                        placeholder="Subject"
                                        className="form-control"
                                        value={subject} onChange={(e) => setSubject(e.target.value)}
                                    />
                                </div>
                                <div className="col-12 col-md-7">
                                    <textarea
                                        className="form-control"
                                        name="message"
                                        placeholder="Your Message"
                                        value={message} onChange={(e) => setMessage(e.target.value)}
                                        rows={6}
                                        defaultValue={""}
                                    />
                                </div>
                                <div className="col-12">
                                    <a
                                        href="javascript:void(0);"
                                        className="btn purple-btn rounded-pill w-100 contact_btn"
                                    >
                                        <i
                                            className="fa fa-spinner fa-spin mr-2 d-none"
                                            aria-hidden="true"
                                        />
                                        Send Message
                                        <span />
                                        <span />
                                        <span />
                                        <span />
                                        <span />
                                    </a>
                                </div>
                            </form>
                        </div>
                        <div className="col-12 col-lg-5 text-center text-lg-left position-relative">
                            <div className="contact-details wow fadeInRight">
                                <h4 className="heading">OUR LOCATION</h4>
                                <p className="text">
                                    There are many variations of passages of Lorem Ipsum available,
                                    but the majority have suffered .
                                </p>
                                <ul>
                                    <li>
                                        <i className="las la-map-marker addr" />
                                        123 Park Avenue, New York, United States{" "}
                                    </li>
                                    <li>
                                        <i className="las la-phone-volume phone" />
                                        <span>+1 631 1234 5678</span>
                                        <span>+1 631 1234 5678</span>
                                    </li>
                                    <li>
                                        <i className="las la-paper-plane email" />
                                        email@website.com
                                    </li>
                                </ul>
                            </div>
                            <img
                                src="https://megaone.acrothemes.com/creative-startup/img/contact-background.png"
                                className="contact-background"
                                alt="contact"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact
