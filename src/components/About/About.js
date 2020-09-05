import React, { Fragment } from 'react';
import Hand from '../../images/hand.PNG';
import AboutScss from './About.scss';

const About = () => {
  return (
    <div className='containerFluid about m-0 p-0' id='about'>
      <div className="row p-0 m-0">
            <img className='img-fluid left d-none d-md-block col-md-6 m-0 p-0' src={Hand} alt=""/>
          <div className='right col-12 col-md-6 m-0 p-4'>
            <div className='p-5'>
              <h2 className='mx-1'>Welcome To Our Tattoo Shop</h2>
              <h4 className='mx-1'>TRUE LOVE TATTOO</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum obcaecati dicta iste. </p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex alias libero ratione sapiente voluptatem repudiandae possimus distinctio mollitia.</p>

             <button><a href="#work">CHECK OUR WORK!</a></button>
            </div>  
          </div>
      </div>
    </div>
  )
}

export default About
