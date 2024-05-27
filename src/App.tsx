import { useEffect, useState } from "react";
import "./App.css";
import ProgressBar from "./components/ProgressBar";

function App() {
  const [value, setValue] = useState<number>(0);
  const [success, setSuccess] = useState<boolean>(false);

  useEffect(() => {
    setInterval(() => {
      setValue((val) => val + 0.1);
    }, 20);
  }, []);

  return (
    <div className="app">
      <span>Progress Bar</span>
      <ProgressBar value={value} onComplete={() => setSuccess(true)} />
      <span>{success ? "Completed" : "Loading..."}</span>
    </div>
  );
}

export default App;
