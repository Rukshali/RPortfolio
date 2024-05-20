import React from 'react';
import './intro.css';
import bg from '../../assets/RPic.jpg' ;
const Intro = () => {
  return(
    <section id='intro'>
        <div className='introContent'>
            <span className='hello'>Hello, </span>
            <span className='introText'>I'm<span className='introName'> Rukshali</span><br/>Python Developer </span>
            <p className='introPara'>I am a final year Computer Science Engineering Student.</p>
        </div>
        <img src={bg} alt='ProfilePhoto' className='bg'/>
    </section>
  )
}

export default Intro;