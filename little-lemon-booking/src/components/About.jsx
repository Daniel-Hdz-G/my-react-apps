import RestaurantChef from '../assets/restaurant-chef-b.jpg';
import MarioAndAdrian from '../assets/mario-adrian-a.jpg';

const About = () => {
    return (
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 bg-white py-8 text-black items-center justify-center min-h-[40vh]">
            <div className="container px-[5%] px-4 text-justify">
                <h2 className="text-4xl font-bold text-llgreen ">Little Lemon</h2>
                <h3 className="text-2xl font-semibold mb-4 text-llorange-strong">Chicago</h3>
                <p className="text-gray-700 mb-4">
                    Welcome to our restaurant! We are dedicated to providing you with the best dining experience possible. Our team is passionate about food and service, and we strive to create a warm and inviting atmosphere for all our guests.
                </p>
                <p className="text-gray-700 mb-4">
                    Our menu features a variety of dishes made from the freshest ingredients, sourced locally whenever possible. Whether you&#39re here for a casual meal or a special occasion, we have something for everyone.
                </p>
            </div>
            <div className="container mx-auto px-4 relative">
                <img src={RestaurantChef} alt="Chef at Little Lemon Restaurant" className="w-auto rounded-lg relative max-w-1/2 ml-[5%] top-[3vh] hover:z-2"/>
                <img src={MarioAndAdrian} alt="Owners Mario and Adrian at Little Lemon" className="w-auto rounded-lg relative max-w-1/2 ml-[45%] bottom-[3vh] "/>
            </div>

        </section>
    );
}

export default About;