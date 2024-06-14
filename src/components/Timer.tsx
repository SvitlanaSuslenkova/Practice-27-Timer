import { useEffect, useState } from "react";

import "./Timer.css";
function Timer() {
  const [initialTime, setInitialTime] = useState<number>(
    9 * 24 * 60 * 60
  ); /*seconds*/

  const myTimeout = setTimeout(myCount, 1000);
  function myCount() {
    setInitialTime(initialTime - 1);
  }
  if (initialTime == 0) {
    clearTimeout(myTimeout);
  }
  const mydays: number = Math.floor(initialTime / 60 / 60 / 24);
  const myhours: number = Math.floor(initialTime / 60 / 60) - mydays * 24;
  const myminutes: number =
    Math.floor(initialTime / 60) - mydays * 24 * 60 - myhours * 60;
  const myseconds: number =
    initialTime - mydays * 24 * 60 * 60 - myhours * 60 * 60 - myminutes * 60;

  function makePadStart(t: number): string {
    return t.toString().padStart(2, "0");
  }

  const [days, setDays] = useState<number>(mydays);
  const [hours, setHours] = useState<number>(myhours);
  const [minutes, setMinutes] = useState<number>(myminutes);
  const [seconds, setSeconds] = useState<number>(myseconds);
  const [animationD, setAnimationD] = useState<boolean>(false);
  const [animationH, setAnimationH] = useState<boolean>(false);
  const [animationM, setAnimationM] = useState<boolean>(false);
  const [animationS, setAnimationS] = useState<boolean>(false);
  useEffect(() => {
    if (seconds !== myseconds) setAnimationS(true);
    setTimeout(() => {
      setAnimationS(false);
    }, 500);
    setTimeout(() => {
      setSeconds(myseconds);
    }, 250);
  }, [initialTime, seconds, myseconds]);

  useEffect(() => {
    if (minutes !== myminutes) setAnimationM(true);
    setTimeout(() => {
      setAnimationM(false);
    }, 500);
    setTimeout(() => {
      setMinutes(myminutes);
    }, 250);
  }, [minutes, myminutes]);

  useEffect(() => {
    if (hours !== myhours) setAnimationH(true);
    setTimeout(() => {
      setAnimationH(false);
    }, 500);
    setTimeout(() => {
      setHours(myhours);
    }, 250);
  }, [initialTime, hours, myhours]);

  useEffect(() => {
    if (days !== mydays) setAnimationD(true);
    setTimeout(() => {
      setAnimationD(false);
    }, 500);
    setTimeout(() => {
      setDays(mydays);
    }, 250);
  }, [initialTime, days, mydays]);

  return (
    <div className="timerDiv">
      <div className="timer-flip">
        <div className="flip-top-div">
          <div
            className={animationD ? "flip-top flip-top-animation" : "flip-top"}
          >
            <div className="number-container">
              <span
                className={
                  animationD
                    ? "timer-number-top timer-number-top-animation"
                    : "timer-number-top"
                }
              >
                {makePadStart(days)}
              </span>
            </div>
          </div>

          <div
            className={
              animationD
                ? "flip-top-back flip-top-back-animation"
                : "flip-top-back"
            }
          >
            <div className="number-container">
              <span className="timer-number-top-noanimation">
                {makePadStart(days)}
              </span>
            </div>
          </div>
        </div>
        <div className="flip-bottom">
          <div className="number-container">
            <span className="timer-number-bottom">{makePadStart(days)}</span>
          </div>
        </div>
      </div>

      <div className="timer-flip">
        <div className="flip-top-div">
          <div
            className={animationH ? "flip-top flip-top-animation" : "flip-top"}
          >
            <div className="number-container">
              <span
                className={
                  animationH
                    ? "timer-number-top timer-number-top-animation"
                    : "timer-number-top"
                }
              >
                {makePadStart(hours)}
              </span>
            </div>
          </div>

          <div
            className={
              animationH
                ? "flip-top-back flip-top-back-animation"
                : "flip-top-back"
            }
          >
            <div className="number-container">
              <span className="timer-number-top-noanimation">
                {makePadStart(hours)}
              </span>
            </div>
          </div>
        </div>
        <div className="flip-bottom">
          <div className="number-container">
            <span className="timer-number-bottom">{makePadStart(hours)}</span>
          </div>
        </div>
      </div>

      <div className="timer-flip">
        <div className="flip-top-div">
          <div
            className={animationM ? "flip-top flip-top-animation" : "flip-top"}
          >
            <div className="number-container">
              <span
                className={
                  animationM
                    ? "timer-number-top timer-number-top-animation"
                    : "timer-number-top"
                }
              >
                {makePadStart(minutes)}
              </span>
            </div>
          </div>

          <div
            className={
              animationM
                ? "flip-top-back flip-top-back-animation"
                : "flip-top-back"
            }
          >
            <div className="number-container">
              <span className="timer-number-top-noanimation">
                {makePadStart(minutes)}
              </span>
            </div>
          </div>
        </div>
        <div className="flip-bottom">
          <div className="number-container">
            <span className="timer-number-bottom">{makePadStart(minutes)}</span>
          </div>
        </div>
      </div>

      <div className="timer-flip">
        <div className="flip-top-div">
          <div
            className={animationS ? "flip-top flip-top-animation" : "flip-top"}
          >
            <div className="number-container">
              <span
                className={
                  animationS
                    ? "timer-number-top timer-number-top-animation"
                    : "timer-number-top"
                }
              >
                {makePadStart(seconds)}
              </span>
            </div>
          </div>

          <div
            className={
              animationS
                ? "flip-top-back flip-top-back-animation"
                : "flip-top-back"
            }
          >
            <div className="number-container">
              <span className="timer-number-top-noanimation">
                {makePadStart(seconds)}
              </span>
            </div>
          </div>
        </div>
        <div className="flip-bottom">
          <div className="number-container">
            <span className="timer-number-bottom">{makePadStart(seconds)}</span>
          </div>
        </div>
      </div>

      <div className="time-text-under">Days</div>
      <div className="time-text-under">Hours</div>
      <div className="time-text-under">Minutes</div>
      <div className="time-text-under">Seconds</div>
    </div>
  );
}
export default Timer;
