import React from 'react'
import "../Home/Home.css"
import girl1 from "../../Assets/girl.png"
import girl2 from "../../Assets/girl2.png"
import guy3 from "../../Assets/guy3.png"
import Footer from '../../components/Footer'
import shirt1 from "../../Assets/shirt1.png"
import shirt2 from "../../Assets/shirt2.png"
import shirt3 from "../../Assets/shirt3.png"


export const Home = () => {
  return (
    
      <div className='homeInfo'>
        <div className='homeText'>
          <h1>
                Shop A* Merch Today! 
          </h1>
          <p>
          Celebrate your A-Star journey with our exclusive 2024 collection! Represent the program that equips you with industry-level computer science skills in style. Explore our apparel and wear your achievements proudly!</p>
          <a href='/Products'>
            <button className='shopNowBtn'>Shop Now</button>
          </a>
        </div>
            
      

        <div className='imageSlides'>
          <div className='slider'>
            <img src={shirt1} alt="shirt1" id='slide1'/>
            <img src={shirt3} alt="shirt2" id='slide2'/>
            <img src={shirt2} alt="shirt3" id='slide3'/>

          </div>
          <div className='SliderNav'>
            <a href='#slide1'></a>
            <a href='#slide2'></a>
            <a href='#slide3'></a>

          </div>
        </div>
  
        <Footer />
        
      </div>
  
   
  )
}


export default Home