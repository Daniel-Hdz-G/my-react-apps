import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.svg";

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef(null);

    const linksNav = [
        { name: "Home", link: "/" },
        { name: "About", link: "/about" },
        { name: "Menu", link: "/menu" },
        { name: "Reservations", link: "/reservations" },
        { name: "Order Online", link: "/order-online" },
        { name: "Login", link: "/login" }
    ];

    return (
        <nav
            ref={navRef}
            className="flex flex-row items-center justify-center w-full bg-white min-h-[10vh] relative"
        >
            <Link href="/" className="text-2xl font-bold px-5">
                <img src={Logo} alt="Little Lemmon Logo"/>
            </Link>
            {/* Main Menu */}
            <div className="hidden md:flex">
                {linksNav.map((item) => (
                    <a
                        href={item.link}
                        key={item.name}
                        className="ml-4 p-2 text-llgreen font-[550] hover:bg-llyellow hover:rounded-full px-5"
                    >
                        {item.name}
                    </a>
                ))}
            </div>
            {/* Hamburguer Button Menu */}
            <button
                className="md:hidden ml-auto mr-4 p-2"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Abrir menú"
            >
                <span className="block w-6 h-0.5 bg-llgreen mb-1"></span>
                <span className="block w-6 h-0.5 bg-llgreen mb-1"></span>
                <span className="block w-6 h-0.5 bg-llgreen"></span>
            </button>
            {/* Mobile Menu */}
            {isOpen && (
                <ul className="fixed top-0 right-0 w-2/3 max-w-xs h-full bg-white shadow-lg z-50 flex flex-col pt-20 px-6 animate-slide-in">
                    <button
                        className="absolute top-4 right-4 text-4xl text-llgreen"
                        onClick={() => setIsOpen(false)}
                        aria-label="Cerrar menú"
                    >
                        ×
                    </button>
                    {linksNav.map((item) => (
                        <li key={item.name} className="mb-6">
                            <a
                                href={item.link}
                                className="block text-llgreen font-bold text-lg hover:bg-llyellow rounded-full px-4 py-2"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
};

export default Nav;