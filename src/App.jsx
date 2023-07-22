import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import LinesChart from './components/LinesChart'


function App() {
  const [data, setData] = useState()
  const [stateButton, setStateButton] = useState(true)

  useEffect(() => {
    const URL = 'https://api-iot-esp32.devcodes.net/api_IOT/v1/data/'
    axios.get(URL)
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  }, [stateButton])

  const handleClick = () => {
    setStateButton(!stateButton)
  }
  console.log(stateButton);
  return (
    <div className='app'>
      <h1 className='app_h1'>DHT11 SENSOR DATA</h1>
      <p className='app_p'>Data captured with DHT11 sensor using ESP32 devkit</p>
      <button className='button_update' onClick={handleClick}>Update data</button>
      <LinesChart data={data} />

    </div>
  )
}

export default App
