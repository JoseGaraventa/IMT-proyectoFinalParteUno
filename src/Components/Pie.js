import React from 'react';

const Pie = () => {

    return (

    <div className='row'>
       
        <div className="row p-5 bg-dark text-light">
            
            <div className='col-xs-12 col-md-6 col-lg-3'>
                <a href='#' className='h3 text-secondary text-decoration-none'>BeRumen</a>
            </div>

            <div className='col-xs-12 col-md-6 col-lg-3'>
                <a href='#' className='h3'><ion-icon name="logo-facebook"></ion-icon></a>
                
            </div>

            <div className='col-xs-12 col-md-6 col-lg-3'>
                <a href="#" className='h3 text-warning'><ion-icon name="logo-instagram"></ion-icon></a>
            </div>

            <div className='col-xs-12 col-md-6 col-lg-3'>
                <a  href="#"className='h3 text-light'><ion-icon name="logo-twitter"></ion-icon></a>
            </div>

        </div>

    </div>
    )

}

export default Pie;
