import React from 'react'
import TermsConditionContent from '../component/TermsCondition'
import CommonBanner from '../component/Common/Banner'
import OurPartner from '../component/Common/OurPartner'

const TermsCondition = () => {
    return (
        <>
            <CommonBanner heading="Termini e condizioni" page="Termini e condizioni"/>
            <TermsConditionContent/>
            <OurPartner/>
        </>
    )
}

export default TermsCondition
