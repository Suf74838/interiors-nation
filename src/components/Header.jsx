import './Header.css';
import logo from '../assets/logo.jpg'; // ✅ logo path

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Interior Nation Logo" />
      </div>
      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#gallery">Gallery</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
