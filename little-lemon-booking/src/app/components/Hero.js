import { useState, useRef, useEffect} from "react";

const Hero = () => {
    return (
        <section className="flex flex-row bg-cover bg-center min-h-[40vh] max-h-[40vh] bg-llgreen items-center justify-center w-full">
            <div id="reserve-a-table-hero" className="max-w-[30%] p-8">
                <h1 className="text-4xl font-bold text-llyellow">
                    Little Lemon
                </h1>
                <h2 className="text-2xl font-semibold text-white mb-4">
                    Chicago
                </h2>
                <p className="text-lg text-white ">
                    We are a family owned
                    Mediterranean restaurant,
                    focused on traditional
                    recipes served with a modern
                    twist.
                </p>
                <button className="bg-llyellow text-llgreen font-bold py-2 px-4 rounded-full hover:bg-llgreen hover:text-white">
                    Reserve a Table
                </button>
            </div>
            <img src="/assets/restauranfood.jpg" alt="Restaurant Food" className="size-90 object-cover object-center rounded-4xl mt-50"/>
        </section>
    );
}

export default Hero;
// // This code defines a simple Hero component using React.