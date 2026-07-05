import { faculty } from '../../utils/content';
import SectionHeader from '../SectionHeader/SectionHeader';
import './Faculty.css';

function Faculty() {
  return (
    <section id="faculty" className="section faculty-section">
      <div className="container">
        <SectionHeader eyebrow="Faculty" title="Mentors who blend expertise with care." description="Our educators bring strategy, creativity, and real-world perspective to every session." />
        <div className="faculty-grid">
          {faculty.map((person) => (
            <article key={person.name} className="faculty-card reveal">
              <div className="faculty-image-wrap">
                <img src={person.image} alt={person.name} />
              </div>
              <div className="faculty-info">
                <p className="faculty-accent">{person.accent}</p>
                <h3>{person.name}</h3>
                <p>{person.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faculty;
