import { useState, useRef, useEffect} from "react";

const About = () => {
    return (
        <section className="bg-white py-8">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-4">About Us</h2>
                <p className="text-gray-700 mb-4">
                    Welcome to our restaurant! We are dedicated to providing you with the best dining experience possible. Our team is passionate about food and service, and we strive to create a warm and inviting atmosphere for all our guests.
                </p>
                <p className="text-gray-700 mb-4">
                    Our menu features a variety of dishes made from the freshest ingredients, sourced locally whenever possible. Whether you're here for a casual meal or a special occasion, we have something for everyone.
                </p>
            </div>
        </section>
    );
}

export default About;
// This code defines a simple About component using React.