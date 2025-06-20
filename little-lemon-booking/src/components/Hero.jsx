import { Link } from 'react-router-dom';
import RestaurantFood from '../assets/restauranfood.jpg';

const Hero = () => {

    { /* Hero component renders a hero section with a title, subtitle, description, and a button to reserve a table.
        It includes a background image and a restaurant food image on the right side.
    */ }

    return (
        <section className="flex flex-row bg-cover bg-center min-h-[40vh] max-h-[40vh] bg-llgreen items-center justify-center w-full">
            <div id="reserve-a-table-hero" className="max-w-[30%] p-8">
                <h1 className="text-3xl lg:text-4xl font-bold text-llyellow">
                    Little Lemon
                </h1>
                <h2 className="text-xl lg:text-2xl font-semibold text-white mb-4">
                    Chicago
                </h2>
                <p className="text-xs md:text-sm lg:text-lg text-white ">
                    We are a family owned
                    Mediterranean restaurant,
                    focused on traditional
                    recipes served with a modern
                    twist.
                </p>
                <Link to="/booking">
                    <button className="bg-llyellow text-llgreen font-bold mt-4 py-2 px-4 rounded-full hover:bg-llgreen hover:text-white hover:cursor-pointer transition-colors duration-300">
                        Reserve a Table
                    </button>
                </Link>
            </div>
            <img src={RestaurantFood} alt="Restaurant Food" className="size-[30vh] object-cover object-center rounded-4xl mt-50"/>
        </section>
    );
}

export default Hero;