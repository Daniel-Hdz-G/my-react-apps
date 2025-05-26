import { useState, useRef, useEffect} from "react";

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
            className="flex flex-row items-center justify-center w-full bg-white min-h-[75]"
        >
            <a href="/" className="text-2xl font-bold px-5">
                <img src="/assets/Logo.svg" alt="Little Lemmon Logo"/>
            </a>
            {
            linksNav.map((item) => (
                <a href={item.link} key={item.name} className="ml-4 p-2 text-llgreen font-[550] hover:bg-llyellow hover:rounded-full px-5">{item.name}</a>
            ))
            }
            {isOpen && (
                <ul className="absolute bg-white shadow-lg rounded mt-2 left-1/2 transform -translate-x-1/2">
                    <li className="p-2 hover:bg-gray-200">Item 1</li>
                    <li className="p-2 hover:bg-gray-200">Item 2</li>
                    <li className="p-2 hover:bg-gray-200">Item 3</li>
                </ul>
            )}
        </nav>
    );
    }

export default Nav;