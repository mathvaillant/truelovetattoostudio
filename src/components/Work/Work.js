import React from 'react';
import './Work.scss';
import Work1 from '../../images/3.PNG';
import Work2 from '../../images/4.PNG';
import Work3 from '../../images/6.PNG';
import Work4 from '../../images/7.PNG';
import Work5 from '../../images/9.PNG';
import Work6 from '../../images/10.PNG';

const Work = () => {
  return (
    <div className='containerFluid text-center work pt-5' id='work'>
      <h2 className='py-5'>Our Work</h2>
      <span style={{color: '#cc1836'}}>&#x25C6; &#x25C6; &#x25C6;</span>
      <div className="row mx-5 py-5 justify-content-center">

          <div className="product col-12 col-sm-3 my-2">
            <div className='productImg'>
              <img className='img-fluid' src={Work1} alt=""/>
            </div>
          </div>

          <div className="product col-12 col-sm-3 my-2">
            <div className='productImg'>
              <img className='img-fluid' src={Work2} alt=""/>
            </div>
          </div>

          <div className="product col-12 col-sm-3 my-2">
            <div className='productImg'>
              <img className='img-fluid' src={Work3} alt=""/>
            </div>
          </div>

          <div className="product col-12 col-sm-3 my-2">
            <div className='productImg'>
              <img className='img-fluid' src={Work4} alt=""/>
            </div>
          </div>

          <div className="product col-12 col-sm-3 my-2">
            <div className='productImg'>
              <img className='img-fluid' src={Work5} alt=""/>
            </div>
          </div>

          <div className="product col-12 col-sm-3 my-2">
            <div className='productImg'>
              <img className='img-fluid' src={Work6} alt=""/>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Work
