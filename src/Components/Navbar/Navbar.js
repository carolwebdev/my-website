
import { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../logo.svg';
import "../../Styles/main.css";

function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };

    return (
        <header>
            <img src={logo} className="App-logo" alt="logo" />
            <nav ref={navRef}>
                <a href="/#">Home</a>
                <a href="/#">My timeline</a>
                <a href="/#">My portfolio</a>
                <a href="/#">About me</a>
                <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className='nav-btn' onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
    )
}

export default Navbar;