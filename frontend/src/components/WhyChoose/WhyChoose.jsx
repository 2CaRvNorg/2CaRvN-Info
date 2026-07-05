import { whyChooseReasons } from '../../utils/content';
import SectionHeader from '../SectionHeader/SectionHeader';
import './WhyChoose.css';

function WhyChoose() {
  return (
    <section id="why-choose" className="section">
      <div className="container">
        <SectionHeader eyebrow="Our Unique Approach" title="Learning beyond electronics" description="Independent thinking, problem solving, communication skills, leadership building, practical & future-ready learning." />
        <div className="reason-grid">
          {whyChooseReasons.map((reason) => (
            <article key={reason.title} className="reason-card reveal">
              <h3>{reason.title}</h3>
              <p>{reason.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;
