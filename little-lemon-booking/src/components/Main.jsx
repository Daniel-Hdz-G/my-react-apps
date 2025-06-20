import Hero from './Hero.jsx';
import Specials from './Specials.jsx';
import Testimonials from './Testimonials.jsx';
import About from './About.jsx';
import '../index.css';

export default function Main() {

  { /* Main component renders the main content of the page, including the Hero, Specials, Testimonials, and About sections. */ }

  return (
      <main>
        <Hero />
        <Specials />
        <Testimonials />
        <About />
      </main>
  );
}
