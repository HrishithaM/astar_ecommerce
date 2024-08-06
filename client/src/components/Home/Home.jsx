import React from 'react'
import "../Home/Home.css"
import girl1 from "../../Assets/girl.png"
import girl2 from "../../Assets/girl2.png"
import guy3 from "../../Assets/guy3.png"


export const Home = () => {
  return (
    
      <div className='homeInfo'>
        <div className='homeText'>
          <h1>
                Shop A* Merch Today! 
          </h1>
          <p>
              Lorem ipsum odor amet, consectetuer adipiscing elit. Aptent adipiscing natoque; nascetur dolor elit diam pulvinar. 
              Euismod mollis lacus at sollicitudin mus ullamcorper. Molestie inceptos sollicitudin id natoque conubia. Urna cursus egestas justo maecenas cras in sociosqu a. 

          </p>
          <a href='/Apparel'>
            <button className='shopNowBtn'>Shop Now</button>
          </a>
        </div>
            
      

        <div className='imageSlides'>
          <div className='slider'>
            <img src={girl1} alt="girl1" id='slide1'/>
            <img src={girl2} alt="girl2" id='slide2'/>
            <img src={guy3} alt="guy3" id='slide3'/>

          </div>
          <div className='SliderNav'>
            <a href='#slide1'></a>
            <a href='#slide2'></a>
            <a href='#slide3'></a>

          </div>
        </div>
  
   
        
      </div>
  
   
  )
}


export default Home