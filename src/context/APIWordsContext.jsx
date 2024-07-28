import React, { useState, useEffect, createContext } from "react";

export const APIWordsContext = createContext();

export function APIWords(props) {
  const [words, setWords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://itgirlschool.justmakeit.ru/api/words")
      .then((response) => response.json())
      .then((response) => {
        setWords(response);
      })
      .catch((error) => setError(error))
      .finally(() => {
        setLoading(false);
      });
  }, [words]);

  const addWord = (newWord) => {
    fetch("http://itgirlschool.justmakeit.ru/api/words/add", {
      method: "POST",
      body: JSON.stringify(newWord),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => setError(error));
  };

  const value = { words, loading, error, addWord };

  return (
    <APIWordsContext.Provider value={value}>
      {props.children}
    </APIWordsContext.Provider>
  );
}
