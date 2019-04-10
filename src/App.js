import React, { useState, useEffect } from "react";
import "./App.css";
import facts from "./Facts";
import { random } from "./Utilities";

export default function App() {
  const [fact, setFact] = useState("");

  useEffect(() => {
    const randomFactIndex = random(0, facts.length);
    setFact(facts[randomFactIndex]);
  }, []);

  return (
    <>
      <div className="content">
        <p>{fact}</p>
        <button onClick={() => setFact(facts[random(0, facts.length)])}>
          Show me another fact, please.
        </button>
      </div>
    </>
  );
}
