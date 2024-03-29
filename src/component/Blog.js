import React from 'react'

function Blog() {
    return (
        <div>
            <section className="blog-sec" id="blog-sec">
                <div className="left-overlay" />
                <div className="container position-relative">
                    <div className="blog-inner-overlay" />
                    <div className="row blog-area">
                        <div className="col-12 col-lg-5 d-flex align-items-center text-center text-lg-left">
                            <div className="blog-detail wow fadeInLeft">
                                <h4 className="heading">
                                    LATEST <span>DESIGN BLOGS</span>
                                </h4>
                                <p className="text">
                                    Lorem ipsum is simply dummy text of the printing and typesetting.
                                    Lorem Ipsum has been the industry’s standard dummy.
                                </p>
                                <a
                                    className="btn anim-btn rounded-pill"
                                    href="https://megaone.acrothemes.com/creative-startup/standard-blog.html"
                                >
                                    LEARN MORE
                                    <span />
                                    <span />
                                    <span />
                                    <span />
                                </a>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 offset-lg-1">
                            <div className="blog-img wow fadeInRight">
                                <img
                                    src="https://megaone.acrothemes.com/creative-startup/img/blog1.png"
                                    alt="blog-img"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Blog
