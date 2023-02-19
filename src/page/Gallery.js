import React from 'react'
import CommonBanner from '../component/Common/Banner'
import GalleryImages from '../component/Gallery'
import OurPartner from '../component/Common/OurPartner'

const Gallery = () => {
    return (
        <>
            <CommonBanner heading="Galleria" page="Galleria"/>
            <GalleryImages/>
            <OurPartner/>
        </>
    )
}

export default Gallery
