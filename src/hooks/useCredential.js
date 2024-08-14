import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const useCredential = () => {
  const id = localStorage.getItem("uId");
  const [user, setUser] = useState({});
  const [users, setUsers] = useState([]);
  const [categories, setCategories] = useState([]);
  const [slots, setSlots] = useState([]);

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        try {
          const response = await fetch(`http://localhost:5000/user/${id}`);
          const result = await response.json();

          setUser(result.user);
        } catch (err) {
          fetchData();
        }
      };
      fetchData();
    } else {
      setUser({});
    }
  }, [id]);

  //LogOut
  const logOut = () => {
    localStorage.removeItem("uId");
    setUser({});
  };

  //Fetch All Users
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/users");
        const result = await response.json();

        if (result) {
          setUsers(result.users);
        } else {
          toast.error(`${result.message}`);
        }
      } catch (err) {
        toast.error(`${err}`);
      }
    };
    fetchData();
  }, [setUsers]);

  //Fetch Categoty
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/categories");
        const result = await response.json();

        if (result) {
          setCategories(result.categories);
        } else {
          toast.error(`${result.message}`);
        }
      } catch (err) {
        toast.error(`${err}`);
      }
    };
    fetchData();
  }, [setCategories]);

  //Fetch Slot
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/slots");
        const result = await response.json();

        if (result) {
          setSlots(result.slots);
        } else {
          toast.error(`${result.message}`);
        }
      } catch (err) {
        toast.error(`${err}`);
      }
    };
    fetchData();
  }, [setSlots]);

  return {
    user,
    setUser,
    users,
    setUsers,
    logOut,
    categories,
    setCategories,
    slots,
    setSlots,
  };
};

export default useCredential;
