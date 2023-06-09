import {useState} from "react";

export const useCounter = (initialValue = 0) => {
  const [counter, setCounter] = useState(initialValue);
  const sum = () => setCounter((c) => c + 1);

  return {
    counter,
    sum,
  };
};
