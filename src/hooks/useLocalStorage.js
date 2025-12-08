import { useState, useEffect } from "react";

export const useLocalStorage = (key, defaultValue) => {
  // set state as function
  const [value, setValue] = useState(() => {
    try {
      // set variable to content of localstorage with asssigned key
      const stored = localStorage.getItem(key);
      ///if key = true, return parsed data, else return defaultvalue
      return stored ? JSON.parse(stored) : defaultValue;

      //error handling
    } catch (error) {
      console.error("could not read localstorage", error);
    }
  });

  useEffect(() => {
    try {
      //set localstorage with the key and value
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Could not write to localstorage", error);
    }
    // trigger codeblock when value or key are changed
  }, [value, key]);

  //return variablke and setter
  return [value, setValue];
};
