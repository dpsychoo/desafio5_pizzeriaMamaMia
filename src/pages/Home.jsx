import { useEffect, useState } from "react";
import PizzaCard from "../components/PizzaCard";

const Home = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/pizzas");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setPizzas(data);
      } catch (error) {
        console.error("Error fetching pizzas:", error);
      }
    };

    fetchPizzas();
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to Our Pizzeria</h1>
      <div style={styles.pizzaList}>
        {pizzas.map((pizza) => (
          <PizzaCard key={pizza.id} pizza={pizza} />
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "2rem",
    backgroundColor: "#f4f4f4",
    textAlign: "center",
  },
  heading: {
    marginBottom: "2rem",
    color: "#333",
  },
  pizzaList: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "1rem",
    justifyContent: "center",
  },
};

export default Home;
