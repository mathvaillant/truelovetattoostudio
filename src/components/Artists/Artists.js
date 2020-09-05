import React from 'react';
import ArtistsScss from './Artists.scss';
import Anita from '../../images/00.PNG';
import Instagram from '../../images/instagram.png';
import Facebook from '../../images/facebook.png';
import Twitter from '../../images/twitter.png';

const Artists = () => {
  return (
    <div className='containerFluid artists py-5' id="artists">
      <h2 className='py-5'>Our Artists</h2>
      <span style={{color: '#cc1836'}}>&#x25C6; &#x25C6; &#x25C6;</span>
      <div className="row m-5 justify-content-center text-center">

          <div className="col-12 col-md-4 text-center artist">
            <img className='img-fluid my-4' src={Anita} alt=""/>
            <h3>Anita</h3>
            <span>Tattoo Artist</span>
            <ul className='row justify-content-center px-0 py-2'>
              <li className='mr-1'><a href="#"><img src={Instagram} alt=""/></a></li>
              <li><a href="#"><img src={Facebook} alt=""/></a></li>
              <li className='ml-1'><a href="#"><img src={Twitter} alt=""/></a></li>
            </ul>
          </div>
      </div>
    </div>
  )
}

export default Artists
