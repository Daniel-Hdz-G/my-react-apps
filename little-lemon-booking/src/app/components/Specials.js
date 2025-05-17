import { useState, useRef, useEffect} from "react";

const Specials = () => {
    return (
        <section className="bg-white py-8">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-4">Today's Specials</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-gray-100 p-4 rounded shadow">
                        <h3 className="text-xl font-semibold">Special Dish 1</h3>
                        <p className="mt-2">Description of the special dish.</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded shadow">
                        <h3 className="text-xl font-semibold">Special Dish 2</h3>
                        <p className="mt-2">Description of the special dish.</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded shadow">
                        <h3 className="text-xl font-semibold">Special Dish 3</h3>
                        <p className="mt-2">Description of the special dish.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Specials;
// This code defines a simple Specials component using React.