import "./App.css";
import CustomerTicket from "./Components/CustomerTicket/CustomerTicket";
import NavBar from "./Components/NavBar/NavBar";
import TwoCard from "./Components/TwoCard/TwoCard";
import TaskStatus from "./Components/TaskStatus/TaskStatus";
import { useState, useEffect } from "react";

function App() {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedTickets, setSelectedTickets] = useState([]);
  const [resolvedTickets, setResolvedTickets] = useState([]);
  const [inProgressCount, setInProgressCount] = useState(0);
  const [completedCount, setCompletedCount] = useState(0);

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

  const handleSelectTicket = (ticket) => {
    if (selectedTickets.find((t) => t.id === ticket.id)) {
      alert("Ticket is already selected!");
      return;
    }

    setSelectedTickets((prev) => [...prev, ticket]);
    setInProgressCount((prev) => prev + 1);
    alert(`Ticket "${ticket.title}" added to Task Status!`);
  };

  const handleCompleteTicket = (ticketId) => {
    const completedTicket = selectedTickets.find(
      (ticket) => ticket.id === ticketId
    );

    if (completedTicket) {
      setSelectedTickets((prev) =>
        prev.filter((ticket) => ticket.id !== ticketId)
      );
      setResolvedTickets((prev) => [...prev, completedTicket]);
      setTickets((prev) => prev.filter((ticket) => ticket.id !== ticketId));
      setInProgressCount((prev) => prev - 1);
      setCompletedCount((prev) => prev + 1);
    }
  };

  useEffect(() => {
    fetchTickets();
  }, []);

  return (
    <>
      <NavBar></NavBar>
      <TwoCard
        inProgressCount={inProgressCount}
        completedCount={completedCount}
      ></TwoCard>
      {loading ? (
        <div className="text-center mt-20">Loading tickets...</div>
      ) : (
        <div className="flex gap-6 mt-16 max-w-7xl mx-auto px-4">
          {/* Customer Tickets Section */}
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-6 text-[#34485A]">
              Customer Tickets
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {tickets.map((ticket) => (
                <CustomerTicket
                  key={ticket.id}
                  ticket={ticket}
                  onSelectTicket={handleSelectTicket}
                />
              ))}
            </div>
          </div>

          {/* Task Status Section */}
          <div className="w-80">
            <h2 className="text-2xl font-semibold mb-6 text-[#34485A]">
              Task Status
            </h2>
            <TaskStatus
              selectedTickets={selectedTickets}
              resolvedTickets={resolvedTickets}
              onCompleteTicket={handleCompleteTicket}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
