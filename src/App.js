import React, { useState } from "react";
import SearchPhoto from './components/SearchPhoto';
import CardList from './components/CardList';
import Unsplash, { toJson } from "unsplash-js";
import './App.css';

function App() {
  const unsplash = new Unsplash({
    accessKey: "rjUb2tUN8lUNRrfmb9fxzDw7WTkdJT1v7LdELLt-q50"
  });
  
    const [query, setQuery] = useState("");
    const [pics, setPics] = useState([]);
  
    const onSearchPhotos = async (e) => {
      e.preventDefault();
      unsplash.search
        .photos(query)
        .then(toJson)
        .then((json) => {
      setPics(json.results);
    });
  }

  const onSearchChange = (event) => {
    setQuery(event.target.value)
  }
     
  return (
    <div className="App">
      <div className='container'>
      <h1 className='title'>Your favorite photos are here 🡳</h1>
        <SearchPhoto searchPhotos={onSearchPhotos} searchChange={onSearchChange}/>
        <CardList pics={pics}/>
      </div>
    </div>
  );
}

export default App;