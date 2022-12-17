import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import parse from 'html-react-parser';
import {
  getSentence,
  getDailyLife,
  getOfficaily,
  getStories,
  getVocabulary,
  getInterview
} from './fetchdata'

function App() {
  const [sentence, setSentence] = useState([]);
  const [interviewQuestion, setInterviewQuestion] = useState([]);
  const [stories, setStories] = useState([]);
  const [interview, setInterview] = useState([]);
  const [divActive, setDivActive] = useState({
    sentence: true,
    stories: false,
    interview: false
  });
  const [active, setActive] = useState(null)
  const [screenType, setScreenType] = useState('sentence')
  const [selectedClient, setSelectedClient] = useState([]);
  const [value, setValue] = useState([]);

  useEffect(() => {
    // getSentence()
    //   .then((data) => {
    //     setSentence(data);
    //   })

  }, []);

  function handleSelectChange(event) {
    console.log(divActive)
    if (event.target.value == "all") {

      setSentence([]);
    }
    if (event.target.value == "sentence") {
      setDivActive({
        sentence: true,
        stories: false,
        interview: false
      })
      getSentence()
        .then((data) => {
          setSentence(data);
        })
      //setSentence(sentence);
    }
    if (event.target.value == "dailylife") {
      setDivActive({
        sentence: true,
        stories: false,
        interview: false
      })
      getDailyLife()
        .then((data) => {
          setSentence(data);
        })
    }
    if (event.target.value == "vocabulary") {
      setDivActive({
        sentence: true,
        stories: false,
        interview: false
      })
      getVocabulary()
        .then((data) => {
          setSentence(data);
        })
    }
    if (event.target.value == "officaily") {
      setDivActive({
        sentence: true,
        stories: false,
        interview: false
      })
      getOfficaily()
        .then((data) => {
          setSentence(data);
        })
    }
    if (event.target.value == "stories") {
      setDivActive({
        sentence: true,
        stories: false,
        interview: false
      })
      getStories()
        .then((data) => {
          setDivActive({
            sentence: false,
            stories: true,
            interview: false
          })
          setStories(data);
        })
    }
    if (event.target.value == "interview") {
      setDivActive({
        sentence: false,
        stories: false,
        interview: true
      })
      getInterview()
        .then((data) => {
          console.log("interview")
          setInterviewQuestion(data)
          //setInterview(data);
        })
    }

    setSelectedClient(event.target.value);
  }

  function handleScreenTypeChange(event) {
    setScreenType(event.target.value)
  }

  function handleInputChange(event) {
    setValue(event.target.value)
    //this.setState({value: event.target.value});


  }

  // async function handleSubmit() {
  //   //insertsentence = insertsentence.push({ "sentence": value })
  // }

  function handleSubmit() {
    console.log("save")
  }

  let snumber = 1
  return (

    <div>
      {/* <select name="screen_type" id="screen-type" onChange={handleScreenTypeChange}>
        <option value="sentence">Sentence</option>
        <option value="insertsentence">Insert</option>
      </select> */}

      {/* sentance screen start */}
      {screenType == "sentence" &&
        <div className="questions-box" >
          {/* <button className="filter-button" >All Question</button>
      <button className="filter-button" >Refresh Question</button>
      <button className="filter-button" >JavaScript Question</button>
      <button className="filter-button" >Node Question</button> */}
          <select name="cars" class="select-for-sentence" onChange={handleSelectChange}>
            <option value="all">All</option>
            <option value="sentence">Sentence</option>
            <option value="dailylife">Daily Uses</option>
            <option value="vocabulary">Vocabulary</option>
            <option value="officaily">Officaily</option>
            <option value="stories">Story</option>
            <option value="interview">Interview</option>
          </select>
          {
            divActive.sentence &&
            sentence.map((item, index) => (
              <>
                <div key={item} className="english-sentence-box">
                  <div className={`english-sentence`} >
                    <div className={`question ${active == item && 'active '}`} onClick={() => setActive(item)}>
                      {item.hindi}
                      <div className={"answer"}>
                        {item.english ? item.english : ""}
                      </div>
                    </div>

                  </div>
                </div>
              </>
            ))

          }

          {
            divActive.stories &&
            <>
              {stories.map((item, index) => (
                <>
                  <div className={`story-name ${active == item && 'active '} ${item.answer ? "is-answer" : ""}`} onClick={() => setActive(item)} key={index}>
                    {item.name.toUpperCase()}
                    <div className={"story-data"}>
                      {item.data ? parse(item.data) : ""}
                    </div>
                  </div>

                </>
              ))
              }
            </>
          }

          {
            divActive.interview &&
            <>
              {interviewQuestion.map((item, index) => (
                <>
                  <div className={`interview-questions ${active == item && 'active '} ${item.answer ? "is-answer" : ""}`} onClick={() => setActive(item)} key={index}>
                    {snumber++}. {item.question}
                    <div className={""}>
                      {item.answer ? parse(item.answer) : ""}
                    </div>
                  </div>

                </>
              ))
              }
            </>
          }

        </div>}
      {/* sentance screen end */}


      {/* insert screen start */}
      {/* {screenType == "insertsentence" &&
        <div className="insert-sentence">
          <form >
            <label>
              <input type="text" value={value} onChange={handleInputChange} />
            </label>
            <input type="button" onClick={handleSubmit} value="Submit" />
          </form>
        </div>
      } */}
      {/* insert screen end */}
    </div>

  );
}

export default App;
