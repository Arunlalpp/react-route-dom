import { Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1>Arunlalpp</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expense">Expenses</Link>
      </nav>
    </div>
  );
}