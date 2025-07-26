"use client";
import { useEffect, useState } from "react";

const useGetUser = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        try {
          setUser(JSON.parse(storedUser));
        } catch (err) {
          console.error("Invalid JSON in localStorage user:", err);
        }
      }
    }
  }, []);

  return { user };
};

export default useGetUser;
