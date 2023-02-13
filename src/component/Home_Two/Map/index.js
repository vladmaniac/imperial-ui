import React from 'react'
// Import Maps
import Maps from '../../Common/Map'
// Import SectionHeading
import SectionHeading from '../../Common/SectionHeading'

const HomeTwoMap = () => {
    return (
        <>
            <section id="maps_area_common">
                <div className="container">
                    <SectionHeading heading="Imperial Traslochi e Trasporti" para="Semplificare le tue esigenze di trasporto e logistica con un approccio personale."/>
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="maps-area">
                                <Maps/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeTwoMap
