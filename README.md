# Weather App

This weather application is a simple web app that allows users to view weather information. After entering a location name, the application fetches real-time weather data using the OpenWeatherMap API and displays it on the screen.

## Live Project Link

You can access the live version of the project [here](https://weather-app-furkan.vercel.app/).

## Usage

1. Enter a location name in the "Enter Your Location" text box.
2. Click the "Search" button to display weather information.
3. When weather information is successfully retrieved, it will be displayed on the screen. If the location is not found, an appropriate error message will be shown.

## Screenshots

<div align="center">
  <img src="https://github.com/furkan-dogu/Weather-App/blob/main/assets/weather-app.gif" />
</div>


<div align="center">
  <img src="https://github.com/furkan-dogu/Weather-App/blob/main/assets/Screenshot_1.jpg"  width="30%" height="400" />
  <img src="https://github.com/furkan-dogu/Weather-App/blob/main/assets/Screenshot_2.jpg"  width="30%" height="400" />
  <img src="https://github.com/furkan-dogu/Weather-App/blob/main/assets/Screenshot_3.jpg"  width="30%" height="400" />
</div>





## Technologies Used

- HTML
- CSS
- JavaScript

## API Key

This application uses the OpenWeatherMap API. To use your own API key, update the `apiKey` variable in the `app.js` file.

```javascript
const apiKey = "YOUR_API_KEY";
