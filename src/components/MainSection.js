import React from 'react';
import '../App.css';
import './MainSection.css';
import Cards from "./Cards";


const Images = [
  "/images/grouppic.jpg",
  "/images/_MG_0106.jpg",
  "/images/_MG_0349.jpg",
  "/images/IMG_0359.jpg",
  "/images/_MG_0177.jpg",
  "/images/_MG_0137.jpg",
  "/images/group.jpg",
  "/images/_MG_0139.jpg",
  "/images/_MG_0155.jpg",
  "/images/IMG_0237.jpg",
  "/images/_MG_0292.jpg",
  "/images/IMG_9840.jpg",
  "/images/_MG_0298.jpg",
  "/images/_MG_0116.jpg",
  "/images/_MG_0279.jpg"
]

const counter = Images.length - 1;

function MainSection() {
  return (
    <>
      <div className='main-container'>
        <div className='about-container'>
          <div className='about-section'>
            <h2>About</h2>
            <p>I had the unique experience of studying abroad in Rome as part of the Notre Dame Engineering Summer Study Abroad Program. With 48 other engineering students, part of the experience involved managing our own meal plan while we were there, which included both cooking and eating out. </p>
            <p>I  created this blog for future students who plan to study in Rome to help them navigate what can sometimes be an overwhelming process. I wanted to help provide a guide for navigating the numerous restaurants in Rome and showcase some recipes that students have tried out themselves.</p>
          </div>
        </div>
        <div className='carousel'>
          <div className="slider-wrapper">
            <div className="slider">
              {Images.map((image, index) => (
                index <= counter && (
                  <img key={`slide-${index + 1}`} src={image} id={`slide-${index + 1}`} />)
              ))}
            </div>
            <div className="slider-nav">
              {Images.map((_, index) => (
                index <= counter && (
                  <a key={`nav-$(index)`} href={`#slide-${index + 1}`} />)
              ))}
            </div>
          </div>
        </div>
        <div className='card-container'>
          <Cards />
        </div>
        <div className='footer'>©WhenInRome</div>
      </div>
    </>
  )
}

export default MainSection;
