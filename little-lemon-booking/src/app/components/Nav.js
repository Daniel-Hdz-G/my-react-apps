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
        <nav ref={navRef} className="relative">
        <button onClick={handleClick} className="p-2 bg-blue-500 text-white rounded">
            Toggle Menu
        </button>
        {isOpen && (
            <ul className="absolute bg-white shadow-lg rounded mt-2">
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