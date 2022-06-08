import React, { useEffect, useState } from 'react';
import Weather from './components/Weather';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App(){
  const [input, setInput] = useState("")
  const [ lat, setLat ] = useState();
  const [ lon, setLon ] = useState();
  const [ data, setData ] = useState([]);

  useEffect(() => {
    const fetchData = async() => {
    navigator.geolocation.getCurrentPosition(function(position) {
      setLat(position.coords.latitude);
      setLon(position.coords.longitude);

  });
// eslint-disable-next-line
 await fetch('https://api.openweathermap.org/data/2.5/forecast?q=${input}&lat=${lat}&lon=${lon}&units=metric&APPID=APIKEY')
  .then(res => res.json())
  .then(result => {
    setData(result);
    console.log(result);
  });
}
fetchData();
}, [input,lat,lon]);
function handleSubmit(e){
  e.preventDefault();
}
function handleChange(e){
  setInput(e.target.value);
}

  return (
    <div className="App">
      {(typeof data.main != 'undefined') ? 
      (<div>
        <form className="input-form" onSubmit={handleSubmit}>
        <input type="text" className="form" placeholder="Enter latitude coordinate"  onChange={handleChange}></input>
        <input type="text" className="form" placeholder="Enter longitude coordinate" onChange={handleChange}></input>
        <button type="submit" className="btn btn-primary" onClick={(e) => setData(e)}></button>
      </form>
      </div>) :
      (<div></div>)
}
</div>
)
}
