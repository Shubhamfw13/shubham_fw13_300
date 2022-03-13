import { useState, useEffect } from "react";

export const Timer = () => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const id = setInterval((prev) => {
      setTimer((prev) => {
        if (prev >= 10) {
          clearInterval(id);
          return 0;
        }
        return prev + 1;
      });
    }, 1000);

    return () => {
      clearInterval(id);
      console.log("Unmounted Timer");
    };
  }, []);

  return <div>Timer:{timer}</div>;
};
