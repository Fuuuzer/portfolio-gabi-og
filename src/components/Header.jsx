import './Header.css'
import React from 'react';
import star from '../assets/img/star.svg';
import whats from '../assets/img/WhatsApp.svg';

const Header = () => {
  const [menuActive, setMenuActive] = React.useState(false);
  React.useEffect(() => {
    if (menuActive) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuActive]);
  return (

    <header className='header'>
      <div className='header-info'>
        <img className='star' src={star} alt="" />
        <p className='header-desc'>Fotógrafa e Social Media</p>
      </div>
      <h1 className='title'>GABRIELLE OREZKO</h1>
      <a href="https://wa.me/5551999231968" target='_blank'><button><img src={whats} alt="" />Contato</button></a>
      <div
        className={`menu ${menuActive ? 'active' : ''}`}
        onClick={() => setMenuActive(prev => !prev)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={`contact-container ${menuActive ? 'active' : ''}`}>
        <div className='contact'>
          <a target='_blank' href='https://wa.me/+5551999231968'><img className='star' src={star} alt="" />Contato</a>
        </div>
        <div className='contact'>
          <a target='_blank' href='https://www.instagram.com/gabiozzzz?igsh=MWhqYWw5bzRwaG5jeQ%3D%3D&utm_source=qr'><img className='star' src={star} alt="" />Me Siga</a>
        </div>
      </div>


    </header >
  )
}

export default Header