import { useLocation } from "react-router-dom";

const BookingConfirmation = ( ) => {
  const location = useLocation();
  const { name, email, date, time, guests, occasion } = location.state || {};

  return (
    <div className="booking-confirmation">
      <h1>Booking Confirmation</h1>
      <p>Thank you for your booking {name} !</p>
      <p>We have received your booking details:</p>
      <ul>
        <li><strong>Name:</strong> {name}</li>
        <li><strong>Email:</strong> {email}</li>
        <li><strong>Date:</strong> {date}</li>
        <li><strong>Time:</strong> {time}</li>
        <li><strong>Number of Guests:</strong> {guests}</li>
        <li><strong>Occasion:</strong> {occasion}</li>
      </ul>
      <p>We look forward to welcoming you!</p>
    </div>
  );
}

export default BookingConfirmation;