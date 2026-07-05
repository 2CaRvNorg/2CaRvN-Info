import { useMemo, useState } from 'react';
import { galleryItems } from '../../utils/content';
import SectionHeader from '../SectionHeader/SectionHeader';
import './Gallery.css';

const categories = ['All', 'Coding', 'Design', 'Workshop', 'Presentation', 'Certificates', 'Events'];

function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');

  const items = useMemo(() => {
    if (activeCategory === 'All') return galleryItems;
    return galleryItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="gallery" className="section gallery-section">
      <div className="container">
        <SectionHeader eyebrow="Gallery" title="Moments of growth, craft, and celebration." description="A curated look at the energy, creativity, and community that shape our programs." />
        <div className="gallery-filters reveal">
          {categories.map((category) => (
            <button key={category} type="button" className={activeCategory === category ? 'active' : ''} onClick={() => setActiveCategory(category)}>
              {category}
            </button>
          ))}
        </div>
        <div className="gallery-grid">
          {items.map((item) => (
            <figure key={item.title} className="gallery-card reveal">
              <img src={item.image} alt={item.title} />
              <figcaption>
                <span>{item.category}</span>
                <strong>{item.title}</strong>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
