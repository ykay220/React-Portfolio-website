import placeholder from "./assets/placeholder-stock.png";
import gamehub from "./assets/game-hub-hero.png";
import gamehubcropped from "./assets/game-hub-hero-crop.png";
import tracker from "./assets/expense-hero.png";
import weather from "./assets/weather-screen.png";
const projectsInfo = [
  {
    id: 1,
    img: gamehubcropped,
    title: "Game Hub",
    techBio: "Technologies Used: React,CSS",
    github: "https://github.com/ykay220/Game-hub",
    live: "https://game-hub.yamakarimi.com/",
    details: [
      { info: "Completely built with hooks and functional components" },
      { info: "Information on games pulled from a video game API" },
      {
        info: "Games can be filtered by genre using a side menu and by platform and ratings using dropdowns, where the endpoint is updated dynamically",
      },
    ],
  },

  {
    id: 2,
    img: tracker,
    title: "Employee Tracking System",
    github: "https://github.com/ykay220/Employee-Directory-and-Tracking-System",
    live: "https://employee-tracker.yamakarimi.com/",
    techBio: "Technologies Used: React,CSS,Bootstrap",
    details: [
      { info: "Utilizing react-hook-form for form handling and validation" },
      {
        info: "Accessibility considerations to ensure a better user experience for all users",
      },
      {
        info: "Implemented custom hooks",
      },
    ],
  },
  {
    id: 3,
    img: weather,
    title: "Real Time 7 Day Weather Forecast",
    github: "https://github.com/ykay220/Weatherapp-5-day-forecast",
    live: "https://employee-tracker.yamakarimi.com/",
    techBio: "Technologies Used: React,CSS",
    details: [
      {
        info: "The weather app provides a user-friendly interface that allows users to easily input any city name and instantly retrieve the 7-day weather forecast for that location.",
      },
      {
        info: "Leverages the useState and useEffect hooks in React, the app dynamically fetches weather data from a reliable weather forecast API. This ensures that users have access to up-to-date and accurate weather information.",
      },
      {
        info: "The app presents the weather forecast for each day in a visually appealing manner, using cards to display detailed information such as temperature, humidity, wind speed, and weather conditions (e.g., sunny, cloudy, rainy).",
      },
    ],
  },
];

export default projectsInfo;
