import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Pizza = () => {
  const [pizza, setPizza] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/pizzas/${id}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setPizza(data);
      } catch (error) {
        console.error("Error fetching pizza:", error);
      }
    };

    fetchPizza();
  }, [id]);

  if (!pizza) return <p>Loading...</p>;

  return (
    <div style={styles.container}>
      <img src={pizza.img} alt={pizza.name} style={styles.image} />
      <h1 style={styles.name}>{pizza.name}</h1>
      <p style={styles.price}>${pizza.price}</p>
      <p style={styles.description}>{pizza.desc}</p>
      <p style={styles.ingredients}>
        <strong>Ingredients:</strong> {pizza.ingredients.join(", ")}
      </p>
      <button style={styles.button}>Add to Cart</button>
    </div>
  );
};

const styles = {
  container: {
    padding: "2rem",
    maxWidth: "800px",
    margin: "auto",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: "auto",
    borderRadius: "8px",
  },
  name: {
    margin: "1rem 0",
    color: "#333",
  },
  price: {
    color: "#e94e77",
    fontSize: "1.5rem",
  },
  description: {
    color: "#666",
    fontSize: "1rem",
    margin: "1rem 0",
  },
  ingredients: {
    color: "#666",
    fontSize: "0.9rem",
  },
  button: {
    padding: "0.75rem 1.5rem",
    backgroundColor: "#e94e77",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "1rem",
  },
};

export default Pizza;
