import React, { useState, useEffect, createContext } from "react";

export const APIWordsContext = createContext();

export function APIWords(props) {
  const [words, setWords] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://itgirlschool.justmakeit.ru/api/words")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong ...");
        }
      })
      .then((response) => {
        setWords(response);
        setLoading(false);
      })
      .catch((error) => console.log(error.message));
  }, [words]);

  const value = { words, loading };

  return (
    <APIWordsContext.Provider value={value}>
      {props.children}
    </APIWordsContext.Provider>
  );
}
