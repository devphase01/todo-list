import React, { useState } from 'react'

const Timer = () => {
    const [currentDate, setCurrentDate] = useState(new Date().toLocaleTimeString());

    setInterval(() => setCurrentDate(new Date().toLocaleTimeString()), 999);
    return (
        <div><h3>Live Time:</h3>{ currentDate }</div>
    )
}

export default Timer