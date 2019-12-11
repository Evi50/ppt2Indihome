import React, { Component } from 'react';
class Home extends Component {
    render() {
        return (
            <div className="slider">
                <div className="container sliderimage">
                    <div className="row">
                        <img src={require('../../gambar/desktop.jpg')} alt="Responsive image" className="img-fluid rounded slide"/>
                    </div>
                </div>
                <div className="container notive">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="alert alert-danger danger">
                                <p className="text-white text-center">A simple success alert-check it out!</p>
                            </div>
                        </div>
                    </div>
                </div>
            
            
            <div className="container slide">
                <div className="row">
                    <div className="col-md-8">
                        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={require('../../gambar/slide1.jpg')} className="img-fluid d-block w-100"/>
                                </div>
                                <div className="carousel-item">
                                    <img src={require('../../gambar/slide2.jpg')} className="img-fluid d-block w-100"/>
                                </div>
                                <div className="carousel-item">
                                    <img src={require('../../gambar/slide3.jpg')} className="img-fluid d-block w-100"/>
                                </div>
                                <a href="#carouselExampleIndicators" className="carousel-control-prev" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <img src={require('../../gambar/mini-banner-1-raw.png')} alt="Responsive image" className="img-fluid rounded slide"/>
                        <img src={require('../../gambar/desktop.jpg')} alt="Responsive image" className="img-fluid rounded slide"/>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Home;