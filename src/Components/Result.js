import React from 'react';

const Result = props =>{
    const {city,sunrise,sunset,temp,pressure,wind,err}=props.weather

    let content = null;

    if(!err && city){
        const sunriseTime = new Date(sunrise*1000).toLocaleTimeString();
        const sunsetTime = new Date(sunset*1000).toLocaleTimeString();
        content = (
            <div className="Container">
                <div className="cityContainer">
                    <h3>Wyniki wyszukiwania dla <span className="city">{city}</span></h3>
                </div>
                <div className="specContainer">
                    <p>Aktualna temperatura: <span className="spec">{temp} &#176;C</span></p>
                    <p>Wschód słońca dzisiaj o: <span className="spec">{sunriseTime}</span></p>
                    <p>Zachód słońca dzisiaj o: <span className="spec">{sunsetTime}</span></p>
                    <p>Aktualna siła wiatru: <span className="spec">{wind} m/s</span></p>
                    <p>Aktualne ciśnienie: <span className="spec">{pressure} hPa</span></p>
                </div>
            </div>
        )
    }
    return(
        <div className="content">
            {err ? `Nie mamy w bazie ${city}` : content}
        </div>
        );
}

export default Result