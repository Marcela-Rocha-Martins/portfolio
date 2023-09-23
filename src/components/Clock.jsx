import React, { useState, useEffect } from "react";
import moment from "moment-timezone";

const Clock = () => {
  const [time, setTime] = useState(
    moment().tz(moment.tz.guess()).format("HH:mm")
  );
  const [date, setDate] = useState(
    moment().tz(moment.tz.guess()).format("ddd D MMM")
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(moment().tz(moment.tz.guess()).format("HH:mm"));
      setDate(moment().tz(moment.tz.guess()).format("ddd D MMM"));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="clockDateTime">
      {/* <p>Timezone: {moment.tz.guess()}</p> */}
      {date} {time}
    </div>
  );
};

export default Clock;
