import { useState, useRef, useEffect} from "react";

const Hero = () => {
    return (
        <section className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('/images/hero.jpg')" }}>
            <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
                <h1 className="text-white text-5xl font-bold">Welcome to Our Restaurant</h1>
            </div>
        </section>
    );
}

export default Hero;
// // This code defines a simple Hero component using React.