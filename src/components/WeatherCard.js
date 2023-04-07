import React from 'react';
import { parseISO, format } from 'date-fns';

const WeatherCard = ({ weather }) => {
  const date = format(parseISO(weather.date), 'EEEE'); // 'EEEE' haftanın gününü ifade eder
  const temp = Math.round(weather.temp); // weather.temp değişkenindeki değeri yuvarla

  function capitalize(str) {
    return str.replace(/(?:^|\s)\S/g, function (a) { return a.toUpperCase(); });
  }

  function getFirstThreeChars(str) {
    return str.substring(0, 3);
  }

  // console.log(weather.icon)
  return (
    <div className='weathercard'>
      {/* {weather.id === 0 ? <div> today </div> : null} */}
      {/* {weather.id === 0 && <div> today </div>} */}
      <div>
        <h2>{getFirstThreeChars(date)} {weather.id === 0 && "(today)"}</h2>
        <h3>{temp} °C</h3>
        <img src={`https://openweathermap.org/img/w/${weather.icon}.png`} alt={`weather-icon-${weather.info}`} />
        <h4>{capitalize(weather.desc)}</h4>
      </div>

    </div>
  );
};

export default WeatherCard;
