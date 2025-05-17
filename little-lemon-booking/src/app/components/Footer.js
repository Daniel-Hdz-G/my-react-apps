import { useState, useRef, useEffect} from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <p>&copy; 2023 Your Restaurant Name. All rights reserved.</p>
            <p>1234 Food St, Flavor Town, USA</p>
            <p>Phone: (123) 456-7890</p>
        </footer>
    );
}

export default Footer;
// This code defines a simple footer component using React.