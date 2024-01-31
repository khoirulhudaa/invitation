import axios from "axios";
import { useState } from "react";
import { FaSearch, FaWater, FaWind } from "react-icons/fa";
import ErrorMessage from "../../Components/errorMessage";
import { Clear, Haze, MoonCloud, Snow, Squal, SunCloud, SunRain, Tornado } from "../../assets";

const Homepage = () => {
  const [city, setCity] = useState<string>('');
  const [weatherData, setWeatherData] = useState<any>(null);
  const [error, setError] = useState<string>('');

  const apiKey = '4cae5e7e0f71c3b22f62b988b197ce93';
  const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

  const handleCityChange = (event: any) => {
    const capitalizedCity = event.target.value
    .toLowerCase() 
    .split(' ')    
    .map((word: any) => word.charAt(0).toUpperCase() + word.slice(1)) 
    .join(' ');    

    setCity(capitalizedCity);
  };

  const getWeatherData = async (e: any) => {
    try {
      e.preventDefault()
      const response = await axios.get(`${apiUrl}?q=${city}&appid=${apiKey}`);
      setWeatherData(response.data);
      console.log(response)
      setError('');
    } catch (error) {
      e.preventDefault()
      setWeatherData(null);
      setError('City not found. Please try again.');
    }
  };

  const getIconWeather = (weather: string) => {
    switch (weather) {
      case "Haze":
        return Haze
      case "Clouds":
        return Haze
      case "Clear":
        return Clear
      case "Snow":
        return Snow
      case "Rain":
        return SunRain
      case "Tornado":
        return Tornado
      case "Squall":
        return Squal
      default:
        return MoonCloud
    }
  }

  return (
    <div className="w-screen min-h-screen md:py-0 py-8 overflow-hidden bg-white flex items-center">
      <div className="w-[90vw] md:w-[30vw] h-max md:h-[90vh] bg-blue-500 rounded-[24px] overflow-hidden px-6 pt-6 md:pb-6 pb-12 border border-slate-400 shadow-lg mx-auto">
        {
          error !== '' ? (
            <ErrorMessage error={error} />
          ):
            null
        }
        <div className="w-[100%] h-[50px] flex items-center justify-between">
          <div className="h-full w-[80%] rounded-full bg-slate-300 overflow-hidden">
            <form onSubmit={getWeatherData} className="z-40 h-full w-full">
              <input type="text" name="location" value={city} onChange={(e: any) => handleCityChange(e)} className="border-0 bg-white outline-0 h-full w-full px-4" />
            </form>
          </div>
          <div onClick={(e: any) => getWeatherData(e)} className="w-[50px] h-[50px] rounded-full cursor-pointer flex text-[20px] bg-white justify-center items-center text-blue-500 cusros-pointer hover:brightness-[90%] active:scale-[0.98] duration-100 p-1">
            <FaSearch />
          </div>
        </div>

        <img src={weatherData !== null ? getIconWeather(weatherData.weather[0].main) : SunCloud} className={`${weatherData !== null && weatherData.weather[0].main === 'Clouds' || weatherData !== null && weatherData.weather[0].main === 'Haze' ? 'w-[70%]' : 'w-[50%]'} mx-auto mt-8 mb-2`} alt="weather" />
        <h1 className={`text-white text-center text-[50px] ${weatherData !== null && weatherData.weather[0].main === 'Clouds' || weatherData !== null && weatherData.weather[0].main === 'Haze' ? 'mt-[-22px]' : 'mt-0'}`}>{weatherData !== null ? String(weatherData?.main?.temp).substring(0, 2) : 0}°C</h1>
        <h1 className="text-white text-center text-[38px]">{weatherData !== null ? weatherData.name : null}</h1>

        <div className="w-[80%] mx-auto flex items-center justify-between mt-10 h-[60px] border-t border-t-white pt-12">
          <div className="w-1/2 text-white flex items-center">
            <FaWater className="text-[40px]" />
            <div className="text-left ml-4">
              <p>{weatherData !== null ? weatherData.main.humidity : 0}</p>
              <small>Humidity</small>
            </div>
          </div>
          <div className="w-1/2 text-white flex justify-end items-center">
          <FaWind className="text-[40px]" />
            <div className="text-left ml-4">
              <p>{weatherData !== null ? weatherData.wind.speed : 0}</p>
              <small>Wind speed</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage
