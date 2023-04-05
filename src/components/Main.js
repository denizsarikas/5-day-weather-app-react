import { useState, useEffect } from 'react'
import axios from 'axios'
import WeatherCard from './WeatherCard'

const Main = () => {

  const [city, setCity] = useState("Istanbul")
  const [weather, setWeather] = useState(null)

  const key = "b77df8380a8687408bb1c046e8aed69f"
  const myURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&units=metric`

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await axios.get(myURL);
        //console.log('gelen veri->', data)
        const data = response.data.list;
        const days = []
        for (let i = 0; i < 5; i++) {
          const index = i * 8;
          days.push({
            id: index,
            date: data[index].dt_txt,
            temp: data[index].main.temp,
            info: data[index].weather[0].main,
            desc: data[index].weather[0].description
          });
        }
        //console.log(days);
        setWeather(days)
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();

  }, []);


  return (
    <>
      <div className='main'>
        {weather && weather.map((weather) => (
          <WeatherCard key={weather.id} weather={weather} />
        ))}
      </div>

    </>
  )
}

export default Main