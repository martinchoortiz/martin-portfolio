import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Martin Ortiz Portfolio</h1>
      <h2>Hi! This is my first page...</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Source code at{" "}
          <code>https://github.com/martinchoortiz/martin-portfolio</code>
        </p>
      </div>
      <p className="read-the-docs">Developed using Vite + React</p>
    </>
  );
}

export default App;
