import React, { useState, useEffect, createContext } from "react";

export const APIWordsContext = createContext();

export function APIWords(props) {
  const [words, setWords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getWords = () => {
    fetch("http://itgirlschool.justmakeit.ru/api/words")
      .then((response) => response.json())
      .then((response) => {
        setWords(response);
      })
      .catch((error) => setError(error))
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getWords();
  }, []);

  const addWord = (newWord) => {
    fetch("http://itgirlschool.justmakeit.ru/api/words/add", {
      method: "POST",
      body: JSON.stringify(newWord),
    })
      .then((response) => response.json())
      .then((data) => {
        words.push(data);
        setWords([...words]);
      })
      .catch((error) => setError(error));
  };

  const deleteWord = (id) => {
    setLoading(true);
    fetch(`http://itgirlschool.justmakeit.ru/api/words/${id}/delete`, {
      method: "POST",
    })
      .then((response) => response.json())
      .then(() => {
        const filteredWords = [...words].filter((item) => item.id !== id);
        setWords(filteredWords);
      })
      .catch((error) => setError(error))
      .finally(() => {
        setLoading(false);
      });
  };

  const updateWord = (id, updWord) => {
    setLoading(true);
    fetch(`http://itgirlschool.justmakeit.ru/api/words/${id}/update`, {
      method: "POST",
      body: JSON.stringify(updWord),
    })
      .then((response) => response.json())
      .then(() => {
        const updatedWords = words.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              id: updWord.id,
              english: updWord.english,
              transcription: updWord.transcription,
              russian: updWord.russian,
              tags: updWord.tags,
            };
          }
          return item;
        });
        setWords(updatedWords);
      })
      .catch((error) => setError(error))
      .finally(() => {
        setLoading(false);
      });
  };

  const value = { words, loading, error, addWord, deleteWord, updateWord };

  return (
    <APIWordsContext.Provider value={value}>
      {props.children}
    </APIWordsContext.Provider>
  );
}
