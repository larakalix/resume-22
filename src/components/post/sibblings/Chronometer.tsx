import { useState, useEffect } from "react";

export const Chronometer = () => {
    const [time, setTime] = useState({
        seconds: 0,
        minutes: 0,
        hours: 0,
    });

    useEffect(() => {
        let isCancelled = false;

        const advanceTime = () => {
            setTimeout(() => {
                let seconds = time.seconds;
                let minutes = time.minutes;
                let hours = time.hours;

                seconds++;

                if (seconds > 59) {
                    minutes++;
                    seconds = 0;
                }
                if (minutes > 59) {
                    hours++;
                    minutes = 0;
                }
                if (hours > 24) hours = 0;

                !isCancelled && setTime({ seconds, minutes, hours });
            }, 1000);
        };
        advanceTime();

        return () => {
            isCancelled = true;
        };
    }, [time]);

    return (
        <span className="text-v-small text-v-gray font-light">
            About{" "}
            {time.hours > 0 && (
                <span>{time.hours < 10 ? time.hours : time.hours} hr, </span>
            )}
            {time.minutes > 0 && (
                <span>
                    {time.minutes < 10 ? time.minutes : time.minutes} min
                </span>
            )}
            {/* {time.seconds < 10 ? "0" + time.seconds : time.seconds} */} read
        </span>
    );
};
