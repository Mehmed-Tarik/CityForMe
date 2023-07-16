## CityForMe

Idea behind CityForMe application is to facilitate users search for best suited city or cities for purposes such as living or visiting, by providing them a set of inputs where they can enter desired data and based on
them cities which correspond to provided data will be displayed.

## Usage

CityForMe is very simple app to use: 
- On home page right below navbar we have set of inputs(filters)
  in which user can write/select desired options and submit them 
  on button called search and based on given inputs user will receive
  city or cities which matches provided data.

## Project Architecture  

Architecture of project is based on MVC Architecture.

- `model`: contains data.
- `controller`: makes changes to the model based on user input.
- `view`: represents frontend part of application and it is responsible for retrieving and presenting data to the user.

## Project Structure

Project is mainly separated into 2 parts Backend and Frontend where 
- `server/`: represents Backend
- `client/`: represents Frontend

- `server/` contains: 
     - `routes/api/`: Contains backend routes and APIs.
     - `models/`: Contains application's data.
     - `controllers/`: Contains functions for router APIs.
     - `__tests__/`: Contains unit tests for the backend server.

- `client/` contains: 
     - `src/`: Contains the Vue.js source code.
          - `views/`: Contains the views (pages) of the application.
          - `router/`: Contains the Vue Router configuration.
          - `assets/`: Contains static assets (images).
          - `__mocks__/`: Contains axios mock for testing purposes.
          - `components/`: Contains reusable Vue components.
               - `CityCards/`: Contains structure for displaying city cards.
               - `Filters/`: Contains inputs and functions to handle them.

## Technologies Used

- Node.js: JavaScript runtime environment
- Express.js: Backend server framework
- Vue.js: Frontend framework
- Sass: CSS preprocessor for styling
- npm: Package manager for JavaScript
- Jest: Testing framework for JavaScript

## Getting Started

To run the application locally, follow these steps:

1. Clone the repository: `git clone https://github.com/Mehmed-Tarik/CityForMe.git`
2. Install dependencies for the backend: `cd cityForMe(root) && npm install`
3. Install dependencies for the frontend: `cd client && npm install`
4. Start the backend server: `cd cityForMe(root) && npm run dev` or 
                             `cd cityForMe(root) && nodemon server/index.js`
5. Start the frontend development server: `cd client && npm run serve`
6. Open your browser and visit `http://localhost:8080` to see the application.

## Run Tests

- To run tests for Backend: `cd cityForMe(root) && npm run test`
- To run tests for Frontend: `cd client && npm run test:unit`

## Contribution

- Needed improvements: 
     - Creation of Admin panel used for providing new cities..
     - Providing more data inside each city for matching purpose.
     - Providing more filters.
     - Providing a modal or page to each city for presenting all added informations.
     - Giving ability to user to mark favourite cities and page to display them.



