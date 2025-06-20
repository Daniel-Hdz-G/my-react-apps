import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import Testimonial1 from "../assets/testimonial-1.jpg";
import Testimonial2 from "../assets/testimonial-2.jpg";
import Testimonial3 from "../assets/testimonial-3.jpg";

{ /* Testimonials.jsx - Component for the Testimonials section of the Little Lemon restaurant website
    const testimonials: Array of testimonial objects with img, alt, name, text, and rating.
*/ }

const testimonials = [
	{
		img: Testimonial1,
		alt: "Customer 1",
		name: "Alex Smith",
		text: "The food was amazing! I will definitely be coming back.",
		rating: 5,
	},
	{
		img: Testimonial2,
		alt: "Customer 2",
		name: "Jennifer Bird",
		text: "Great atmosphere and even better service!",
		rating: 4.5,
	},
	{
		img: Testimonial3,
		alt: "Customer 3",
		name: "Sam Wilson",
		text: "A hidden gem! Highly recommend the chef's special.",
		rating: 5,
	},
];

{ /* Testimonials component renders a section with customer testimonials, including their images, names, text, and ratings. */ }

const Testimonials = () => {
	return (
		<section className="bg-llorange-light py-20 min-h-[50vh]">
			<div className="container mx-auto text-black">
				<h2 className="text-3xl font-bold text-center mb-4">
					What Our Customers Say
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
					{testimonials.map((testimonials, idx) => (
						<div key={idx} className="bg-white p-4 rounded shadow">
							<span className="flex flex-row items-center">
								<img
									src={testimonials.img}
									alt={testimonials.alt}
									className="w-16 h-16 rounded-full mb-4"
								/>
								{[...Array(Math.floor(testimonials.rating))].map((_, i) => (
									<FaStar key={i} className="text-yellow-500" />
								))}
								{testimonials.rating % 1 !== 0 && (
									<FaStarHalfAlt className="text-yellow-500" />
								)}
							</span>
							<p className="mt-2">"{testimonials.text}"</p>
							<p className="mt-2 font-semibold">- {testimonials.name}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Testimonials;