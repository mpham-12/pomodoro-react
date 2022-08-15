import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PlayButton from './PlayButton';

function Timer() {
  const red = '#DC6969';
  const yellow = '#F2f78c';
  const green = '#8ECB6F';

  return (
    <div className="timer">
      <CircularProgressbar value={60} text={`${60}%`} styles={buildStyles({
        textColor: 'white',
        pathColor: red,
        
      })} />
      <div>
        <PlayButton />
      </div>
    </div>
  );
}

export default Timer;
