import React from "react";

const ResolvedStatus = ({ resolvedTickets }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      {resolvedTickets.length === 0 ? (
        <p className="text-gray-500 text-sm">No resolved tasks yet.</p>
      ) : (
        <div className="space-y-2">
          {resolvedTickets.map((ticket) => (
            <div key={ticket.id} className="bg-purple-100 p-3 rounded-lg">
              <h4 className="font-medium text-gray-800 text-sm">
                {ticket.title}
              </h4>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ResolvedStatus;
