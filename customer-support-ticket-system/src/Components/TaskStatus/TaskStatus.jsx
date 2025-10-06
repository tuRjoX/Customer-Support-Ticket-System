import React from "react";
import { toast } from 'react-toastify';

const TaskStatus = ({ selectedTickets, resolvedTickets, onCompleteTicket }) => {
  const handleComplete = (ticketId) => {
    onCompleteTicket(ticketId);
    toast("Task completed successfully!");
  };

  return (
    <div className="">
      {/* Active Tasks Section */}
      {selectedTickets.length === 0 ? (
        <p className="text-gray-400 mb-6">
          Select a ticket to add to Task Status
        </p>
      ) : (
        <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
          {selectedTickets.map((ticket) => (
            <div
              key={ticket.id}
              className="rounded-lg p-3 sm:p-4 bg-white shadow-md"
            >
              <h3 className="font-medium text-gray-800 mb-2 sm:mb-3 text-sm sm:text-base leading-tight">
                {ticket.title}
              </h3>
              <button
                onClick={() => handleComplete(ticket.id)}
                className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-3 sm:px-4 rounded-md transition-colors text-sm sm:text-base"
              >
                Complete
              </button>
            </div>
          ))}
        </div>
      )}
      {/* Resolved Tasks Section */}
      <h3 className="text-lg sm:text-2xl font-semibold mb-3 sm:mb-6 text-[#34485A]">
        Resolved Task
      </h3>
      <div className="mt-2 pt-2">
        {resolvedTickets.length === 0 ? (
          <p className="text-gray-400 text-sm sm:text-base">
            No resolved tasks yet.
          </p>
        ) : (
          <div className="space-y-2">
            {resolvedTickets.map((ticket) => (
              <div
                key={ticket.id}
                className="bg-purple-100 p-2 sm:p-3 rounded-lg"
              >
                <h4 className="font-medium text-gray-800 text-xs sm:text-sm leading-tight">
                  {ticket.title}
                </h4>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskStatus;
