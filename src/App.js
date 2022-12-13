import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import Sentence from './data/english.json'
import dailyLife from './data/dailylife.json'
import officaily from './data/officialyenglish.json'
import vocabulary from './data/vocabulary.json'

function App() {
  const [sentence, setSentence] = useState([]);
  const [active, setActive] = useState(null)
  const [selectedClient, setSelectedClient] = useState([]);

  useEffect(() => {
    setSentence(Sentence);
  }, []);

  function handleSelectChange(event) {
    if(event.target.value == "all"){
      setSentence(Sentence);
    }
    if(event.target.value == "sentence"){
      setSentence(Sentence);
    }
    if(event.target.value == "dailylife"){
      setSentence(dailyLife);
    }
    if(event.target.value == "vocabulary"){
      setSentence(vocabulary);
    }
    if(event.target.value == "officaily"){
      setSentence(officaily);
    }

    setSelectedClient(event.target.value);
  }

  let snumber = 1
  return (
    <div className="questions-box" >
      {/* <button className="filter-button" >All Question</button>
      <button className="filter-button" >Refresh Question</button>
      <button className="filter-button" >JavaScript Question</button>
      <button className="filter-button" >Node Question</button> */}
      <select name="cars" id="cars" onChange={handleSelectChange}>
        <option value="all">All</option>
        <option value="sentence">Sentence</option>
        <option value="dailylife">Daily Uses</option>
        <option value="vocabulary">Vocabulary</option>
        <option value="officaily">Officaily</option>
      </select>
      {sentence.map((item, index) => (
        <>
          <div key={item} className="english-sentence-box">
            <div className={`english-sentence ${active == item && 'active '}`} onClick={() => setActive(item)}>
              <div className={"question"}>
                {item.hindi}
              </div>
              <div className={"answer"}>
                {item.english ? item.english : ""}
              </div>
            </div>
          </div>
        </>
      ))
       }
    </div>
  );
}

export default App;
