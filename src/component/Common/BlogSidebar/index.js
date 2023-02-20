import React from 'react'
import {Link} from 'react-router-dom'
// Import BlogData Component
import img1 from '../../../assets/img/blog/sidetmb-1.png'


const PopularPosts = [
    {
        img: (img1),
        title: "Servizi logistici di consegna",
        date: "Luglio 25, 2022"
    },
    {
        img: (img1),
        title: "Gestione del magazzino",
        date: " Luglio 25, 2022"
    },
    {
        img: (img1),
        title: "Digitalizzazione nei trasporti",
        date: " Luglio 25, 2022"
    },
    {
        img: (img1),
        title: "Un nuovo cliente per noi",
        date: "Luglio 25, 2023"
    }
]


const Category = [
    {
        list: "Entrepreneurs",
        count: "23"
    },
    {
        list: "Montaggio mobili",
        count: "25"
    },
    {
        list: "Logistic",
        count: "28"
    },
    {
        list: "Trasporti internazionali",
        count: "45"
    },
    {
        list: "Traslochi",
        count: "53"
    },
    {
        list: "Warehousing",
        count: "82"
    }
]


const PopularTag = [
    {
        list: "Cargo"
    },
    {
        list: "Contatto"
    },
    {
        list: "Magazino"
    },
    {
        list: "Management"
    },
    {
        list: "Traslochi"
    },
    {
        list: "Servizi"
    },
    {
        list: "Shipment"
    },
    {
        list: "Trasporti"
    },

]

const BlogSidebar = () => {
    return (
        <>
            <div className="blog_sidebar_wrapper">
                <div className="blog_sidebar_item">
                    <div className="blog_sidebar_heading">
                        <h3>Search</h3>
                    </div>
                    <div className="blog-search">
                        <input type="text" className="form-control"/>
                        <i className="fas fa-search"></i>
                    </div>
                </div>
                <div className="blog_sidebar_item">
                    <div className="blog_sidebar_heading">
                        <h3>Categories</h3>
                    </div>
                    <div className="sidebar-categorie-list">
                        <ul>
                            {Category.map((data, index) => (
                                <li key={index}><a href="#!"><span>{data.list}</span> <span>{data.count}</span> </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="blog_sidebar_item">
                    <div className="blog_sidebar_heading">
                        <h3>Popular Posts</h3>
                    </div>
                    <div className="popular_post_wrapper">
                        {PopularPosts.map((data, index) => (
                            <div className="popular_post_item" key={index}>
                                <div className="populer_post_img">
                                    <Link to="/blog_details"><img src={data.img} alt="Thumd_Img"/></Link>
                                </div>
                                <div className="popular_post_text">
                                    <h4><Link to="/blog_details">{data.title}</Link></h4>
                                    <p><i className="far fa-clock"></i>{data.date}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="blog_sidebar_item">
                    <div className="blog_sidebar_heading">
                        <h3>Popular Tag</h3>
                    </div>
                    <div className="tags_blog_sidebar">
                        {PopularTag.map((data, index) => (
                           <Link to="/blog_details" key={index}>{data.list}</Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogSidebar
