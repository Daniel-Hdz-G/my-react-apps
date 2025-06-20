import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";

{ /* Booking component renders a booking form with fields for name, email, date, time, guests, and occasion. */ }

const Booking = () => {

    { /* Booking.jsx - Component for the booking form of the Little Lemon restaurant website
    const  formData: Object containing form fields for name, email, date, time, guests, and occasion.
    const formError: String for displaying form validation errors.

    const handleChange: Function to update form data state on input change.
    const handleSubmit: Function to validate form data and navigate to booking confirmation page.
*/ }

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        date: "",
        time: "",
        guests: "",
        occasion: ""
    });

    const [formError, setFormError] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        {/* Validating that all fields are filled*/}
        for (const key in formData) {
            if (!formData[key]) {
                setFormError("Please fill in all fields.");
                return;
            }
        }
        setFormError("");
        {/* Redirecting to the booking confirmation page with form data */}
        navigate("/booking-confirmation", { state: formData });
    };

{ /* Helper variables for date input
    This sets the minimum date to today, ensuring users cannot select past dates.
*/ }

    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    const minDate = `${yyyy}-${mm}-${dd}`;

    return (
        <section className="flex flex-col items-center justify-center h-screen bg-llgreen p-8 text-black bg-[url('/src/assets/restaurant.jpg')] bg-no-repeat bg-cover bg-center bg-blend-overlay">
            <div className="bg-llorange-light p-8 rounded-lg shadow-lg max-w-lg w-full">
                <form onSubmit={handleSubmit} className="flex flex-col">
                    <label htmlFor="name" className="block font-bold mb-2">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full p-2 mb-4 rounded"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <label htmlFor="email" className="block font-bold mb-2">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full p-2 mb-4 rounded"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <label htmlFor="date" className="block font-bold mb-2">Date:</label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        className="w-full p-2 mb-4 rounded"
                        value={formData.date}
                        onChange={handleChange}
                        min={minDate}
                    />
                    <label htmlFor="time" className="block font-bold mb-2">Time:</label>
                    <input
                        type="time"
                        id="time"
                        name="time"
                        className="w-full p-2 mb-4 rounded"
                        value={formData.time}
                        onChange={handleChange}
                        min={'09:00'}
                        max={'22:00'}
                    />
                    <label htmlFor="guests" className="block font-bold mb-2">Number of Guests:</label>
                    <input
                        type="number"
                        id="guests"
                        name="guests"
                        className="w-full p-2 mb-4 rounded"
                        placeholder="Enter number of guests"
                        value={formData.guests}
                        onChange={handleChange}
                        min={1}
                        max={8}
                    />
                    <label htmlFor="occasion" className="block font-bold mb-2">Occasion:</label>
                    <select
                        id="occasion"
                        name="occasion"
                        className="w-full p-2 mb-4 rounded"
                        value={formData.occasion}
                        onChange={handleChange}
                    >
                        <option value="">Select an occasion</option>
                        <option value="Birthday">Birthday</option>
                        <option value="Anniversary">Anniversary</option>
                        <option value="Other">Other</option>
                    </select>
                    {formError && <p className="text-red-600 mb-2">{formError}</p>}
                    <button
                        type="submit"
                        className="bg-llyellow text-llgreen font-bold mt-4 py-2 px-4 rounded-full hover:bg-llgreen hover:text-white hover:cursor-pointer transition-colors duration-300"
                    >
                        Confirm Booking
                    </button>
                </form>
                <p className="mt-4 text-xs">
                    After confirming, you will be redirected to the booking confirmation page.
                </p>
                <Link to="/" className="flex items-center justify-center mt-4 font-semibold text-llgreen hover:text-llyellow">
                    <span className="mr-2">Go Back</span>
                    <IoMdArrowRoundBack />
                </Link>

            </div>
        </section>
    );
}

export default Booking;