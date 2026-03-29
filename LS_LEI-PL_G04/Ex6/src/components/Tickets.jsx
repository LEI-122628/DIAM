import { useState } from "react";

const ticketTypes = [
  { id: "day", label: "One day ticket", price: 40 },
  { id: "event", label: "Event Pass", price: 80 },
  { id: "premium", label: "Premium Pass", price: 100 },
];

function Tickets() {
  const [quantities, setQuantities] = useState({ day: 0, event: 0, premium: 0 });
  const [message, setMessage] = useState("");

  const changeQty = (type, delta) => {
    setQuantities((prev) => ({
      ...prev,
      [type]: Math.max(0, prev[type] + delta),
    }));
  };

  const total = ticketTypes.reduce(
    (sum, t) => sum + t.price * quantities[t.id],
    0
  );

  const finishPurchase = () => {
    if (total === 0) return;
    setMessage("Purchase successful! Thank you.");
  };

  return (
    <div className="content-wrapper">
      <div className="tickets-container">
        {ticketTypes.map((ticket) => (
          <div className="ticket-card" key={ticket.id}>
            <span>{ticket.label} - {ticket.price}€</span>
            <div className="controls">
              <button className="btn-qty" onClick={() => changeQty(ticket.id, -1)}>-</button>
              <span>{quantities[ticket.id]}</span>
              <button className="btn-qty" onClick={() => changeQty(ticket.id, 1)}>+</button>
            </div>
          </div>
        ))}

        <hr />
        <h3>Total: {total}€</h3>
        <button className="btn" onClick={finishPurchase}>Buy Now</button>

        {message && <p>{message}</p>}
      </div>
    </div>
  );
}

export default Tickets;
