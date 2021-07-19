import React from 'react'
import { Carousel } from 'react-bootstrap';

const CarouselBlock = () => {
    return (
        <div className="container w-75" style={{marginTop:"100px"}}>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        style={{height:"400px"}}
                        src="./Image/img1.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        style={{height:"400px"}}
                        src="./Image/img3.jpeg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        style={{height:"400px"}}
                        src="./Image/img4.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
export default CarouselBlock;