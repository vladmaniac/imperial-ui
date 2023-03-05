import React from 'react'
// Import Gallery Img
import img1 from '../../assets/img/gallery/gallery-1.jpg'
import img2 from '../../assets/img/gallery/gallery-2.jpg'
import img3 from '../../assets/img/gallery/gallery-3.jpg'
import img4 from '../../assets/img/gallery/gallery-4.jpg'
import img5 from '../../assets/img/gallery/gallery-5.jpg'
import img6 from '../../assets/img/gallery/gallery-6.jpg'
import img7 from '../../assets/img/gallery/gallery-7.jpeg'
import img8 from '../../assets/img/gallery/gallery-8.jpeg'
import img9 from '../../assets/img/gallery/gallery-9.jpeg'
import img10 from '../../assets/img/gallery/gallery-10.jpeg'
import img11 from '../../assets/img/gallery/gallery-11.jpeg'
import img12 from '../../assets/img/gallery/gallery-12.jpeg'
import img13 from '../../assets/img/gallery/gallery-13.jpeg'
import img14 from '../../assets/img/gallery/gallery-14.jpeg'
import img15 from '../../assets/img/gallery/gallery-15.jpeg'
import img16 from '../../assets/img/gallery/gallery-16.jpeg'
import img17 from '../../assets/img/gallery/gallery-17.jpeg'
import img18 from '../../assets/img/gallery/gallery-18.jpeg'

// Import ReactFancyBox
import ReactFancyBox from 'react-fancybox'
import 'react-fancybox/lib/fancybox.css'


const GalleryData = [
    {
        img: img1
    },
    {
        img: img2
    },
    {
        img: img3
    },
    {
        img: img5
    },
    {
        img: img7
    },
    {
        img: img12
    },
    {
        img: img8
    },
    {
        img: img9
    },
    {
        img: img10
    },
    {
        img: img11
    },
    {
        img: img13
    },
    {
        img: img14
    },
    {
        img: img15
    },
    {
        img: img16
    },
    {
        img: img17
    },
    {
        img: img18
    }
]

const GalleryImages = () => {
    return (
        <>
            <section id="gallery_area">
                <div className="container">
                    <div className="row">
                        {GalleryData.map((data, index) => (
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={index}>
                                <div className="single-gallery">
                                    <ReactFancyBox
                                        thumbnail={data.img}
                                        image={data.img}/>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>
        </>
    )
}

export default GalleryImages
