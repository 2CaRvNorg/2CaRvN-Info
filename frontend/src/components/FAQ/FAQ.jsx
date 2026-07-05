import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { faqs } from '../../utils/content';
import SectionHeader from '../SectionHeader/SectionHeader';
import './FAQ.css';

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="section faq-section">
      <div className="container faq-grid">
        <SectionHeader eyebrow="FAQ" title="Everything parents and students ask before joining." description="We keep it clear, transparent, and focused on student growth." />
        <div className="faq-list">
          {faqs.map((item, index) => {
            const isOpen = index === openIndex;
            return (
              <div key={item.question} className={`faq-item ${isOpen ? 'open' : ''}`}>
                <button type="button" onClick={() => setOpenIndex(isOpen ? -1 : index)}>
                  <span>{item.question}</span>
                  <FiChevronDown />
                </button>
                {isOpen ? <p>{item.answer}</p> : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
