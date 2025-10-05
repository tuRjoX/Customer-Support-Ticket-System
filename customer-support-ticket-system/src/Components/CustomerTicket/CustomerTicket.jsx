import React from "react";
import GreenDot from "../../assets/greendot.png";
import YellowDot from "../../assets/yellowdot.png";
import Calender from "../../assets/calender.png";

const CustomerTicket = ({ ticket, onSelectTicket }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case "Open":
        return "bg-[#b9f8cf]";
      case "In Progress":
        return "bg-[#ffeaa7]";
      case "Completed":
        return "bg-[#ddd6fe]";
      default:
        return "bg-gray-200";
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "High Priority":
        return "text-red-500";
      case "Medium Priority":
        return "text-yellow-500";
      case "Low Priority":
        return "text-green-500";
      default:
        return "text-gray-500";
    }
  };

  const getStatusDot = (status) => {
    switch (status) {
      case "In Progress":
        return YellowDot;
      case "Open":
      case "Completed":
      default:
        return GreenDot;
    }
  };

  const handleCardClick = () => {
    if (onSelectTicket) {
      onSelectTicket(ticket);
    }
  };

  return (
    <div
      className="ticket-card bg-white p-6 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow"
      onClick={handleCardClick}
    >
      <div>
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-lg font-semibold">{ticket.title}</h1>
          <p
            className={`text-gray-500 text-sm ${getStatusColor(
              ticket.status
            )} p-1 rounded-lg items-center`}
          >
            <span>
              <img
                src={getStatusDot(ticket.status)}
                alt="Status Dot"
                className="inline-block mr-1"
              />
            </span>{" "}
            {ticket.status}
          </p>
        </div>
        <p className="text-gray-500 text-sm mb-4">{ticket.description}</p>
        <div className="flex gap-10 mt-2">
          <p className="text-gray-500">{ticket.id}</p>
          <p
            className={`text-gray-500 ${getPriorityColor(
              ticket.priority
            )} text-sm`}
          >
            {ticket.priority.toUpperCase()}
          </p>
          <p className="text-gray-500 text-sm">{ticket.assignee}</p>
          <p className="text-gray-500 flex items-center">
            <img
              src={Calender}
              alt="Calendar"
              className="inline-block mr-1 w-[20px] h-[20px]"
            />
            {new Date(ticket.date).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomerTicket;
