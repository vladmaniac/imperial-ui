import React from 'react'
import CommonBanner from '../component/Common/Banner'
import SignInForm from '../component/SignIn'
import OurPartner from '../component/Common/OurPartner'

const SignIn = () => {
    return (
        <>
            <CommonBanner heading="Sign In" page="Sign In"/>
            <SignInForm heading="Accedi al tuo conto!"/>
            <OurPartner/>
        </>
    )
}

export default SignIn
