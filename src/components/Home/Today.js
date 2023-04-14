import React from "react";
export const Today = () => {
    var date = new Date();
    var hour = date.getHours();
    var time = `${
        (hour < 4 && "night") ||
        (hour < 12 && "morning") ||
        (hour < 18 && "afternoon") ||
        (hour < 22 && "evening") ||
        "night"
    }`;
    var days = [
        "weekend",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "weekend",
    ];
    var day = days[date.getDay()];

    return (
        <p>
            Have a good {day === "weekend" ? day : time}!
        </p>
    );
};
