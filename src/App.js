import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";
import NasaPhoto from "./Components/NasaPhoto";
import Search from './Components/SearchBar';


function App() {
  // NASA APOD COMPONENT 
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

  // DOG APOD COMPONENT
  // const [dogData, setDogData] = useState();
  // const [searchDog, setSearchDog] = useState();

  // useEffect(() => {
  //   axios.get(`https://dog.ceo/api/breeds${setSearchDog}/image/random`)
  //     .then(res => {
  //       setDogData(res.data);
  //       console.log(`Results`, res.data);
  //     })
  //     .catch(err => console.error(`DevNeeded`, err))
  // }, [])

  // AN ATTEMPT TO USE A MARVEL API.... NOT WORKING
  // useEffect (() => {
  //   axios.get(`http://gateway.marvel.com/v1/public/comics?ts=1&api_key=fe0c01afea1f03013cd96277af69ae28&hash=e3b719b719b9e0dc4db9308815e3c813`)
  //     .then(res => {
  //       console.log(res);
  //     })
  //     .catch(err => console.error(err))
  // }, [])

  return (
    <div>
          {/* <Menu setDogData={setDogData} input={setSearchDog} /> */}
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