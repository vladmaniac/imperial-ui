import React from 'react'
import {Link} from 'react-router-dom';

// TopHeader Area
const TopHeader = () => {
    return (
        <>
            <div className="top-header">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                            <ul className="left-info">
                                <li>
                                    <a href="mailto:office@imperialtraslochi.it">
                                        <i className="far fa-envelope"></i>
                                        office@imperialtraslochi.it
                                    </a>
                                </li>
                                <li>
                                    <a href="tel:+39 388 854 5019">
                                        <i className="fas fa-phone-volume"></i>
                                        +39 388 854 5019
                                    </a>
                                </li>
                                <li>
                                    <a href="tel:+39 388 391 3246">
                                        <i className="fas fa-phone-volume"></i>
                                        +39 388 391 3246
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                            <ul className="right-info">
                                <li className="mr-20">
                                    <Link to="/contact">Support</Link>
                                </li>
                                <li className="mr-20">
                                    <Link to="/blog_details">Notizie e media</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopHeader
