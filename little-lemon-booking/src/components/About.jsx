import RestaurantChef from '../assets/restaurant-chef-b.jpg';
import MarioAndAdrian from '../assets/mario-adrian-a.jpg';

{ /* About.jsx - Component for the About section of the Little Lemon restaurant website

    const images: Array of image objects with src, alt, and className properties.
    const paragraphs: Array of strings containing the text for the About section.

*/ }

const images = [
    {
        src: RestaurantChef,
        alt: "Chef at Little Lemon Restaurant",
        className: "w-auto rounded-lg relative max-w-1/2 ml-[5%] top-[3vh] hover:z-2"
    },
    {
        src: MarioAndAdrian,
        alt: "Owners Mario and Adrian at Little Lemon",
        className: "w-auto rounded-lg relative max-w-1/2 ml-[45%] bottom-[3vh]"
    }
];

const paragraphs = [
    "Welcome to our restaurant! We are dedicated to providing you with the best dining experience possible. Our team is passionate about food and service, and we strive to create a warm and inviting atmosphere for all our guests.",
    "Our menu features a variety of dishes made from the freshest ingredients, sourced locally whenever possible. Whether you're here for a casual meal or a special occasion, we have something for everyone."
];

{/* The About component renders a section with a title, subtitle, paragraphs, and images.*/}

const About = () => (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 bg-white py-8 text-black items-center justify-center min-h-[40vh]">
        <div className="px-[5%] text-justify">
            <h2 className="text-4xl font-bold text-llgreen">Little Lemon</h2>
            <h3 className="text-2xl font-semibold mb-4 text-llorange-strong">Chicago</h3>
            {paragraphs.map((text, idx) => (
                <p key={idx} className="text-gray-700 mb-4">
                {text}
                </p>
            ))}
        </div>
        <div className="flex flex-col gap-4 relative">
            {images.map(({ src, alt, className }, idx) => (
                <img
                    key={alt}
                    src={src}
                    alt={alt}
                    className={className}
                    loading="lazy"
                    decoding="async"
                />
            ))}
        </div>
    </section>
);

export default About;