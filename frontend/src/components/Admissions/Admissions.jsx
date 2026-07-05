import { motion } from 'framer-motion';
import './Admissions.css';

function Admissions() {
  return (
    <section id="admissions" className="section admissions-section">
      <div className="container admissions-card reveal">
        <div>
          <p className="eyebrow">Admissions</p>
          <h2>Reserve your child’s place in a future-focused program.</h2>
          <p>Share a few details and our team will reach out with the next steps, available batches, and fee guidance.</p>
        </div>
        <form className="admissions-form">
          <input placeholder="Student Name" />
          <input placeholder="Parent Name" />
          <input placeholder="Phone" />
          <input placeholder="Email" />
          <input placeholder="School" />
          <input placeholder="Class" />
          <input placeholder="Course" />
          <textarea rows="4" placeholder="Tell us a little about your goals" />
          <motion.button type="button" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            Submit Application
          </motion.button>
        </form>
      </div>
    </section>
  );
}

export default Admissions;
