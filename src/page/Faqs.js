import React from 'react'
import CommonBanner from '../component/Common/Banner'
import AllFaqs from '../component/Faqs'
import OurPartner from '../component/Common/OurPartner'

const Faqs = () => {
    return (
        <>
            <CommonBanner heading="FAQ" page="FAQ"/>
            <AllFaqs/>
            <OurPartner/>
        </>
    )
}

export default Faqs
