import React, { useState, useEffect } from "react";
// import { Button } from 'reactstrap';
import axios from 'axios';
import "./App.css";
import NasaPhoto from "./Components/NasaPhoto";
import StyledSearchBar from './Components/SearchBar';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './Components/SearchBar';
import styled from 'styled-components';


function App() {
  const [data, setData] = useState();
  const [searchDate, setSearchDate] = useState();

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
      .then(res => {
        console.log(`SearchDate`,searchDate);
        setData(res.data);
      })
      .catch(err => console.error(err))
  }, []);

  const inputDate = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${searchDate}`)
      .then(res => {
        setData(res.data);
      })
      .catch(err => console.error(err))
  }

  return (
    <div>
          <Search setSearchDate={setSearchDate} inputDate={inputDate}/>
        <div className="App">
          { data && <NasaPhoto photo={data} />}
        </div>
         <div className="bottom-container">

        </div>
       <div className="footer">
          <iframe src="https://open.spotify.com/embed/episode/1fkJjlkkMHhaqckaoNMbnK?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
    </div>
  );
}

export default App;

// 