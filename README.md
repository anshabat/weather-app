# Simple weather app
Application displays current time weather in different cities.
By default there are three cities: London, New York and Madrid. It's easy to add more cards with different cities.

App has a responsible sidebar. You can shrink the width on the desktop. In mobile sizes the sidebar is hidden and it will slide on top of the app if the user clicks the hamburger menu.
So hamburger menu on desktop reduce sidebar width and on mobile size if toggles menu visibility

### Installation
- clone the repo
- get `API_KEY` from [openweathermap](https://openweathermap.org/)
- rename `.env.example` to `.env` and paste `API_KEY` as value of VITE_OPENWEATHER_API_KEY
- run `npm run dev`
