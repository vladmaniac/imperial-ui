import React from 'react'
import {Link} from 'react-router-dom';
// Import Error img
import img1 from '../../assets/img/common/error-404.png'

// ErrorArea Area
const ErrorMessages = () => {
    return (
        <>
            <section id="error_area">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="error-img">
                                <img src={img1} alt="Error Imgs"/>
                                <h3>Pagina non trovata</h3>
                                <Link to="/" className="btn btn-theme">Back To Home</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ErrorMessages
