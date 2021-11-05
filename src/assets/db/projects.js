
import forgeImg from '../images/projects/forge.png'
import weatherImg from '../images/projects/weather-dashboard.png'
import budgetImg from '../images/projects/budget-tracker.png'
import noteImg from '../images/projects/note-taker.png'
import funImg from '../images/projects/fun-finder.png'
import codeImg from '../images/projects/code-quiz.png'

const projects = [
    {
        "id": 1,
        "listKey": "a",
        "title": "Forge",
        "description": "A place to connect for tech bootcamp students. Share experiences or ask coding questions for fellow students and grads to review, or jump right in and help out other boot campers with their projects!",
        "skillsUsed": [
            "Node.js",
            "Handlebars",
            "JavaScript",
            "bcrypt",
            "MySql",
            "sequelize"
        ],
        "github": "https://github.com/ratalla816/Forge",
        "deployed": "https://forge-team.herokuapp.com/splash",
        "role": "Back-end developer",
        "image": forgeImg
    },
    {
        "id": 2,
        "listKey": "b",
        "title": "Weather Dashboard",
        "description": "See the weather for any location in the US. Searches will be saved for easy future planning. Enter in the city and state to get the current conditions, plus 5-day forecast.",
        "skillsUsed": [
            "Third-Party API",
            "BootStrap",
            "JavaScript"
        ],
        "github": "https://github.com/audryf/weather-dashboard",
        "deployed": "https://audryf.github.io/weather-dashboard/",
        "role": "Sole Author",
        "image": weatherImg
    },
    {
        "id": 3,
        "listKey": "c",
        "title": "Budget Tracker",
        "description": "Budget Tracker - a progressive web application that allows users to keep track of expenses and earnings on or offline.",
        "skillsUsed": [
            "Express.js",
            "MongoDB / Mongoose",
            "Service Workers",
            "IndexedDB"
        ],
        "github": "https://github.com/audryf/budget-tracker",
        "deployed": "https://immense-refuge-78406.herokuapp.com/",
        "role": "Sole Author",
        "image": budgetImg
    },
    {
        "id": 4,
        "listKey": "d",
        "title": "Note Taker",
        "description": "A simple note taking application that allows you to create new notes and save them using localStorage.",
        "skillsUsed": [
            "JavaScript",
            "HTML",
            "CSS"
        ],
        "github": "https://github.com/audryf/note-taker",
        "deployed": "https://sheltered-caverns-57113.herokuapp.com/",
        "role": "Sole Author",
        "image": noteImg
    },
    {
        "id": 5,
        "listKey": "e",
        "title": "Fun Finder",
        "description": "Led a team in creating an application that will find nearby events and Netflix movies randomly suggested for you based on location and preference.",
        "skillsUsed": [
            "JavaScript",
            "Third-Party API",
            "HTML",
            "CSS"
        ],
        "github": "https://github.com/audryf/fun-finder",
        "deployed": "https://audryf.github.io/fun-finder/",
        "role": "Team leader and back-end developer",
        "image": funImg
    },
    {
        "id": 6,
        "listKey": "f",
        "title": "Code Quiz",
        "description": "User's play a JavaScript trivia game that is timed and keeps score. The score is determined by time remaining on the clock once all questions have been answered. Incorrect answers have a time penalty of 10 seconds.",
        "skillsUsed": [
            "JavaScript",
            "HTML",
            "CSS"
        ],
        "github": "https://github.com/audryf/code-quiz",
        "deployed": "https://audryf.github.io/code-quiz/",
        "role": "Sole Author",
        "image": codeImg
    }
]

export default projects;