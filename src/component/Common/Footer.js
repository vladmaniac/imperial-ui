import React from 'react'
import {Link} from 'react-router-dom';
// Import Logo Import
import logo from '../../assets/img/logo.png'

const FooterItems = [
    {
        title: "Quick Link",
        links: [
            {linkTitle: "Home", link: "/"},
            {linkTitle: "Chi siamo", link: "/about"},
            {linkTitle: "Servizi", link: "/service"},
            {linkTitle: "Notizie recenti", link: "/blog_details"},
            {linkTitle: "Contatto", link: "/contact"},
        ],
    },
    {
        title: "Company",
        links: [
            {linkTitle: "Servizi", link: "/service"},
            {linkTitle: "Testimonianze", link: "/testimonials"},
            {linkTitle: "Politica sulla riservatezza", link: "/privacyPolicy"},
            {linkTitle: "Termini e condizioni", link: "/terms"},
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
                                <p>Da Imperial Traslochi dedichiamo impegno, passione ed esperienza all'organizzazione di traslochi completi a Milano e in tutta l'Italia.</p>
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
                                <h4>Contatto</h4>
                                <div className="contact-info-footer">
                                    <ul>
                                        <li><i className="fas fa-map-marker-alt"></i>Via Marconi 7, Inzago</li>
                                        <li><i className="far fa-envelope"></i> <a
                                            href="mailto:office@imperialtraslochi.it"> info@imperialtraslochi.it</a></li>
                                        <li><i className="far fa-envelope"></i> <a
                                            href="mailto:andrei.birca@imperialtraslochi.it">deposito@imperialtraslochi.it</a></li>
                                        <li><i className="fas fa-phone-volume"></i> <a href="tel:+39 388 854 5019"> +39 388 854 5019</a></li>
                                        <li><i className="far fa-clock"></i>Lunedi - Domenica: 7:00 - 21:00</li>
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