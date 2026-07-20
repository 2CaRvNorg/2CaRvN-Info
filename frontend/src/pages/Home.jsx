import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLenis } from '../hooks/useLenis';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Courses from '../components/Courses/Courses';
import Gallery from '../components/Gallery/Gallery';
import Schedule from '../components/Schedule/Schedule';
import WhyChoose from '../components/WhyChoose/WhyChoose';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';

function Home() {
  useLenis();

  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: 'ease-out-cubic' });
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray('.reveal').forEach((element) => {
      gsap.fromTo(
        element,
        { opacity: 0, y: 36 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: { trigger: element, start: 'top 85%' },
        },
      );
    });

    const cursor = document.getElementById('cursor-glow');
    const handleMove = (event) => {
      if (!cursor) return;
      cursor.style.transform = `translate(${event.clientX - 120}px, ${event.clientY - 120}px)`;
    };

    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <div className="page-shell">
      <div id="cursor-glow" className="cursor-glow" />
      <main>
        <Hero />
        <About />
        <Courses />
        <Gallery />
        <Schedule />
        <WhyChoose />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
