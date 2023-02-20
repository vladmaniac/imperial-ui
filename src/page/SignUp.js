import React from 'react'
import CommonBanner from '../component/Common/Banner'
import SignUpForm from "../component/SignUp";
import OurPartner from '../component/Common/OurPartner'

const SignUp = () => {
    return (
        <>
            <CommonBanner heading="Sign Up" page="Sign Up"/>
            <SignUpForm heading="Creare un conto!"/>
            <OurPartner/>
        </>
    )
}

export default SignUp
