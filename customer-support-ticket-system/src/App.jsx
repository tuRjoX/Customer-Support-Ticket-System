import "./App.css";
import CustomerTicket from "./Components/CustomerTicket/CustomerTicket";
import NavBar from "./Components/NavBar/NavBar";
import TwoCard from "./Components/TwoCard/TwoCard";
import { useState, useEffect } from "react";

function App() {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTickets = async () => {
    try {
      const res = await fetch("/ticket.json");
      const data = await res.json();
      setTickets(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching tickets:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTickets();
  }, []);

  return (
    <>
      <NavBar></NavBar>
      <TwoCard></TwoCard>
      {loading ? (
        <div className="text-center mt-20">Loading tickets...</div>
      ) : (
        <div className="grid grid-cols-2 gap-6 justify-items-center mt-20 max-w-6xl mx-auto px-4">
          {tickets.map((ticket) => (
            <CustomerTicket key={ticket.id} ticket={ticket} />
          ))}
        </div>
      )}
    </>
  );
}

export default App;
