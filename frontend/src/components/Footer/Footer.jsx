import { FiArrowRight } from 'react-icons/fi';
import { footerTagline } from '../../utils/content';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <p className="eyebrow">2CARVN Academy</p>
          <h3>Empowering young minds. Shaping futures.</h3>
          <p>{footerTagline}</p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <a href="#about">About</a>
          <a href="#courses">Courses</a>
          <a href="#admissions">Admissions</a>
        </div>
        <div>
          <h4>Contact</h4>
          <a href="#contact">Contact</a>
          <a href="#contact">WhatsApp</a>
          <a href="#contact">Email</a>
        </div>
        <div>
          <h4>Get in touch</h4>
          <div className="newsletter">
            <input placeholder="Email address" />
            <button type="button"><FiArrowRight /></button>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 2CARVN Academy. All rights reserved.</span>
        <span>Built for learners who want confidence, creativity, and future-ready skills.</span>
      </div>
    </footer>
  );
}

export default Footer;
