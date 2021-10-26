import React from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <main>
      <header>
        <h1>Dashboard</h1>
      </header>
      <Link to="/info">Info</Link>
    </main>
  );
}
