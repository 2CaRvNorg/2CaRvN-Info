import { motion } from 'framer-motion';
import { courseCategories } from '../../utils/content';
import SectionHeader from '../SectionHeader/SectionHeader';
import './Courses.css';

function Courses() {
  return (
    <section id="courses" className="section">
      <div className="container">
        <SectionHeader eyebrow="Courses Offered" title="Design + Verbal Communication and Technical + Verbal Communication" description="During the first 6 months, students can choose one of the following courses." />
        <div className="course-grid">
          {courseCategories.map((course, index) => (
            <motion.article className="course-card reveal" key={course.title} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.08 }}>
              <img src={course.image} alt={course.title} />
              <div className="course-content">
                <h3>{course.title}</h3>
                <ul>
                  {course.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Courses;
