import { useState, useRef, useEffect} from "react";

const dishes = [
    {
        name: "Greek Salad",
        description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
        price: "$12.99",
        image: "/assets/greek-salad.jpg"
    },
    {
        name: "Bruchetta",
        description: "Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive.",
        price: "$5.99",
        image: "/assets/bruchetta.svg"
    },
    {
        name: "Lemon Dessert",
        description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
        price: "$5.00",
        image: "/assets/lemon-dessert.jpg"
    }
];

const Specials = () => {
    return (
        <section className="bg-white py-30 min-h-[50vh] ">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-4 text-black">This Weeks Specials</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-black">
                    {dishes.map((dish, index) => (
                    <div key={index} className="bg-gray-100 p-4 rounded shadow">
                        <img src={dish.image} alt={dish.name} className="w-full h-48 object-cover rounded mb-4"/>
                        <h3 className="text-xl font-semibold">
                            {dish.name}
                        </h3>
                        <p className="mt-2">
                            {dish.description}
                        </p>
                        <p className="mt-2 font-bold text-lg">
                            {dish.price}
                        </p>
                        <span className="flex flex-row items-center mt-5 justify-between">
                            Place a Order
                            <img src="/assets/Basket.svg" alt="Arrow Right" className="size-7"/>
                        </span>
                    </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Specials;