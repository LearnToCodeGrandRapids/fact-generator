import React, { useState, useEffect } from "react";
import "./App.css";
import facts from "./Facts";
import { generateRandomNumberBetween } from "./Utilities";

export default function App() {
  const [fact, setFact] = useState("");

  useEffect(() => {
    const randomFactIndex = generateRandomNumberBetween(0, facts.length);
    setFact(facts[randomFactIndex]);
  }, []);

  return <p className="content">{fact}</p>;
}
