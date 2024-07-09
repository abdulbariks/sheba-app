import React from "react";
import Navbar from "../../components/Navbar";
import ServiceCard from "../../components/Services/ServiceCard";
const Services = (props) => {
  const categories = [
    {
      _id: "1",
      name: "AC",
    },
    {
      _id: "2",
      name: "TV",
    },
    {
      _id: "3",
      name: "Salon",
    },
    {
      _id: "4",
      name: "Beauty",
    },
  ];
  const services = [
    {
      _id: 1,
      name: "AC Service",
      category: "AC",
      details:
        "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      image: "https://i.ibb.co/vd5PntG/hero.jpg",
    },
    {
      _id: 2,
      name: "barik",
      category: "TV",
      details:
        "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      image: "https://i.ibb.co/k9WMhM0/download-1.jpg",
    },
    {
      _id: 3,
      name: "AC Service",
      category: "AC",
      details:
        "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      image: "https://i.ibb.co/XYtnvvN/download.jpg",
    },
    {
      _id: 4,
      name: "barik",
      category: "Beauty",
      details:
        "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      image: "https://i.ibb.co/9VH1nVr/download-3.jpg",
    },
    {
      _id: 5,
      name: "abdul barik",
      category: "Salon",
      details:
        "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      image: "https://i.ibb.co/xHL3Wxw/download-2.jpg",
    },
    {
      _id: 6,
      name: "barik",
      category: "TV",
      details:
        "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      image: "https://i.ibb.co/k9WMhM0/download-1.jpg",
    },
    {
      _id: 7,
      name: "AC Service",
      category: "AC",
      details:
        "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      image: "https://i.ibb.co/XYtnvvN/download.jpg",
    },
    {
      _id: 8,
      name: "barik",
      category: "Beauty",
      details:
        "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      image: "https://i.ibb.co/9VH1nVr/download-3.jpg",
    },
    {
      _id: 9,
      name: "abdul barik",
      category: "Salon",
      details:
        "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      image: "https://i.ibb.co/xHL3Wxw/download-2.jpg",
    },
    {
      _id: 10,
      name: "barik",
      category: "TV",
      details:
        "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      image: "https://i.ibb.co/k9WMhM0/download-1.jpg",
    },
  ];
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-2">
        <h1 className=" text-3xl mt-5 font-bold">All Services</h1>
        {categories.map((category) => (
          <div key={category._id} className="my-20">
            <div className="w-full">
              <h2 className="my-5 text-2xl font-bold">{category.name}</h2>
              <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {services
                  .filter((service) => service.category === category.name)
                  .map((service) => (
                    <ServiceCard key={service._id} service={service} />
                  ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
