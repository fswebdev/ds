import React, { useEffect, useState } from 'react';
import Weather from './components/Weather';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App(){
  const [ lat, setLat ] = useState();
  const [ lon, setLon ] = useState();
  const [ data, setData ] = useState([]);

  useEffect(() => {
    const fetchData = async() => {
    navigator.geolocation.getCurrentPosition(function(position) {
      setLat(position.coords.latitude);
      setLon(position.coords.longitude);

  });

 await fetch('https://api.openweathermap.org/data/2.5/weather?&lat=12.971599&lon=77.594566&units=metric&APPID=APIKEY')
  .then(res => res.json())
  .then(result => {
    setData(result);
    console.log(result);
  });
}
fetchData();
}, [lat,lon]);



  return (
    <div className="App">
      {(typeof data.main != 'undefined') ? (<Weather weatherData={data}/>):
      (<div></div>)
}
</div>
)
}
