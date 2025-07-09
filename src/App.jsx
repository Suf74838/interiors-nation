import Header from './components/Header';
import './App.css';
import img1 from './assets/gallery/1.jpg';
import img2 from './assets/gallery/2.jpg';
import img3 from './assets/gallery/3.jpg';
import img4 from './assets/gallery/4.jpg';
import img5 from './assets/gallery/5.jpg';
import img6 from './assets/gallery/6.jpg';
import img7 from './assets/gallery/7.jpg';
import logo from './assets/logo/inlogo.jpg'; // moved inside top imports

function App() {
  return (
    <>
      <Header />

      <div className="main">
        <section id="home" className="section hero">
          <h1>INTERIOR NATION</h1>
          <p>Your vision, our design.</p>
        </section>

        <section id="about" className="section">
          <h2>About Us</h2>
          <p>We specialize in modern, elegant, and functional interiors that reflect your style.</p>
        </section>

        <section id="services" className="section">
          <h2>Our Services</h2>
          <ul>
            <li>Interior Designing</li>
            <li>3D Visualization</li>
            <li>Space Planning</li>
            <li>Custom Furniture</li>
          </ul>
        </section>

        <section id="gallery" className="section gallery-section">
          <h2>Gallery</h2>
          <div className="gallery-grid">
            <img src={img1} alt="Design 1" />
            <img src={img2} alt="Design 2" />
            <img src={img3} alt="Design 3" />
            <img src={img4} alt="Design 4" />
            <img src={img5} alt="Design 5" />
            <img src={img6} alt="Design 6" />
            <img src={img7} alt="Design 7" />
          </div>
        </section>

        <section id="contact" className="section">
          <h2>Contact Us</h2>
          <p>📞 +91 96638 49250<br />📞 +966 56 384 4454</p>
        </section>
      </div>

      {/* ✅ Footer moved inside return and positioned correctly */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <img src={logo} alt="Logo" />
            <h3>INTERIOR NATION</h3>
          </div>
          <div className="footer-contact">
            <p>📞 +91 96638 49250</p>
            <p>📞 +966 56 384 4454</p>
          </div>
          <div className="footer-social">
            <a href="https://wa.me/919663849250" target="_blank" rel="noreferrer">WhatsApp</a> |
            <a href="mailto:interiornation@example.com"> Email</a> |
            <a href="https://instagram.com/interiornation" target="_blank" rel="noreferrer"> Instagram</a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
