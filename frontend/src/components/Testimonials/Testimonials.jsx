import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { testimonials } from '../../utils/content';
import 'swiper/css';
import 'swiper/css/pagination';
import SectionHeader from '../SectionHeader/SectionHeader';
import './Testimonials.css';

function Testimonials() {
  return (
    <section id="testimonials" className="section testimonials-section">
      <div className="container">
        <SectionHeader eyebrow="Testimonials" title="Students and parents trust the experience." description="The feedback reflects the confidence, care, and visible progress that define every batch." />
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{ 768: { slidesPerView: 2 } }}
          className="testimonial-slider"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.name}>
              <article className="testimonial-card reveal">
                <div className="stars">★★★★★</div>
                <p>“{item.quote}”</p>
                <div className="testimonial-author">
                  <strong>{item.name}</strong>
                  <span>{item.role}</span>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonials;
