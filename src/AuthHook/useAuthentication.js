import { useState, useEffect } from "react";

// Custom hook to check if the user is authenticated
const useAuthentication = () => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    // Check if the user is logged in (You can implement your own check here)
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.token) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
  }, []);

  return authenticated;
};

export default useAuthentication;
