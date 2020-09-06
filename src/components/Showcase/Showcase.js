import React from 'react';
import './Showcase.scss';
import X from '../../images/x.png';
import Leaf from '../../images/leaf.png';
import Yang from '../../images/yin-yang.png';

const Showcase = () => {
  return (
    <section className='containerFluid showcase'>
      <div className='navbars row justify-content-center justify-content-md-between m-0 pt-md-3 px-md-5'>
        <nav className='navRight d-none d-md-block'>
          <ul className="d-flex flex-row p-0">
              
            <li className='mx-2 text-left' style={{fontWeight:'600'}}>ADDRESS: 
              <br/>
              <span>RUA PASSADIÇO 66, 
              <br/> 
              1150-207 LISBON</span>
            </li>

            <br/>
            
            <li className='mx-2 text-left' style={{fontWeight:'600'}}>WORKING HOURS: <br/> 
              <span>
              WED TO SAT | 1-6PM
              <br/>
                SUN TO TUE | CLOSED
            </span>
            </li>
          </ul>
          <ul className='mx-2 mt-4 d-flex flex-row p-0' style={{fontWeight:'700'}}>
            <li className='mr-4'><a href="#about">ABOUT US</a></li>
            <li className='mx-4'><a href="#artists">ARTISTS</a></li>
            <li className='ml-4'><a href="#store">STORE</a></li>
            
          </ul>
        </nav>

        <nav className='navLeft d-none d-md-block'>
          <ul>
            <li className='text-right' style={{fontWeight:'600'}}>CALL US ON <br/>
              <span 
                style={{fontWeight:'700', fontSize: '1.4rem'}}>
                +351 928 351 325
              </span>
            </li>
          </ul>
          <ul className='mx-2 mt-4 d-flex flex-row justify-content-end' style={{fontWeight:'700'}}>
            <li className='mr-4'><a href="#work">WORK</a></li>
            <li className='ml-4'><a href="#contact">CONTACT</a></li>
            
          </ul>
        </nav>

        <nav className="smallDevice containerFluid d-md-none">
          <div className="row text-center m-0">
            <ul className='smallUl row p-2 m-0'>
              <li className='mr-1'><a href="#about">ABOUT US | </a></li>
              <li className='mx-1'><a href="#artists">ARTISTS | </a></li>
              <li className='mx-1'><a href="#store">STORE | </a></li>
              <li className='mx-1'><a href="#work">WORK </a></li>
              <li className='ml-1'><a href="#contact"> | {' '} CONTACT</a></li>
            </ul>
          </div>
        </nav>
      </div>

      <div className='requestContact container text-center mt-5'>
        <h1 className='py-2'>
          <img className='d-none d-md-inline' style={{backgroundColor: '#fff', borderRadius:'50%'}} src={Yang} alt=""/> 
          TRUE
          <img src={X} alt=""/> 
           LOVE 
          <img className='d-none d-md-inline' style={{backgroundColor: '#fff', borderRadius:'50%'}} src={Yang} alt=""/>
        </h1>
        <h2 className='py-2'>
          <img src={Leaf} alt=""/>
          {'  '} TATTOO STUDIO | Vegan Inks {'  '}
          <img src={Leaf} alt=""/>
        </h2>
        {/* <form className='mt-5' action="">
          <input type="email" name='email'  placeholder='YOUR EMAIL'/>
          <input type="text" name='number'  placeholder='YOUR PHONE'/>
          <br/>
          <input type="submit" value='REQUEST CONTACT'/>
        </form> */}
      </div>


      <div className='container showcaseBottom'>
        <div className="d-flex flex-column flex-md-row">
          <div className='col-12 col-md-4'>
            <h1>BEST TATTOO ARTISTS</h1>
            <h4>THE MOST AUTHENTIC IN THE CITY</h4>
          </div>

          <div className='col-12 col-md-4'>
            <h1>GUARANTEED SATISFACTION</h1>
            <h4>WE WORK BY HEART</h4>
          </div>

          <div className='col-12 col-md-4'>
            <h1>100% FRIENDLY</h1>
            <h4>TATTOING IS ALSO A MATTER OF IT</h4>
          </div>
        </div>
        </div>
    </section>
  )
}

export default Showcase
