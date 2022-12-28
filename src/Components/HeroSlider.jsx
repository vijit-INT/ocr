import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import styles from './Navbar.module.css'

const HeroSlider = () => {
  return (
    <div className={styles.heroMaindiv}>
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/333850/pexels-photo-333850.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="First slide"
          id={styles.img}
        />
       
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/2792116/pexels-photo-2792116.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Second slide"
          id={styles.img}
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/2437847/pexels-photo-2437847.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="Third slide"
          id={styles.img}
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent image is a state of art.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default HeroSlider