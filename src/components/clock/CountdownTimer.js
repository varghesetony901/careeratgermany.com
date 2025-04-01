import React, { useEffect, useState } from 'react';
import './Timer.scss';

const CountdownTimer = ({ targetDate }) => {
    const calculateTimeLeft = (target) => {
        const now = new Date().getTime();
        const targetTime = new Date(target).getTime();
        const timeDifference = targetTime - now;

        if (timeDifference <= 0) {
            return {
                total: 0,
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
            };
        }

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        return {
            total: timeDifference,
            days,
            hours,
            minutes,
            seconds,
        };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

    useEffect(() => {
        const interval = setInterval(() => {
            const newTimeLeft = calculateTimeLeft(targetDate);
            setTimeLeft(newTimeLeft);

            if (newTimeLeft.total <= 0) {
                clearInterval(interval);
            }
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [targetDate]);


    return (

        <>

            {timeLeft.total > 0 ? (
                <>
                    <div className="clock_lazy"><p>Loading...!</p></div>
                    <div className="clock__timer">


                        <div className="clock__timer-div">
                            <h3>{(timeLeft.days).toString().length == 1 ? `0${timeLeft.days}` : timeLeft.days}</h3>
                        </div>

                        <span>:</span>

                        <div className="clock__timer-div">
 

                            <h3>
                                {(timeLeft.hours).toString().length == 1 ? `0${timeLeft.hours}` : timeLeft.hours}
                            </h3>
                        </div>

                        <span>:</span>
                        <div className="clock__timer-div">

                            <h3>
                                {(timeLeft.minutes).toString().length == 1 ? `0${timeLeft.minutes}` : timeLeft.minutes}
                            </h3>
                        </div>

                        <span>:</span>

                        <div className="clock__timer-div">

                            <h3>
                                {(timeLeft.seconds).toString().length == 1 ? `0${timeLeft.seconds}` : timeLeft.seconds}
                            </h3>
                        </div>
                    </div>
                </>

            ) : (
                <p>Updating...!!!</p>
            )}
        </>


    );
};

export default CountdownTimer;
