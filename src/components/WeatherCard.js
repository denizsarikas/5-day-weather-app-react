import React from 'react';
import { parseISO, format } from 'date-fns';

const WeatherCard = ({ weather }) => {
  const date = format(parseISO(weather.date), 'EEEE'); // 'EEEE' haftanın gününü ifade eder
  const temp = Math.round(weather.temp); // weather.temp değişkenindeki değeri yuvarla

  return (
    <div className='weathercard'>
        {/* {weather.id === 0 ? <div> today </div> : null} */}
        {/* {weather.id === 0 && <div> today </div>} */}
        <div>
        <h1>{date}</h1>
        <h3>{weather.info}</h3>
        <h4>{weather.desc}</h4>
        <h4>{temp} °C</h4>
        </div>

    </div>
  );
};

export default WeatherCard;
