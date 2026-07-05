import { motion } from 'framer-motion';
import { FiPlayCircle, FiChevronDown } from 'react-icons/fi';
import { heroStats } from '../../utils/content';
import './Hero.css';

function Hero() {
  return (
    <section id="home" className="hero-section">
      <video className="hero-video" autoPlay muted loop playsInline poster="/images/hero.svg">
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay" />
      <div className="container hero-content">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="eyebrow">Empowering young minds for the future</p>
          <h1>2CARVN ACADEMY</h1>
          <p className="hero-subheading">Think. Create. Communicate. Innovate. Lead.</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#admissions">Join Now</a>
            <a className="btn btn-secondary" href="#contact"><FiPlayCircle /> Contact Us</a>
          </div>
          <div className="hero-stats">
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      <div className="scroll-indicator">
        <span>Scroll</span>
        <FiChevronDown />
      </div>
    </section>
  );
}

export default Hero;
