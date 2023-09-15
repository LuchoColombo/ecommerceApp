import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 3000);
  }, [navigate]);

  return (
    <div>
      <h1>Error</h1>
      <p>Ud sera dirijido a la Home en 3 seg...</p>
    </div>
  );
};

export default Error;
