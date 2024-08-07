import { useEffect, useState } from "react";

const useCredential = () => {
  const id = localStorage.getItem("uId");
  const [user, setUser] = useState({});
  // console.log(user);

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

  return {
    user,
    setUser,
    logOut,
  };
};

export default useCredential;
