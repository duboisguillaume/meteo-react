import React from 'react'
import "./Meteo.css"

export const Meteo = (props) => {
    const src = `http://openweathermap.org/img/wn/${props.meteo.weather[0].icon}@2x.png`;
    const vitesse = Math.round(props.meteo.wind.speed * 3.6);

    let degrees = props.meteo.wind.deg;
    const directions = ['Nord', 'Nord Est', 'Est', 'Sud Est', 'Sud', 'Sud Ouest', 'Ouest', 'Nord Ouest'];
    // Split into the 8 directions
    degrees = degrees * 8 / 360;
    // round to nearest integer.
    degrees = Math.round(degrees, 0);
    // Ensure it's within 0-7
    degrees = (degrees + 8) % 8
    const direction= directions[degrees];
   
    return <div>
        {props.meteo.name}
        <div><img src={src} alt="" /> <span>{props.meteo.weather[0].description}</span></div>
        <p>Temperature minimale : {props.meteo.main.temp_min}°C</p>
        <p>Temperature maximale : {props.meteo.main.temp_max}°C</p>
        <p>Temperature ressentie : {props.meteo.main.feels_like}°C</p>
        <p>Vitesse du vent : {vitesse} kmh</p>
        <p>Direction du vent : {direction}</p>
    </div>;
}

