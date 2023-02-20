import React from 'react'
// Import SectionHeading
import SectionHeading from '../Common/SectionHeading'
// Import ServiceCard
import ServiceCard from '../Common/Service/ServiceCard'
// Import ServiceData
import {ServiceData} from '../Common/Service/ServiceData'

const ServicesCard = () => {
    return (
        <>
            <section id="services_page">
                <div className="container">
                    <SectionHeading heading="Affida il tuo trasloco ai nostri professionisti"
                                    para="Risolvere le esigenze della tua catena di approvvigionamento dall'inizio alla fine, eliminando la complessità della spedizione e del movimento. Siamo in prima linea nello sviluppo dell'innovazione per la logistica."/>
                    <div className="service_wrapper_top">
                        <div className="row">

                            {ServiceData.map((data, index) => (
                                <div className="col-lg-4" key={index}>
                                    <ServiceCard img={data.img} heading={data.heading} para={data.para}
                                                 button={data.button}/>
                                </div>
                            ))}


                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ServicesCard
