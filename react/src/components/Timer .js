import React, { useState, useEffect } from 'react';
import '../css/Timer.css';

const Timer = () => {
    const [timeRemaining, setTimeRemaining] = useState({
        days: 1,
        hours: 2,
        minutes: 30,
        seconds: 45,
    });

    useEffect(() => {
        const interval = setInterval(() => {
            // Decrease seconds by 1
            setTimeRemaining(prevTime => {
                const newTime = { ...prevTime };
                if (newTime.seconds > 0) {
                    newTime.seconds -= 1;
                } else {
                    if (newTime.minutes > 0) {
                        newTime.minutes -= 1;
                        newTime.seconds = 59;
                    } else {
                        if (newTime.hours > 0) {
                            newTime.hours -= 1;
                            newTime.minutes = 59;
                            newTime.seconds = 59;
                        } else {
                            if (newTime.days > 0) {
                                newTime.days -= 1;
                                newTime.hours = 23;
                                newTime.minutes = 59;
                                newTime.seconds = 59;
                            } else {
                                // Timer expired, do something here
                                clearInterval(interval);
                            }
                        }
                    }
                }
                return newTime;
            });
        }, 1000);

        // Clean up the interval on component unmount
        return () => clearInterval(interval);
    }, []);

    return (
        <div className='container'>
            <div className='row'>
                <div className="timer-container d-flex">
                    <div className="timer-item">
                        <span>{timeRemaining.days}</span>
                        <span>Day(s)</span>
                    </div>
                    <div className="timer-item">
                        <span>{timeRemaining.hours}</span>
                        <span>Hour(s)</span>
                    </div>
                    <div className="timer-item">
                        <span>{timeRemaining.minutes}</span>
                        <span>Minute(s)</span>
                    </div>
                    <div className="timer-item">
                        <span>{timeRemaining.seconds}</span>
                        <span>Second(s)</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Timer;
