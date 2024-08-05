import './Navbar.css'
import logo from '../../assets/logo.png'
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-scroll';
import menu from '../../assets/menu-icon.png'
import { useRef } from 'react';


function Navbar(){
  const [sticky,setsticky] = useState(false);
  const [hide,sethide] = useState(true);
  const inputRef = useRef();

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY >50 ? setsticky(true):setsticky(false)
    })
  },[]);

  function hideNav(){
    if(hide === true){
      sethide(false)
      inputRef.current.style.right= '0px';
      
    }else if(hide ===false){
      sethide(true);
      inputRef.current.style.right = '-200px'; 
    }
  }

    return(
      <nav className={`container ${sticky? `dark-nav`: null}`}>
        <img src={logo} alt='' className='logo' />
        <ul ref={inputRef}>
            <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to='program' smooth={true} offset={-270} duration={500}>Program</Link></li>
            <li><Link to='about' smooth={true} offset={-100} duration={500}>About</Link></li>
            <li><Link to='campus' smooth={true} offset={-250} duration={500}>Campus</Link></li>
            <li><Link to='testimonials' smooth={true} offset={-230} duration={500}>Testimonials</Link></li>
            <li><Link to='contact' smooth={true} offset={-250} duration={500}>Contact us</Link></li>
        </ul>
        <img src={menu} className='menu' onClick={()=>hideNav()}/>
      </nav>
    )
  }
  
  export default Navbar;