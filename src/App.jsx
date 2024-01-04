import { useState } from "react";

import "./App.css";

function App() {
  const [dict, setDict] = useState([
    {
      word: "React",
      meaning: "A JavaScript library for building user interfaces.",
    },

    { word: "Component", meaning: "A reusable building block in React." },

    { word: "State", meaning: "An object that stores data for a component." },
  ]);
  const [input, setInput] = useState("");
  const [definition, setDefinition] = useState(null);

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSearch = (e) => {
    const res = dict.find(
      (obj) => obj.word.toLowerCase() === input.toLowerCase()
    );
    if (res) {
      setDefinition(res.meaning);
    } else setDefinition("Word not found in the dictionary.");
  };

  return (
    <>
      <h1>Dictionary App</h1>
      <input
        placeholder="Search for a word"
        type="text"
        value={input}
        onChange={handleChange}
      />
      <button onClick={handleSearch}>Search</button>
      <h3>Definition:</h3>
      {definition && <p>{definition}</p>}
    </>
  );
}

export default App;
