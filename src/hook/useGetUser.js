const { useEffect, useState } = require("react");

const useGetUser = () => {
  const [user, setUser] = useState();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setUser(user);
  }, []);

  return {
    user,
  };
};

export default useGetUser;
