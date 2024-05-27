import { useEffect, useState } from "react";

const ProgressBar = ({ value = 0, onComplete = () => {} }) => {
  const [percent, setPercent] = useState<number>(value);

  useEffect(() => {
    setPercent(Math.min(Math.max(value, 0), 100));
    if (value >= 100) {
      onComplete();
    }
  }, [value]);

  return (
    <div className="progress">
      <span style={{ color: value > 49 ? "#fff" : "#000" }}>
        {percent.toFixed()}%
      </span>
      <div
        style={{
          transform: `scaleX(${percent / 100})`,
          transformOrigin: "left",
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
