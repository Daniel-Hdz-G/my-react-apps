import { useState, useRef, useEffect} from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const Testimonials = () => {
    return (
        <section className="bg-llorange-light py-20 min-h-[50vh]">
            <div className="container mx-auto text-black">
                <h2 className="text-3xl font-bold text-center mb-4">What Our Customers Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded shadow">
                        <span className="flex flex-row items-center">
                        <img src="/assets/testimonial-1.jpg" alt="Customer 1" className="w-16 h-16 rounded-full mb-4"/>
                        {[...Array(5)].map((_, i) => (
                            <FaStar key={i} className="text-yellow-500" />
                        ))}
                        </span>
                        <p className="mt-2">"The food was amazing! I will definitely be coming back."</p>
                        <p className="mt-2 font-semibold">- Alex Smith</p>
                    </div>
                    <div className="bg-white p-4 rounded shadow">
                        <span className="flex flex-row items-center">
                        <img src="/assets/testimonial-2.jpg" alt="Customer 2" className="w-16 h-16 rounded-full mb-4"/>
                        {[...Array(4)].map((_, i) => (
                            <FaStar key={i} className="text-yellow-500" />
                        ))}
                        <FaStarHalfAlt className="text-yellow-500" />
                        </span>
                        <p>"Great atmosphere and even better service!"</p>
                        <p className="mt-2 font-semibold">- Jennifer Bird</p>
                    </div>
                    <div className="bg-white p-4 rounded shadow">
                        <span className="flex flex-row items-center">
                        <img src="/assets/testimonial-3.jpg" alt="Customer 3" className="w-16 h-16 rounded-full mb-4"/>
                        {[...Array(5)].map((_, i) => (
                            <FaStar key={i} className="text-yellow-500" />
                        ))}
                        </span>
                        <p>"A hidden gem! Highly recommend the chef's special."</p>
                        <p className="mt-2 font-semibold">- Sam Wilson</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Testimonials;
// // This code defines a simple Testimonials component using React.