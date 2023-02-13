import React from 'react'
// Import Counter
import Counter from './Counter';
// About Img
import img1 from '../../../assets/img/home1/sotia-andrei.jpg'
import img2 from '../../../assets/img/home1/sign.png'
// Counter Data
const CounterData = [
    {
        countStart: 100,
        countEnd: 2010,
        heading: "COSTITUISCE LA SOCIETA'",
        icon: " fas fa-building"
    },
    {
        countStart: 100,
        countEnd: 6500,
        heading: "PACHI CONSEGNATI",
        icon: "fas fa-globe"
    },
    {
        countStart: 1,
        countEnd: 25,
        heading: "DIPENDENTI",
        icon: " fas fa-building"
    },
]

const HomeAbout = () => {
    return (
        <>
            <section id="home_about_area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                            <div className="about_img">
                                <img src={img1} alt="About_Img"/>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                            <div className="about_content">
                                <div className="heading-left-border">
                                    <h2>10 + ANNI ESPERIENZA NELLA LOGISTICA</h2>
                                </div>
                                <h3>Traslochi su misura per ogni esigenza.</h3>
                                <p>Un’azienda esperta di traslochi.
                                    Dal 2010, sempre in movimento.
                                    La Imperial Traslochi opera nel settore dei traslochi e dei trasporti locali, nazionali e internazionali.
                                    Nata dall’esperienza pluriennale del suo fondatore, ha base operativa a Milano. Affidabilità, qualità e competenza sono i suoi punti di forza.
                                    Con passione e dedizione segue le esigenze della clientela in tutte le fasi, spesso delicate e faticose, del trasloco con l’aspirazione di fornire un servizio pienamente soddisfacente.
                                    Possiamo quindi essere il partner per piccoli, medi e grandi traslochi e ci facciamo carico anche di beni di un certo valore.
                                </p>
                                <div className="about_sign_arae">
                                    <div className="distaion_area">
                                        <h5>Andrei Birca</h5>
                                        <h6>CEO, Imperial Trasporti e Traslochi</h6>
                                    </div>
                                    <div className="signature">
                                        <img src={img2} alt="About_Img"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="about_counter_area">
                        <div className="row">
                            {CounterData.map((data, index) => (
                                <Counter countStart={data.countStart} countEnd={data.countEnd} heading={data.heading}
                                         icon={data.icon} key={index}/>))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeAbout