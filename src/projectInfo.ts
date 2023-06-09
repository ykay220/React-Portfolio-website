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
        info: "The weather app offers a user-friendly interface for inputting city names and retrieving instant 7-day forecasts.",
      },
      {
        info: "Using React's useState and useEffect hooks, the app fetches real-time weather data from a reliable API, ensuring up-to-date accuracy.",
      },
      {
        info: "The app visually presents daily weather forecasts through cards, displaying detailed information like temperature, humidity, wind speed, and weather conditions.",
      },
    ],
  },
];

export default projectsInfo;
