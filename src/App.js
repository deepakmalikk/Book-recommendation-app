import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Book recommendation</h1>
      <p>here is My favourite Books of differente Genres </p>

      <button
        style={{
          backgroundColor: "grey",
          padding: "0.5rem 0.2rem",
          margin: "0.3rem",
          borderBottomRightRadius: "0.5rem"
        }}
      >
        Programming
      </button>
      <button
        style={{
          backgroundColor: "white",
          padding: "0.5rem 0.2rem",
          margin: "0.3rem",
          borderRadius: "0.5rem"
        }}
      >
        Novels
      </button>
      <button
        style={{
          backgroundColor: "grey",
          padding: "0.5rem 0.2rem",
          margin: "0.3rem",
          borderBottomRightRadius: "0.5rem"
        }}
      >
        Business
      </button>
    </div>
  );
}
