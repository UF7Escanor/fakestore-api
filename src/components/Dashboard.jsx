import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    document.location.reload();
  };

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token]);

  return (
    <div>
      sasasa
      <button className="bg-amber-500" onClick={logout}>
        {" "}
        logout
      </button>
    </div>
  );
}

export default Dashboard;
