import React from 'react'
import CommonBanner from '../component/Common/Banner'
import ContactDetails from '../component/Contact'
import OurPartner from '../component/Common/OurPartner'

const Contact = () => {
    return (
        <>
            <CommonBanner heading="Contattaci" page="Contatto"/>
            <ContactDetails/>
            <OurPartner/>
        </>
    )
}

export default Contact
