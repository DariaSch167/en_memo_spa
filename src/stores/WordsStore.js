import React from "react";
import { action, observable } from "mobx";

class WordsStore extends React.Component {
  @observable words = [];
  @observable loading = true;
  @observable error = null;

  @action getWords = () => {
    fetch("http://itgirlschool.justmakeit.ru/api/words")
      .then((response) => response.json())
      .then((response) => {
        this.words = response;
      })
      .catch((error) => (this.error = `Something went wrong: " + ${error}`))
      .finally(() => {
        this.loading = false;
      });
  };

  @action addWord = (newWord) => {
    fetch("http://itgirlschool.justmakeit.ru/api/words/add", {
      method: "POST",
      body: JSON.stringify(newWord),
    })
      .then((response) => response.json())
      .then((data) => {
        this.words.push(data);
        this.words = [...this.words];
      })
      .catch((error) => (this.error = `Failed to add: ${error}`));
  };

  @action deleteWord = (id) => {
    this.loading = true;
    fetch(`http://itgirlschool.justmakeit.ru/api/words/${id}/delete`, {
      method: "POST",
    })
      .then((response) => response.json())
      .then(() => {
        const filteredWords = [...this.words].filter((item) => item.id !== id);
        this.words = filteredWords;
      })
      .catch((error) => (this.error = `Failed to delete: ${error}`))
      .finally(() => {
        this.loading = false;
      });
  };
}

export default WordsStore;
