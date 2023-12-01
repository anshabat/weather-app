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

### Additional notes
- I used Vite for fast react project creation. Also I used React and Typescript as the most common and comfortable stack for me. 
- I decided to not use third party libraries in order to show my solutions in low level. In real life I would use some UI library and instead of fetch I would use reactQuery or SWR as it has caching, preventing same request duplications and built-in reiterating queries. But I decided that you would like to see my approach using native fetch with setInterval for real-time and how I create low level UI components.
- I used Vite svg imports, they return src, not svg components. therefore I wasn't able to change color programmatically. I decided to not waste time for it, anyway I created Icon components which abstract the source of icons, so in real life it would be easy to change src to component in a single place, the Icon interface would be the same. 
- I used relative paths in imports, but in real life I would use some aliases to create absolute paths in order to simplify future refactoring. 
- Ad error boundary in case api fetch fails I used simple error state. I think in this scenario creating a separate ErrorBoundary react component would be overhead. 

### Unit tests
I didn't add unit tests, as It requires some jest and RTL setup and I already spent more than 4 hours due to the sophisticated layout I decided to build:) But I want to describe my approach to testing the weather cart component.
- mock fetch so we won't make real api calls
- mock api response with weather data
- test default render with mocked data if fetch was fulfilled
- test error display if fetch was rejected
- test if fetch calls every 30 seconds using jest fake timers.
