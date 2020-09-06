import React from 'react';
import './Footer.scss';

import X from '../../images/x.png';
import Leaf from '../../images/leaf.png';
import Yang from '../../images/yin-yang.png';

import Instagram from '../../images/instagramblack.png';
import Facebook from '../../images/facebookblack.png';
import Twitter from '../../images/twitterblack.png';

const Footer = () => {
  return (
    <div className='containerFluid contact text-center py-5' id='contact'>
      <div className="d-flex flex-column flex-md-row m-0 text-center">
        <div className="col-12 col-md-6 leftFooter p-3 mt-4  text-center">
          <h5>
            <img className='d-none d-md-inline' style={{backgroundColor: '#fff', borderRadius:'50%', width: '30px'}} src={Yang} alt=""/> 
            TRUE LOVE
            <img src={X} style={{width: '30px'}} alt=""/> 
            TATTOO STUDIO 
            <img className='d-none d-md-inline' style={{backgroundColor: '#fff', borderRadius:'50%', width: '30px'}} src={Yang} alt=""/>
          </h5>
            
            <span>201#-2020 <span style={{color: '#cc1836'}}>&#x25C6;</span> True Love Tattoo Lisbon.</span>
        </div>

        <div className="col-12 col-md-6 rightFooter p-0 m-0">
            <ul className='text-center p-0 m-0'>
              <li>CALL US ON <br/>
                <span>+351 928 351 325</span>
              </li>
            </ul>

            <div className='text-center pt-3 m-0'>
              <h5>OUR SOCIAL MEDIA:</h5>
              <ul className='row justify-content-center text-center p-0 m-0'>
                <li className='mr-1'><a href="#"><img src={Instagram} alt=""/></a></li>
                <li><a href="#"><img src={Facebook} alt=""/></a></li>
                <li className='ml-1'><a href="#"><img src={Twitter} alt=""/></a></li>
              </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
