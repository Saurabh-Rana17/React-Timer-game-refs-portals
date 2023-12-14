import Player from "./components/Player.jsx";
import TimerChallenge from "./components/TimerChallenge.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge targetTime={1} title={"easy"} />
        <TimerChallenge targetTime={5} title={"Not easy"} />
        <TimerChallenge targetTime={10} title={"Getting Tough"} />
        <TimerChallenge targetTime={15} title={"pros only"} />
      </div>
    </>
  );
}

export default App;
