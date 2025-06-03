import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";


const BookingConfirmation = ( ) => {
  const location = useLocation();
  const { name, email, date, time, guests, occasion } = location.state || {};

  return (
    <section className="flex flex-col items-center justify-center h-screen bg-llgreen p-8 text-black bg-[url('/assets/restaurant.jpg')] bg-no-repeat bg-cover bg-center bg-blend-overlay">
    <div className="bg-llorange-light p-8 rounded-lg shadow-lg max-w-lg w-full backdrop-blur-md">
      <h1 className="font-bold text-3xl text-center mb-4">Booking Confirmed! 🎉</h1>
      <p>Thank you for your booking {name}!</p>
      <p>We have received your booking details:</p>
      <ul className="p-5">
        <li><strong>Name:</strong> {name}</li>
        <li><strong>Email:</strong> {email}</li>
        <li><strong>Date:</strong> {date}</li>
        <li><strong>Time:</strong> {time}</li>
        <li><strong>Number of Guests:</strong> {guests}</li>
        <li><strong>Occasion:</strong> {occasion}</li>
      </ul>
      <p className="mb-10">We look forward to welcoming you!</p>

    <Link to="/" className="flex items-center justify-center mt-4 font-semibold text-llgreen hover:text-llyellow">
      <span className="mr-2">Go Back</span>
      <IoMdArrowRoundBack />
    </Link>
    </div>
  </section>

  );
}

export default BookingConfirmation;