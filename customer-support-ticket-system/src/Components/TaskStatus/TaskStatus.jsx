import React from "react";

const ResolvedTask = ({ selectedTickets, onCompleteTicket }) => {
  const handleComplete = (ticketId) => {
    onCompleteTicket(ticketId);
    alert("Task completed successfully!");
  };

  return (
    <div className="">
      {selectedTickets.length === 0 ? (
          <p className="text-gray-400">Select a ticket to add to Task Status</p>
      ) : (
        <div className="space-y-4">
          {selectedTickets.map((ticket) => (
            <div key={ticket.id} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-medium text-gray-800 mb-3">{ticket.title}</h3>
              <button
                onClick={() => handleComplete(ticket.id)}
                className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md transition-colors">Complete</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ResolvedTask;
