import { useState, useRef, useEffect} from "react";
import { FaFacebookF, FaSquareTwitter, FaSquareInstagram  } from "react-icons/fa6";


const doormatNavigation = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Menu", link: "/menu" },
    { name: "Reservations", link: "/reservations" },
    { name: "Order Online", link: "/order-online" },
    { name: "Login", link: "/login" }
];

const socialMediaLinks = [
    { name: "Facebook", link: "https://www.facebook.com/LittleLemonRestaurant", icon: <FaFacebookF className="text-white m-1 "/> },
    { name: "Instagram", link: "https://www.instagram.com/LittleLemonRestaurant", icon: <FaSquareInstagram className="text-white m-1" /> },
    { name: "Twitter", link: "https://www.twitter.com/LittleLemonRestaurant", icon: <FaSquareTwitter className="text-white m-1" /> },
];

const Footer = () => {
    return (
        <footer className="justify-center flex flex-row bg-llgreen text-white py-4">
            <div className="flex mx-20 items-center">
                <img src="/assets/Logo.svg" className="bg-white/75 rounded-4xl p-2 hover:bg-white hover:cursor-pointer"/>
            </div>
            <div className="mx-20">
                <span className="font-extrabold">Doormat Navigation</span>
                <ul className="mt-5">
                    {doormatNavigation.map((item) => (
                        <li key={item.name}>
                        <a href={item.link} className="text-white hover:text-llyellow">
                            {item.name}
                        </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="mx-20">
                <span className="font-extrabold">Contact</span>
                <ul className="mt-5">
                    <li>Chicago, IIllinois, USA</li>
                    <li>
                        <a href="tel:+1-312-509-6995" className="text-white hover:text-llyellow">+1-312-509-6995</a>
                    </li>
                    <li>
                        <a href="mailto:contact@littlelemon.com" className="text-white hover:text-llyellow">contact@littlelemon.com</a>
                    </li>
                </ul>
            </div>
            <div className="mx-20">
                <span className="font-extrabold">Social Media Links</span>
                <ul className="mt-5">
                    {socialMediaLinks.map((item) => (
                        <li key={item.name}>
                        <a href={item.link} className="flex flex-row items-center text-white hover:text-llyellow" target="_blank" rel="noopener noreferrer">
                            {item.icon}{item.name}
                        </a>
                        </li>
                    ))}
                </ul>
            </div>

        </footer>
    );
}

export default Footer;
// This code defines a simple footer component using React.