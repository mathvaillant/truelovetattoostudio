import React from 'react';
import './Store.scss';
import p1 from '../../images/p1.jpeg';
import p2 from '../../images/p2.jpeg';
import p3 from '../../images/p3.jpeg';
import p4 from '../../images/p5.jpeg';

const Store = () => {
  return (
    <div className='containerFluid text-center store py-5' id='store'>
      <h2 className='py-5'>Our Store</h2>
      <span style={{color: '#cc1836'}}>&#x25C6; &#x25C6; &#x25C6;</span>
      <div className="row mx-5 py-5 justify-content-center">

          <div className="product col-12 col-md-3 column my-2">
            <div className='productImg'>
              <img className='img-fluid' src={p1} alt=""/>
            </div>
            <div className='p-0 mt-1 desc'>
            <button><a href="https://anitatruelove.bigcartel.com/" target='_blank' rel="noopener noreferrer">Check in store</a></button>
            </div>
          </div>

          <div className="product col-12 col-md-3 column my-2">
            <div className='productImg'>
              <img className='img-fluid' src={p2} alt=""/>
            </div>
            <div className='p-0 mt-1 desc'>
            <button><a href="https://anitatruelove.bigcartel.com/" target='_blank' rel="noopener noreferrer">Check in store</a></button>
            </div>
          </div>

          <div className="product col-12 col-md-3 column my-2">
            <div className='productImg'>
              <img className='img-fluid' src={p3} alt=""/>
            </div>
            <div className='p-0 mt-1 desc'>
            <button><a href="https://anitatruelove.bigcartel.com/" target='_blank' rel="noopener noreferrer">Check in store</a></button>
            </div>
          </div>

          <div className="product col-12 col-md-3 column my-2">
            <div className='productImg'>
              <img className='img-fluid' src={p4} alt=""/>
            </div>
            <div className='p-0 mt-1 desc'>
              <button><a href="https://anitatruelove.bigcartel.com/" target='_blank' rel="noopener noreferrer">Check in store</a></button>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Store
