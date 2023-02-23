import React from 'react'
import {Link} from 'react-router-dom';
// ServiceSideBar Area
const ServiceSideBar = () => {
    return (
        <>
            <div className="col-lg-4">
                <div className="service_details_sidebar">
                    <div className="sidebar_service_wrappers">
                        <h3>I nostri servizi</h3>
                        <ul>
                            <li><Link to="/service">Trasloco casa</Link></li>
                            <li><Link to="/service">Trasloco ufficio</Link></li> 
                            <li><Link to="/service">Traslochi internazionali</Link></li>
                            <li><Link to="/service">Montaggio mobili</Link></li>
                            <li><Link to="/service">Deposito mobili</Link></li>
                            <li><Link to="/service">Distribuzione arredi</Link></li>
                            <li><Link to="/service">Sgomberi</Link></li>
                            <li><Link to="/service">Smaltimento in discarica</Link></li>
                        </ul>
                    </div>
                    <div className="sidebar_service_wrappers">
                        <h3>I nostri opuscoli</h3>
                        <ul>
                            <li><a href="#!"> <i className="far fa-file-pdf"></i> Opuscolo di servizio.Pdf</a></li>
                            <li><a href="#!"><i className="far fa-file-word"></i> About Imperial.Doc</a></li>
                        </ul>
                    </div>
                    <div className="sidebar_service_wrappers">
                        <h3>Contattaci</h3>
                        <div className="contact_sidebar">
                            <h6>Visita il nostro ufficio</h6>
                            <p>Via Marconi 7, Inzago</p>
                        </div>
                        <div className="contact_sidebar">
                            <h6>Telefono</h6>
                            <p>Office: +39 388 854 5019</p>
                            <p>Support: +39 388 391 3246</p>
                        </div>
                        <div className="contact_sidebar">
                            <h6>Email</h6>
                            <p>info@imperialtraslochi.it</p>
                            <p>deposito@imperialtraslochi.it</p>
                        </div>
                    </div>
                    <div className="sidebar_service_wrapper">
                        <Link className="btn btn-theme" to="/request_quote">Richiedi un preventivo</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServiceSideBar
