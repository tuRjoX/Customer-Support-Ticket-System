import "./App.css";
import CustomerTicket from "./Components/CustomerTicket/CustomerTicket";
import NavBar from "./Components/NavBar/NavBar";
import TwoCard from "./Components/TwoCard/TwoCard";
import TaskStatus from "./Components/TaskStatus/TaskStatus";
import Links from "./Components/Links/Links";
import { useState, useEffect } from "react";
import { ToastContainer,toast } from 'react-toastify';


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
      toast("Ticket is already selected!");
      return;
    }

    setSelectedTickets((prev) => [...prev, ticket]);
    setInProgressCount((prev) => prev + 1);
    toast(`Ticket "${ticket.title}" added to Task Status!`);
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
        <div className="flex flex-col lg:flex-row max-w-[1400px] mx-auto mt-4 lg:mt-10 mb-10 lg:mb-20 px-4 gap-6 lg:gap-8">
          {/* Customer Tickets Section */}
          <div className="flex-1">
            <h2 className="text-xl lg:text-2xl font-semibold mb-4 lg:mb-6 text-[#34485A]">
              Customer Tickets
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
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
          <div className="w-full lg:w-80 mt-6 lg:mt-0">
            <h2 className="text-xl lg:text-2xl font-semibold mb-4 lg:mb-6 text-[#34485A]">
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
      <Links></Links>
      <ToastContainer />
    </>
  );
}

export default App;
