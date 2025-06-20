import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";


const BookingConfirmation = ( ) => {

  { /* BookingConfirmation component renders a confirmation page after a successful booking.
      It displays the booking details such as name, email, date, time, number of guests
      and occasion, and provides a link to go back to the home page.

      The component uses the useLocation hook to access the state passed from the Booking component.
      The booking details are displayed in a list format, and the page has a background image
  */ }

  const location = useLocation();
  const { name, email, date, time, guests, occasion } = location.state || {};

  const bookingDetails = [
    { label: "Name", value: name },
    { label: "Email", value: email },
    { label: "Date", value: date },
    { label: "Time", value: time },
    { label: "Number of Guests", value: guests },
    { label: "Occasion", value: occasion },
  ];

  return (
    <section className="flex flex-col items-center justify-center h-screen bg-llgreen p-8 text-black bg-[url('src/assets/restaurant.jpg')] bg-no-repeat bg-cover bg-center bg-blend-overlay">
      <div className="bg-llorange-light p-8 rounded-lg shadow-lg max-w-lg w-full backdrop-blur-md">
        <h1 className="font-bold text-3xl text-center mb-4">Booking Confirmed! 🎉</h1>
        <p>Thank you for your booking {name}!</p>
        <p>We have received your booking details:</p>
        <ul className="p-5">
          {bookingDetails.map(({ label, value }) => (
            <li key={label}>
              <strong>{label}:</strong> {value}
            </li>
          ))}
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