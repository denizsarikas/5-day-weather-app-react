import { useState, useEffect } from 'react'
import axios from 'axios'
import Select from 'react-select'
import WeatherCard from './WeatherCard'
import Data from '../data/Turkiye.json'
import { useWeatherContext } from '../hooks/useWeatherContext'

const Main = () => {

  // const [item, setItem] = useState(city)

  const key = "b77df8380a8687408bb1c046e8aed69f"
  const { city, dispatch } = useWeatherContext();
  const [weather, setWeather] = useState(null)


  const myURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&units=metric`

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await axios.get(myURL);
        //console.log('gelen veri->', response)
        const data = response.data.list;
        const days = []
        for (let i = 0; i < 5; i++) {
          const index = i * 8;
          days.push({
            id: index,
            date: data[index].dt_txt,
            temp: data[index].main.temp,
            info: data[index].weather[0].main,
            desc: data[index].weather[0].description,
            icon: data[index].weather[0].icon,
          });
        }
        //console.log(weatherData);
        setWeather(days)
        console.log("fetched successfully")
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [myURL]);

  const handleChange = (selectedOption) => {
    console.log("seçilen değer", selectedOption.value)
    dispatch({ type: "CHANGE_CITY", payload: selectedOption.value })
    console.log(city)
  }

  // const handleChangeCity = (e) => {
  //   console.log("clicked me")
  //   dispatch({ type: "CHANGE_CITY", payload: item })
  //   console.log(item)
  //   setItem("");
  // }


  return (
    <>
      {/* <input
        type='text'
        value={item}
        onChange={(e) => { setItem(e.target.value); }}
      />
      <button onClick={handleChangeCity}>Change</button> */}

      <Select
        className='select'
        placeholder={city}
        value={city}
        options={Data.map(city => ({ value: city.name, label: city.name }))} onChange={handleChange}
      />
      <div className='main'>
        {weather && weather.map((weather) => (
          <WeatherCard key={weather.id} weather={weather} />
        ))}
      </div>
    </>
  )
}

export default Main