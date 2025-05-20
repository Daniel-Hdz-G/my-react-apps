import { useState, useRef, useEffect} from "react";

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef(null);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
        if (navRef.current && !navRef.current.contains(event.target)) {
            setIsOpen(false);
        }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <nav
            ref={navRef}
            className="flex flex-row items-center justify-center w-full bg-white min-h-[75]"

        >
            <a href="/" className="text-2xl font-bold px-5">
                <img src="/assets/Logo.svg" alt="Little Lemmon Logo"/>
            </a>
            <a href="/" className="ml-4 p-2 text-llgreen font-[550] hover:bg-llyellow hover:rounded-full px-5">
                Home
            </a>
            <a href="/about" className="ml-4 p-2 text-llgreen font-[550] hover:bg-llyellow hover:rounded-full px-5">
                About
            </a>
            <a href="/menu" className="ml-4 p-2 text-llgreen font-[550] hover:bg-llyellow hover:rounded-full px-5">
                Menu
            </a>
            <a href="/reservations" className="ml-4 p-2 text-llgreen font-[550] hover:bg-llyellow hover:rounded-full px-5">
                Reservations
            </a>
            <a href="/order-online" className="ml-4 p-2 text-llgreen font-[550] hover:bg-llyellow hover:rounded-full px-5">
                Order Online
            </a>
            <a href="/login" className="ml-4 p-2 text-llgreen font-[550] hover:bg-llyellow hover:rounded-full px-5">
                Login
            </a>
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
// This code defines a simple navigation component using React hooks.