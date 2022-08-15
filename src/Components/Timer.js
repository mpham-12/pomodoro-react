import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PlayButton from './PlayButton';
import PauseButton from './PauseButton';
import SettingsButton from './SettingsButton';
import { useContext } from 'react';
import SettingsContext from './SettingsContext';

const red = '#DC6969';
const yellow = '#F2f78c';
const green = '#8ECB6F';

function Timer() {

  const settingsInfo = useContext(SettingsContext);
  return (
    <div className="timer">
      <CircularProgressbar value={60} text={`${60}%`} styles={buildStyles({
        textColor: 'white',
        pathColor: red,

      })} />
      <div className='play-pause'>
        <PlayButton />
        <PauseButton />
      </div>
      <div className="settings">
      <SettingsButton onClick={() => settingsInfo.setShowSettings(true)} />      </div>
    </div>
  );
}

export default Timer;
