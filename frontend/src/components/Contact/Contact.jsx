import { FiMapPin, FiPhone, FiMail, FiInstagram, FiMessageCircle } from 'react-icons/fi';
import { contactDetails, founders, whoCanJoin, admissionCopy } from '../../utils/content';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-grid">
        <div className="contact-card reveal">
          <p className="eyebrow">Stay Connected With Us</p>
          <h2>2Carvn Academy</h2>
          <p>{contactDetails.website}</p>
          <ul className="contact-list">
            <li><FiMapPin /> {contactDetails.address}</li>
            <li><FiPhone /> {contactDetails.phone}</li>
            <li><FiMail /> {contactDetails.email}</li>
            <li><FiInstagram /> {contactDetails.instagram}</li>
            <li><FiMessageCircle /> WhatsApp: {contactDetails.phone}</li>
          </ul>
          <div className="contact-section-copy">
            <h3>Why Parents Trust Us</h3>
            <ul>
              <li>Hybrid Learning Model</li>
              <li>Small Batch Mentorship</li>
              <li>Future-Ready Skills</li>
              <li>Confidence Building</li>
              <li>Safe & Supportive Environment</li>
            </ul>
          </div>
        </div>
        <div className="map-card reveal">
          <iframe title="Academy location" src="https://www.google.com/maps?q=Bangalore&output=embed" loading="lazy" />
        </div>
      </div>
      <div className="container contact-founders">
        <p className="eyebrow">Contact Us</p>
        <div className="founder-list">
          {founders.map((founder) => (
            <div key={founder.name} className="founder-card">
              <strong>{founder.name}</strong>
              <span>{founder.role}</span>
              <p>{founder.phone}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
