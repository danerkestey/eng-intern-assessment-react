import React from "react";
import "./css/App.css";
import "./css/Fonts.css";

import { StopWatchProvider, useStopWatch } from "./components/StopWatchContext";

import NESBackground from "./components/NESBackground";
import RecordBoard from "./components/RecordBoard";
import GameScene from "./components/GameScene";

const Game: React.FC = () => {
  const { isRunning, workout } = useStopWatch();

  return (
    <div className="game">
      <GameScene isRunning={isRunning} workout={workout} />
      <div className="control-panel">
        <RecordBoard />
      </div>
    </div>
  );
};

export default function App() {
  return (
    <StopWatchProvider>
      <NESBackground size="large">
        <h1>«« SONICIFY »»</h1>
      </NESBackground>
      <Game />
    </StopWatchProvider>
  );
}
