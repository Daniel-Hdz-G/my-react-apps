import Hero from './Hero.jsx';
import Specials from './Specials.jsx';
import Testimonials from './Testimonials.jsx';
import About from './About.jsx';
import '../index.css';

export default function Main() {
  return (
      <main>
        <Hero />
        <Specials />
        <Testimonials />
        <About />
      </main>
  );
}
