import React, { useState } from 'react'
import './navbar.css';
import {Link} from 'react-scroll';
import logo from '../../assets/Rlogo.png';
import menu from '../../assets/menu.png';
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className='navbar'>
        <img src={logo} alt='logo' className='logo'/>
        <div className='desktopMenu'>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-80} duration={500} className='desktopMenuListItem'>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-80} duration={500} className='desktopMenuListItem'>About</Link>
            <Link activeClass='active' to='work' spy={true} smooth={true} offset={-80} duration={500} className='desktopMenuListItem'>Skills</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-80} duration={500} className='desktopMenuListItem'>Contact</Link>
        </div>

        <img src={menu} alt='Menu' className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/>
        <div className='navMenu' style={{display: showMenu? 'flex':'none'}}>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-80} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-80} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>About</Link>
            <Link activeClass='active' to='work' spy={true} smooth={true} offset={-80} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Skills</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-80} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Contact</Link>
        </div>
    </nav>
  )
}

export default Navbar