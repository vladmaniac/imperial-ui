import React from 'react'
import CommonBanner from '../component/Common/Banner'
import RequestQuoteForm from '../component/Common/RequestQuoteForm'
import OurPartner from '../component/Common/OurPartner'

const RequestQuote = () => {
 return (
   <>
     <CommonBanner heading="Richiedi un preventivo" page="Richiedi un preventivo" />
     <RequestQuoteForm/>
     <OurPartner />
   </>
 );
}

export default RequestQuote
