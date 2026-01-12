import { useState, useEffect } from "react";
import './App.css'

const Card = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://mxpertztestapi.onrender.com/api/sciencefiction")
      .then((response) => {
        if (!response.ok) {
          throw new Error("no response");
        }
        return response.json();
      })
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container">
      {Array.isArray(data) && data.map((item, index) => (
        <div key={item.id || index} className="card">
          <img src={item.Storyimage} alt={item.title} />
          <h3>{item.title}</h3>
          <p className="para">{item.Paragraph} hi there</p>
        </div>
      ))}
    </div>
  );
};

export default Card;
