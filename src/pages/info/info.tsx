import React from "react";
import { Link } from "react-router-dom";
import config from "../../config";

export default function Info() {
  return (
    <main>
      <header>
        <h1>Info</h1>
      </header>
      <pre>Debug: {config.debug ? "yes" : "no"}</pre>
      <Link to="/">Dashboard</Link>
    </main>
  );
}
