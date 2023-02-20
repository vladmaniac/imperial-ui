import React from 'react'
import {Link} from 'react-router-dom';
// Import Img
import video1 from '../../../assets/img/common/imperial.mp4';

const HomeTwoAbout = () => {
    return (
        <>
            <section id="service_about">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                            <div className="about_service_img">
                                <video width="500" height="300" controls src={video1} alt="img-about">

                                </video>
                            </div>
                        </div>
                        <div className="col-lg-6  col-md-12 col-sm-12 col-12">
                            <div className="about_service_text">
                                <div className="heading-left-border">
                                    <h2>Pioniere locale della logistica in Lombardia</h2>
                                </div>
                                <p>I nostri servizi di deposito sono noti a livello nazionale per essere tra i più affidabili e sicuri
                                     e conveniente,
                                     perché siamo orgogliosi di fornire il meglio dei servizi di magazzino, al massimo
                                     prezzi ragionevoli.</p>
                                <p></p>
                                <Link to="/request_quote" className="btn btn-theme">Richiedi un preventivo</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeTwoAbout
