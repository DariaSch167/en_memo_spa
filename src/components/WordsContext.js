import React, { useState, useEffect, createContext } from "react";
export const APIWordsContext = createContext();

export function APIWords(props) {
  let [words, setWords] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  useEffect(() => {
    // setWords([
    //   {
    //     id: "101",
    //     english: "horse",
    //     transcription: "[ hɔːs ]",
    //     russian: "лошадь",
    //     tags: "животное",
    //     tags_json: "[]",
    //   },
    //   {
    //     id: "201",
    //     english: "basket",
    //     transcription: "[ˈbɑːskɪt]",
    //     russian: "корзина",
    //     tags: "предмет",
    //     tags_json: '[""]',
    //   },
    // ]);
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
        // setLoading(false);
      })
      .catch((error) => console.log(error.message));
  }, [words]);

  return (
    <APIWordsContext.Provider value={words}>
      {props.children}
    </APIWordsContext.Provider>
  );
}
