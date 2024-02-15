import React from 'react'

function Footer() {
    return (
        <div>
            <footer className="footer-style-1">
                <div className="container">
                    <div className="row align-items-center">
                        {/*Social*/}
                        <div className="col-lg-6">
                            <div className="footer-social text-center text-lg-left ">
                                <ul className="list-unstyled">
                                    <li>
                                        <a className="wow fadeInUp" href="javascript:void(0);">
                                            <i aria-hidden="true" className="fab fa-facebook-f" />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="wow fadeInDown" href="javascript:void(0);">
                                            <i aria-hidden="true" className="fab fa-twitter" />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="wow fadeInUp" href="javascript:void(0);">
                                            <i aria-hidden="true" className="fab fa-google-plus-g" />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="wow fadeInDown" href="javascript:void(0);">
                                            <i aria-hidden="true" className="fab fa-linkedin-in" />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="wow fadeInUp" href="javascript:void(0);">
                                            <i aria-hidden="true" className="fab fa-instagram" />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="wow fadeInDown" href="javascript:void(0);">
                                            <i aria-hidden="true" className="fab fa-pinterest-p" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/*Text*/}
                        <div className="col-lg-6 text-center text-lg-right">
                            <p className="company-about fadeIn">
                                © 2023 MegaOne. Made With Love By{" "}
                                <a href="javascript:void(0);">Themesindustry</a>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
