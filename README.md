# Flight Finder

Flight Finder is a React-based web application that allows users to search and browse flight options between two cities. It utilizes the [Sky Scrapper API](https://rapidapi.com/apiheya/api/sky-scrapper) from RapidAPI to fetch flight data and present it in a user-friendly interface.

# <span style="color: red;">Flight Finder loom demo</span>
[google-flight-finder loom demo](https://www.loom.com/share/4629f8f3f15a4f488885a3b45e63e50c?sid=a0b4e939-9c25-402d-b13e-b952703d39ad)

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [API Integration](#api-integration)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Overview

Flight Finder provides a simple and intuitive interface for users to search for flights between different cities on a selected date. The application displays flight details such as the airline name, departure and arrival times, duration, and ticket prices. The Sky Scrapper API is used to pull real-time flight data, ensuring the information is up-to-date.

## Features

- **Flight Search**: Search for flights by specifying the origin, destination, and date of travel.
- **API Integration**: Fetches live flight data using the Sky Scrapper API from RapidAPI.
- **Flight Display**: View detailed information about each flight, including airlines, timings, duration, stops, and prices.
- **Responsive Design**: Optimized for different screen sizes, ensuring usability on both desktop and mobile devices.

## Technologies Used

- **React**: Frontend library for building the user interface.
- **Material-UI**: For designing and styling the application components.
- **Axios**: For making API requests to the Sky Scrapper API.
- **Prop-Types**: For prop validation in React components to maintain code quality.
- **ESLint and Prettier**: For linting and formatting the codebase to ensure consistency and quality.

## API Integration

This project uses the [Sky Scrapper API](https://rapidapi.com/apiheya/api/sky-scrapper) from RapidAPI to fetch flight information. The API provides real-time flight data based on the user's selected origin, destination, and travel date. Make sure to sign up for an API key on [RapidAPI](https://rapidapi.com/) and configure it in the project to enable API requests.

### Setting Up the API Key

1. Go to [RapidAPI](https://rapidapi.com/) and create an account (if you don't have one).
2. Subscribe to the Sky Scrapper API.
3. Copy your API key.
4. Create a `.env` file in the root of your project and add your API key:
    ```bash
    REACT_APP_RAPIDAPI_KEY=your-api-key-here
    ```
5. Restart your development server to apply the changes.

## Setup and Installation

To run this application locally, follow these steps:

1. **Clone the repository:**
    ```bash
    git clone https://github.com/webboxesdeveloper/google-flight-search.git
    cd flight-search
    ```

2. **Install dependencies:**
    Make sure you have [Node.js](https://nodejs.org/) installed, then run:
    ```bash
    npm install
    ```

3. **Run the development server:**
    ```bash
    npm start
    ```
    The application should now be running at `http://localhost:3000`.

4. **Lint the code (optional):**
    To check and fix linting issues, run:
    ```bash
    npm run lint
    ```

## Usage

1. Open the application in your browser at `http://localhost:3000`.
2. Enter the origin city, destination city, and choose a travel date.
3. Click on the "SEARCH" button to retrieve and view the available flights.
4. The results section displays each flight’s details, including:
   - Airline name
   - Departure and arrival times
   - Duration of the flight
   - Stops (e.g., non-stop or with layovers)
   - Price
5. Use the filter options to narrow down the flight results based on your preferences.
6. Choose a sorting option to rearrange the flights according to price, departure time, etc.

## Folder Structure


- **components/**: Contains the React components used in the application, such as `FlightSearch` and `FlightResults`.
- **api/**: Houses the logic for making API calls to fetch flight data using Axios.
- **App.js**: The main component that integrates and manages the flight search and results display.
- **index.js**: The entry point for the React application.

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
4. Push the changes to your branch (`git push origin feature/your-feature`).
5. Open a pull request describing your changes.

Please ensure your code is well-documented and formatted according to the project’s coding conventions.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
