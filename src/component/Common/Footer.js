import React from 'react'
import {Link} from 'react-router-dom';
// Import Logo Import
import logo from '../../assets/img/logo.png'

const FooterItems = [
    {
        title: "Quick Link",
        links: [
            {linkTitle: "Home", link: "/"},
            {linkTitle: "About Company", link: "/about"},
            {linkTitle: "Our Services", link: "/service"},
            {linkTitle: "Recent News", link: "/blog_grid"},
            {linkTitle: "Contact us", link: "/contact"},
        ],
    },
    {
        title: "Company",
        links: [
            {linkTitle: "Business Consulting", link: "/service"},
            {linkTitle: "Testimonials", link: "/testimonials"},
            {linkTitle: "Track Your Shipment", link: "/track_ship"},
            {linkTitle: "Privacy Policy", link: "/privacyPolicy"},
            {linkTitle: "Terms & Condition", link: "/terms"},
        ],
    }
]

const Footer = () => {
    return (
        <>
            <footer id="footer_area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                            <div className="footer_wedget">
                                <img src={logo} alt="logo_img"/>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Expedita eligendi aperiam harum eaque, dicta facere iste exercitationem</p>
                                <div className="footer_social_icon">
                                    <a href="https://www.facebook.com/profile.php?id=100083372317538"><i className="fab fa-facebook-f"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-12 col-12">
                            <div className="footer_wedget">
                                {FooterItems.slice(0, 1).map((data, index) => (
                                    <FooterWidget data={data} key={index}/>
                                ))}

                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 col-12">

                            <div className="footer_wedget">
                                {FooterItems.slice(1, 2).map((data, index) => (
                                    <FooterWidget data={data} key={index}/>
                                ))}
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-12 col-sm-12 col-12">
                            <div className="footer_wedget">
                                <h4>Contact Info</h4>
                                <div className="contact-info-footer">
                                    <ul>
                                        <li><i className="fas fa-map-marker-alt"></i>Via Pave 4, Milano, 20056</li>
                                        <li><i className="far fa-envelope"></i> <a
                                            href="mailto:office@imperialtraslochi.it"> office@imperialtraslochi.it</a></li>
                                        <li><i className="far fa-envelope"></i> <a
                                            href="mailto:andrei.birca@imperialtraslochi.it">andrei@imperialtraslochi.it</a></li>
                                        <li><i className="fas fa-phone-volume"></i> <a href="tel:+39 388 854 5019"> +39 388 854 5019</a></li>
                                        <li><i className="far fa-clock"></i>Mon - Sat: 9:00 - 18:00</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </footer>
            
        </>
    )
}

export default Footer

export const FooterWidget = ({data}) => (
    <>
        <h4>{data.title}</h4>
        <ul>
            {data.links.map((datas, index) => (
                <li key={index}><Link to={datas.link}>{datas.linkTitle}</Link></li>
            ))}
        </ul>
    </>
)