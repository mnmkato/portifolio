import { faBookOpenReader, faCode, faGear } from '@fortawesome/free-solid-svg-icons';
import { faPython, faHtml5, faCss3Alt, faReact, faNodeJs, faGitAlt } from '@fortawesome/free-brands-svg-icons';

export const data = {
    displayImage:"https://ca.slack-edge.com/T05FFAA91JP-U05RYRH1FH7-6d00d18ebc45-512",
    githubURL:"https://github.com/mnmkato/",
    about:"I'm a passionate front-end developer with experience collaborating on diverse projects, where I've learnt different languages, frameworks and technologies. I'm committed to  performance optimization and  ensuring mobile responsiveness in projects I've done. Thank you for visiting my portfolio.",
    }
export const skills = [
    {
        type: "Languages",
        icon: faCode,
        list: [
            {
                name: "JavaScript",
                icon: faCode
            },
            {
                name: "Python",
                icon: faPython
            },
            {
                name: "HTML",
                icon: faHtml5
            },
            {
                name: "CSS",
                icon: faCss3Alt
            }
        ]
    },
    {
        type: "Frameworks",
        icon: faBookOpenReader,
        list: [
            {
                name: "React",
                icon: faReact
            },
            {
                name: "NodeJs",
                icon: faNodeJs
            }
        ]
    },
    {
        type: "Technologies",
        icon: faGear,
        list: [
            {
                name: "Git",
                icon: faGitAlt
            },
            {
                name: "Webpack",
                icon: faGear // Using a generic icon as there's no specific FontAwesome icon for Webpack
            },
            {
                name: "Vite",
                icon: faGear // Using a generic icon as there's no specific FontAwesome icon for Vite
            }
        ]
    }
];

export const projectList = [
    {
      screenshot: "screenshots/movie_project.png",
      title: "Movie Box",
      description: "A movie web app that shows the top 10 most popular movies, implements movie search and shows movie details",
      ingredients: ["Javascript", "React", "HTML/CSS","Vite","TMDB API"],
      code: "https://github.com/mnmkato/movie-project",
      demo: "https://mnmkato.github.io/movie-project/",
    },
    {
        screenshot: "screenshots/weather_app.png",
        title: "Weather App",
        description: "A simple web application that provides real-time weather information based on your location.",
        ingredients: ["Javascript","HTML/CSS", "Webpack", "Weather API"],
        code: "https://github.com/mnmkato/WeatherApp",
        demo: "https://mnmkato.github.io/WeatherApp/dist/",
    }]
