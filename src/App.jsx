import './App.css'
import DegitalClock from './components/DegitalClock.jsx'
import AnalogueClock from './components/AnalogueClock.jsx'
import ChangeButton from './components/ChangeButton'
import { useState } from 'react'
function App() {

  let [DegitalOrAnalog,setDegitalOrAnalog]=useState(true);
  return(<>
  <h1>Simple Clock</h1>
  {DegitalOrAnalog ?<DegitalClock />:<AnalogueClock />}
  <ChangeButton DegitalOrAnalog={DegitalOrAnalog} setDegitalOrAnalog={setDegitalOrAnalog}/>
  </>)
}

export default App
