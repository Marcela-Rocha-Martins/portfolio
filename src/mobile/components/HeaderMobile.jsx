import React, { useState, useEffect } from "react";
import "./styles/HeaderMobile.css";

// icons
import SignalIcon from "../images/icons/Signal-Icon.svg";
import BatteryIcon from "../images/icons/Battery-Icon.svg";

// hours
import moment from "moment-timezone";

const HeaderMobile = () => {
  const [time, setTime] = useState(
    moment().tz(moment.tz.guess()).format("HH:mm")
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(moment().tz(moment.tz.guess()).format("HH:mm"));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="HeaderMobile-Container">
      <img
        src={SignalIcon}
        alt="Signal Icon"
        className="HeaderMobile-Container-SignalIcon"
      />
      <div className="HeaderMobile-Container-Hours">{time}</div>
      <img
        src={BatteryIcon}
        alt="Battery Icon"
        className="HeaderMobile-Container-BatteryIcon"
      />
    </div>
  );
};

export default HeaderMobile;
