import { useState, useEffect } from "react";
import "./CountdownTimer.css";
import {
  ConutDownWraper,
  HourStyle,
  
  UnitWraper,
  TileStyle,
} from "./cpm";
import { getRemainingTimeUntilMsTimestamp } from "./Utils/CountdownTimerUtils";

const defaultRemainingTime = {
  seconds: "00",
  minutes: "00",
  hours: "00",
  days: "00",
};

const CountdownTimer = ({ countdownTimestampMs }) => {
  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRemainingTime(countdownTimestampMs);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [countdownTimestampMs]);

  function updateRemainingTime(countdown) {
    setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
  }

  return (
    <ConutDownWraper>
      <UnitWraper>
        <HourStyle>{remainingTime.days}</HourStyle>
        <TileStyle>ايام</TileStyle>
      </UnitWraper>

      <UnitWraper>
        <HourStyle>{remainingTime.hours}</HourStyle>
        <TileStyle>ساعة</TileStyle>
      </UnitWraper>

      <UnitWraper>
        <HourStyle>{remainingTime.minutes}</HourStyle>
        <TileStyle>دقيقة</TileStyle>
      </UnitWraper>

      <UnitWraper>
        <HourStyle>{remainingTime.seconds}</HourStyle>
        <TileStyle>ثانية</TileStyle>
      </UnitWraper>
    </ConutDownWraper>
  );
};

export default CountdownTimer;
