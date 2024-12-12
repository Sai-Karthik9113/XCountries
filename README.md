# React Country Flags Project

This project is part of a student course, focusing on building a React application that fetches and displays country data, including flags. The application fetches data from an API and displays each country's name and flag in a simple, responsive layout.

## Features

- Fetches country data from an external API.
- Displays each country's flag and name in a card format.
- Responsive design that adjusts the layout based on the screen size.
- Error handling for API fetch failures.

## Technologies Used

- **React**: JavaScript library for building the user interface.
- **Axios**: Promise-based HTTP client for making API requests.
- **CSS**: Used for styling the application and creating a responsive layout.

## Project Structure

- **App.js**: The main component that fetches country data and renders the `Flag` components.
- **Card/Flag.js**: Displays a country's flag and name in a card format.
- **App.css**: Main styles for the application layout, including the wrapper for the flags.
- **index.css**: Global styles, including resetting margin, padding, and text alignment.
- **Card.module.css**: Styles for the `Flag` component, including card layout and image size.

## Installation

To get started, clone this repository and install the required dependencies.

1. Clone the repository:
   ```
   git clone https://github.com/Sai-Karthik9113/XCountries.git
   ```

2. Navigate to the project folder:
   ```
   cd react-country-flags
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Run the development server:
   ```
   npm start
   ```

The application should now be running at `http://localhost:3000`.

## API Endpoint

The data is fetched from the following API:

- **Endpoint**: `https://xcountries-backend.azurewebsites.net/all`

## Screenshots

Below is a screenshot of the homepage displaying the flag cards grid:

![Flag Cards Grid][Country Flags]

## License

This project is for educational purposes as part of the course.


[Country Flags]: src/assets/images/image.png