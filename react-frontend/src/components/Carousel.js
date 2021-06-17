import React from 'react';

const Carousel = () => (
    <div id="myCarousel" className="carousel slide bg-secondary mt-1 pt-3 pb-3 pl-3 pr-3" data-ride="carousel">
        <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
            <li data-target="#myCarousel" data-slide-to="3"></li>
        </ol>
        <div className="carousel-inner text-center">
            <div className="carousel-item active">
                <img src="./slide1.jpg" className="img-fluid w-75 border border-dark rounded-pill" alt="Park in Chandler" style={{ height: '500px' }} />
            </div>
            <div className="carousel-item ">
                <img src="./slide2.jpg" className="img-fluid w-75 border border-dark rounded-pill" alt="Park in Chandler" style={{ height: '500px' }} />
            </div>
            <div className="carousel-item ">
                <img src="./slide3.jpg" className="img-fluid w-75 border border-dark rounded-pill" alt="Park in Chandler" style={{ height: '500px' }} />
            </div>
            <div className="carousel-item ">
                <img src="./slide4.jpg" className="img-fluid w-75 border border-dark rounded-pill" alt="Park in Chandler" style={{ height: '500px' }} />
            </div>
        </div>
        <a className="carousel-control-prev w-10" href="#myCarousel" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next w-10" href="#myCarousel" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
        </a>
    </div>
);

export default Carousel;