import { useContext } from 'react';
import ReactSlider from 'react-slider';
import '../Slider.css';
import SettingsContext from './SettingsContext';
import BackButton from './BackButton';

function Settings() {
  const settings = useContext(SettingsContext);

  return (
    <main className="">
      <h1>Set Your Timer</h1>
      <h2>Working Time: {settings.defaultWorkMins}:00</h2>
      <ReactSlider
        className={'slider'}
        thumbClassName={'thumb'}
        trackClassName={'track'}
        value={settings.defaultWorkMins}
        onChange={newVal => settings.setWorkMins(newVal)}
        min={1}
        max={90}
      />
      <h2>Break Time: {settings.defaultBreakMins}:00</h2>
      <ReactSlider
        className={'slider'}
        thumbClassName={'thumb'}
        trackClassName={'track'}
        value={settings.defaultBreakMins}
        onChange={newVal => settings.setBreakMins(newVal)}
        min={1}
        max={90}
      />

      <BackButton />
    </main>
  );
}

export default Settings;
