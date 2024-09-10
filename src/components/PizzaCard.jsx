import { Link } from "react-router-dom";

const PizzaCard = ({ pizza }) => {
  return (
    <div style={styles.card}>
      <img src={pizza.img} alt={pizza.name} style={styles.image} />
      <h2 style={styles.name}>{pizza.name}</h2>
      <p style={styles.price}>${pizza.price}</p>
      <p style={styles.ingredients}>
        {pizza.ingredients.join(", ")}
      </p>
      <Link to={`/pizza/${pizza.id}`} style={styles.button}>
        View Details
      </Link>
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    padding: "1rem",
    textAlign: "center",
    transition: "transform 0.2s",
    cursor: "pointer",
  },
  image: {
    width: "100%",
    height: "auto",
    borderRadius: "8px",
  },
  name: {
    margin: "1rem 0 0.5rem",
    color: "#333",
  },
  price: {
    color: "#e94e77",
    fontSize: "1.2rem",
  },
  ingredients: {
    color: "#666",
    fontSize: "0.9rem",
  },
  button: {
    display: "inline-block",
    marginTop: "1rem",
    padding: "0.5rem 1rem",
    backgroundColor: "#28a745",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "4px",
  },
};

export default PizzaCard;
