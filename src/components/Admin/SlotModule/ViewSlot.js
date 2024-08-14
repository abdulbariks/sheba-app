import React from "react";
import useAuth from "../../../hooks/useAuth";
import { toast } from "react-toastify";

const ViewSlot = (props) => {
  const { slots, setSlots } = useAuth();
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/slot/${id}`, {
        method: "DELETE",
      });
      const result = await response.json();
      if (result.status) {
        toast.success(`${result.message}`);
        const fetchData = async () => {
          try {
            const response = await fetch("http://localhost:5000/slots");
            const result = await response.json();
            if (result.status) {
              setSlots(result.slots);
            } else {
              toast.error(`${result.message}`);
            }
          } catch (err) {
            toast.error(`${err}`);
          }
        };
        fetchData();
      } else {
        toast.error(`${result.message}`);
      }
    } catch (err) {
      toast.error(`${err}`);
    }
  };

  function formatTime(timeString) {
    const [hours, minutes] = timeString.split(":");
    const formattedHours = hours % 12 || 12;
    const period = hours < 12 ? "AM" : "PM";
    return `${formattedHours}:${minutes} ${period}`;
  }

  return (
    <div className="overflow-auto my-5 max-h-80 p-2">
      <table className="min-w-full border relative">
        <thead className="bg-white border-b sticky -top-3">
          <tr>
            <th className="text-sm font-medium text-gray-900 p-3 text-left">
              #
            </th>
            <th className="text-sm font-medium text-gray-900 p-3 text-left">
              Label
            </th>
            <th className="text-sm font-medium text-gray-900 p-3 text-left">
              Start Time
            </th>
            <th className="text-sm font-medium text-gray-900 p-3 text-left">
              End Time
            </th>
            <th className="text-sm font-medium text-gray-900 p-3 text-left">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {slots.length > 0 &&
            slots.map((slot, index) => (
              <tr
                key={slot._id}
                className="odd:bg-gray-100 even:bg-white border-b"
              >
                <td className="text-sm text-gray-900 font-light p-3 whitespace-nowrap">
                  {index + 1}
                </td>
                <td className="text-sm text-gray-900 font-light p-3 whitespace-nowrap">
                  {slot.label}
                </td>
                <td className="text-sm text-gray-900 font-light p-3 whitespace-nowrap">
                  {formatTime(slot.start_time)}
                </td>
                <td className="text-sm text-gray-900 font-light p-3 whitespace-nowrap">
                  {formatTime(slot.end_time)}
                </td>
                <td className="text-sm text-gray-900 font-light p-3 whitespace-nowrap capitalize">
                  <svg
                    onClick={() => handleDelete(slot._id)}
                    className="w-[25px] h-[25px] fill-[#8e8e8e]"
                    viewBox="0 0 448 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"></path>
                  </svg>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewSlot;
