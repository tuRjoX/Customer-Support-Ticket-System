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
      className="ticket-card bg-white p-4 sm:p-6 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow w-full"
      onClick={handleCardClick}
    >
      <div>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3 sm:mb-4 gap-2 sm:gap-0">
          <h1 className="text-base sm:text-lg font-semibold leading-tight">
            {ticket.title}
          </h1>
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
        <p className="text-gray-500 text-sm mb-3 sm:mb-4 line-clamp-3">
          {ticket.description}
        </p>
        <div className="flex flex-wrap gap-2 sm:gap-4 lg:gap-6 mt-2 text-xs sm:text-sm">
          <p className="text-gray-500 font-medium">{ticket.id}</p>
          <p className={`${getPriorityColor(ticket.priority)} font-medium`}>
            {ticket.priority.toUpperCase()}
          </p>
          <p className="text-gray-500">{ticket.assignee}</p>
          <p className="text-gray-500 flex items-center">
            <img
              src={Calender}
              alt="Calendar"
              className="inline-block mr-1 w-4 h-4 sm:w-[20px] sm:h-[20px]"
            />
            {new Date(ticket.date).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomerTicket;
