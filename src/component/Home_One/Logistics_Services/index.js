import React, {useState} from 'react'
// Import LogisticsCard
import LogisticsCard from './LogisticsCard'
// Import LogisticsData
import {LogisticsData} from './Logistics_Data'
// import Section Heading 
import SectionHeading from '../../Common/SectionHeading'
//  OwlCarousel Slider Import
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const LogisticsService = () => {
    const [sliderIndex, setSliderIndex] = useState(0)


    let responsive = {
        0: {
            items: 1,
        },
        600: {
            items: 1,
        },
        960: {
            items: 2,
        },
        1200: {
            items: 3,
        },
    }

    return (
        <>
            <section id="logistics_area">
                <div className="container">
                    <SectionHeading heading="Servizi logistici" para="Risolvere le esigenze della tua catena di approvvigionamento dall'inizio alla fine, prendendo il
              complessità della spedizione in container. Siamo in prima linea nello sviluppo dell'innovazione."/>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="logistics_wrappers">
                                <div className="logistic_tabs_button">
                                    <ul>
                                        <li>
                                            <button className={sliderIndex === 0 ? 'active' : ''}
                                                    onClick={() => setSliderIndex(0)}>Traslochi Nazionali e Internazionali
                                            </button>
                                        </li>
                                        <li>
                                            <button className={sliderIndex === 1 ? 'active' : ''}
                                                    onClick={() => setSliderIndex(1)}>Servizi di logistica
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                                <div className="logistics_area_slider">
                                    {sliderIndex === 0 && (
                                        <OwlCarousel className="owl-theme" responsive={responsive} autoplay={true}
                                                     autoplayHoverPause={true} autoplayTimeout={2500}
                                                     loop={true} margin={10} nav={true} dots={false}>
                                            {LogisticsData[0].map((data, index) => (
                                                <LogisticsCard img={data.img} heading={data.heading} para={data.para}
                                                               key={index}/>))}
                                        </OwlCarousel>
                                    )}

                                    {sliderIndex === 1 && (
                                        <OwlCarousel className="owl-theme" responsive={responsive} autoplay={true}
                                                     autoplayHoverPause={true} autoplayTimeout={2500}
                                                     loop={true} margin={10} nav={true} dots={false}>
                                            {LogisticsData[1].map((data, index) => (
                                                <LogisticsCard img={data.img} heading={data.heading} para={data.para}
                                                               key={index}/>))}
                                        </OwlCarousel>
                                    )}

                                    {sliderIndex === 2 && (
                                        <OwlCarousel className="owl-theme" responsive={responsive} autoplay={true}
                                                     autoplayHoverPause={true} autoplayTimeout={2500}
                                                     loop={true} margin={10} nav={true} dots={false}>
                                            {LogisticsData[2].map((data, index) => (
                                                <LogisticsCard img={data.img} heading={data.heading} para={data.para}
                                                               key={index}/>))}
                                        </OwlCarousel>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LogisticsService;
