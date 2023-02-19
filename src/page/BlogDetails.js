import React from 'react'
import CommonBanner from '../component/Common/Banner'
import BlogDetailsArea from '../component/BlogDetails'
import OurPartner from '../component/Common/OurPartner'

const BlogDetails = () => {
    return (
        <>
            <CommonBanner heading="Blog" page="Blog"/>
            <BlogDetailsArea/>
            <OurPartner/>
        </>
    )
}

export default BlogDetails
