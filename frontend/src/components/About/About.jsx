import { motion } from 'framer-motion';
import { aboutDetails } from '../../utils/content';
import SectionHeader from '../SectionHeader/SectionHeader';
import './About.css';

function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container about-grid">
        <motion.div className="about-media reveal" initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <img src={aboutDetails.image} alt="About 2Carvn Academy" />
        </motion.div>
        <div className="about-copy reveal">
          <SectionHeader eyebrow="About Us" title="At 2Carvn Academy, we believe education is more than textbooks and exams." description={aboutDetails.lead} />
          <div className="about-focus">
            <h3>We focus on</h3>
            <ul>
              {aboutDetails.focus.map((focus) => (
                <li key={focus}>{focus}</li>
              ))}
            </ul>
          </div>
          <div className="about-mission">
            <p>{aboutDetails.mission}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
