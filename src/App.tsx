import React from "react";

function App() {
  const [time, setTime] = React.useState("00:00:00");
  setInterval(() => {
    const now = new Date().getTime();
    const target = new Date("Aug 30, 2022 00:00:00").getTime();
    const distance = target - now;
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    setTime(`${hours}:${minutes}:${seconds}`);
  }, 1000);
  return <>{time}</>;
}

export default App;
