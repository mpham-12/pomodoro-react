import './App.css';
import Timer from './Components/Timer';
import Nav from './Components/Nav';
import Settings from './Components/Settings';
import { useState } from 'react';
import SettingsContext from './Components/SettingsContext';

function App() {
  const [showSettings, setShowSettings] = useState(false);
  const [workMins, setWorkMins] = useState(45)
  const [breakMins, setBreakMins] = useState(10)


  return (
    <main className="">
      <Nav />
      <SettingsContext.Provider value={{
        showSettings,
        setShowSettings,
        defaultWorkMins: workMins,
        defaultBreakMins: breakMins,
        setWorkMins,
        setBreakMins,

      }}>
        {showSettings ? <Settings /> : <Timer />}
      </SettingsContext.Provider>

    </main>
  );
}

export default App;
