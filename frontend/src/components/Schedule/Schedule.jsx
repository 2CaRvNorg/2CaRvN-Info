import { programHighlights, weekendSchedule } from '../../utils/content';
import SectionHeader from '../SectionHeader/SectionHeader';
import './Schedule.css';

function Schedule() {
  return (
    <section id="schedule" className="section schedule-section">
      <div className="container">
        <SectionHeader eyebrow="Program Schedule" title="Our 6-month foundation program for 7th, 8th & 9th students." description="6 offline classes per month at our center and 4 live interactive online classes per month." />
        <div className="schedule-highlights">
          {programHighlights.map((item) => (
            <div key={item.title} className="schedule-highlight reveal">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
        <div className="schedule-footer reveal">
          {weekendSchedule.map((item) => (
            <div key={item.day}>
              <h3>{item.day}</h3>
              <p>{item.time}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Schedule;
