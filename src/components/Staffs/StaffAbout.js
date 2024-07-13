import React from "react";

const StaffAbout = ({ staff }) => {
  const slots = [
    {
      _id: "1",
      label: "Morning Service",
      start_time: "10:00",
      end_time: "11:30",
    },
    {
      _id: "2",
      label: "Evening Service",
      start_time: "12:00",
      end_time: "22:30",
    },
    {
      _id: "3",
      label: "Morning Service",
      start_time: "10:00",
      end_time: "11:30",
    },
    {
      _id: "4",
      label: "Evening Service",
      start_time: "13:00",
      end_time: "22:30",
    },
    {
      _id: "5",
      label: "Morning Service",
      start_time: "10:00",
      end_time: "11:30",
    },
    {
      _id: "6",
      label: "Night Service",
      start_time: "22:00",
      end_time: "05:30",
    },
  ];

  const services = [
    {
      _id: "1",
      name: "AC Service",
      category: "AC",
      details:
        "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      image: "https://i.ibb.co/vd5PntG/hero.jpg",
    },
    {
      _id: "2",
      name: "TV Service",
      category: "TV",
      details:
        "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      image: "https://i.ibb.co/k9WMhM0/download-1.jpg",
    },
    {
      _id: "3",
      name: "AC Service",
      category: "AC",
      details:
        "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      image: "https://i.ibb.co/XYtnvvN/download.jpg",
    },
    {
      _id: "4",
      name: "Beauty Service",
      category: "Beauty",
      details:
        "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      image: "https://i.ibb.co/9VH1nVr/download-3.jpg",
    },
    {
      _id: "5",
      name: "Salon Service",
      category: "Salon",
      details:
        "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      image: "https://i.ibb.co/xHL3Wxw/download-2.jpg",
    },
    {
      _id: "6",
      name: "TV Service",
      category: "TV",
      details:
        "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      image: "https://i.ibb.co/k9WMhM0/download-1.jpg",
    },
    {
      _id: "7",
      name: "AC Service",
      category: "AC",
      details:
        "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      image: "https://i.ibb.co/XYtnvvN/download.jpg",
    },
    {
      _id: "8",
      name: "Beauty Service",
      category: "Beauty",
      details:
        "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      image: "https://i.ibb.co/9VH1nVr/download-3.jpg",
    },
    {
      _id: "9",
      name: "Salon Service",
      category: "Salon",
      details:
        "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      image: "https://i.ibb.co/xHL3Wxw/download-2.jpg",
    },
    {
      _id: "10",
      name: "TV Service",
      category: "TV",
      details:
        "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      image: "https://i.ibb.co/k9WMhM0/download-1.jpg",
    },
  ];

  const categories = [
    ...new Set(
      staff.services.map(
        (staffServiceName) =>
          services.find((service) => service.name === staffServiceName).category
      )
    ),
  ];
  console.log(categories);
  function formatTime(timeString) {
    const [hours, minutes] = timeString.split(":");
    const formattedHours = hours % 12 || 12;
    const period = hours < 12 ? "AM" : "PM";
    return `${formattedHours}:${minutes} ${period}`;
  }

  return (
    <div className="py-10 bg-[#f9f8f8]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="">
          <div className="bg-white border rounded-md p-5 w-full md-w-11/12">
            <h2 className="text-xl font-bold ">Policies</h2>
            <div className="ms-3 mt-3">
              <p className="text-xs text-gray-600">From</p>
              <p className="text-xs mt-1">{staff.location}</p>
            </div>
            <div className="ms-3 mt-3">
              <p className="text-xs text-gray-600">Service Rate</p>
              <p className="text-xs mt-1">
                {Number(staff.rate).toLocaleString()}
              </p>
            </div>
          </div>
          <div className="bg-white border rounded-md p-5 w-full md-w-11/12 mt-5">
            <h1 className="text-xl font-bold">Service Slots</h1>
            <div className="divide-y divide-slate-200 mt-5">
              {slots.map((slot) => (
                <div
                  key={slot._id}
                  className="grid grid-cols-2 items-center content-between"
                >
                  <div className="text-sm py-2 text-gray-600">{slot.label}</div>
                  <div className="text-sm py-2 text-end text-gray-600">
                    {formatTime(slot.start_time)} - {formatTime(slot.end_time)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="pt-5 md:pt-0">
          <h2 className="text-xl font-bold">Staff Information</h2>
          <p className="text-justify text-sm leading-5 text-gray-700 mt-3">
            {staff.details}
          </p>
          <div className="bg-white border rounded-md p-5 mt-5">
            <h2 className="text-xl font-bold">Categories</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {categories.map((category) => (
                <p
                  className="text-sm mr-2 p-2 rounded-full border  border-gray-300"
                  key={category}
                >
                  {category}
                </p>
              ))}
            </div>
          </div>
          <div className="bg-white border rounded-md p-5 mt-5">
            <h2 className="text-xl font-bold">Services</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {staff.services.map((service) => (
                <p
                  className="text-sm mr-2 p-2 rounded-full border  border-gray-300"
                  key={service}
                >
                  {service}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffAbout;
