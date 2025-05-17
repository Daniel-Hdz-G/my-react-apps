import { useState, useRef, useEffect} from "react";

const Testimonials = () => {
    return (
        <section className="bg-gray-100 py-8">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-4">What Our Customers Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded shadow">
                        <p>"The food was amazing! I will definitely be coming back."</p>
                        <p className="mt-2 font-semibold">- Customer 1</p>
                    </div>
                    <div className="bg-white p-4 rounded shadow">
                        <p>"Great atmosphere and even better service!"</p>
                        <p className="mt-2 font-semibold">- Customer 2</p>
                    </div>
                    <div className="bg-white p-4 rounded shadow">
                        <p>"A hidden gem! Highly recommend the chef's special."</p>
                        <p className="mt-2 font-semibold">- Customer 3</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Testimonials;
// // This code defines a simple Testimonials component using React.